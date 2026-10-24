import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Please provide name, email, and project details.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER ? process.env.EMAIL_USER.trim() : '';
    const emailPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';
    const recipientEmail = (process.env.EMAIL_TO || emailUser || 'rohith.sunilkumar09@gmail.com').trim();

    // Verify SMTP credentials are configured
    if (!emailUser || !emailPass) {
      console.warn('Nodemailer: EMAIL_USER or EMAIL_PASS environment variables are not set.');
      return Response.json(
        {
          error:
            'Email service is not yet configured. Please set EMAIL_USER and EMAIL_PASS in .env.local',
        },
        { status: 500 }
      );
    }

    // Configure transporter
    const transporter = nodemailer.createTransport(
      process.env.EMAIL_HOST
        ? {
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT) || 465,
            secure:
              process.env.EMAIL_SECURE === 'true' ||
              Number(process.env.EMAIL_PORT) === 465,
            auth: {
              user: emailUser,
              pass: emailPass,
            },
          }
        : {
            service: process.env.EMAIL_SERVICE || 'gmail',
            auth: {
              user: emailUser,
              pass: emailPass,
            },
          }
    );

    const formattedDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    // ─── 1. Admin Email (Inquiry delivered to Rohith) ───
    const adminMailOptions = {
      from: `"Portfolio Inquiry" <${emailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Project Inquiry: [${service || 'General'}] from ${name}`,
      text: `
New Project Inquiry Received

Name: ${name}
Email: ${email}
Scope / Area: ${service || 'General'}
Date: ${formattedDate}

Project Details:
${message}
      `.trim(),
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f7f8; margin: 0; padding: 24px; color: #111827; }
            .card { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; max-width: 580px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { background: #0a0a0a; color: #ffffff; padding: 24px; }
            .header h2 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.02em; }
            .header p { margin: 4px 0 0; font-size: 13px; color: #9ca3af; }
            .body { padding: 24px; }
            .field-group { margin-bottom: 18px; }
            .label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: #6b7280; letter-spacing: 0.05em; margin-bottom: 4px; }
            .value { font-size: 15px; color: #111827; font-weight: 500; }
            .badge { display: inline-block; background: #f3f4f6; border: 1px solid #e5e7eb; padding: 4px 10px; border-radius: 6px; font-size: 13px; font-weight: 600; color: #1f2937; }
            .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 14px; font-size: 14px; line-height: 1.6; color: #374151; white-space: pre-wrap; margin-top: 6px; }
            .footer { padding: 18px 24px; background: #fafafa; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
            .btn { display: inline-block; background: #0a0a0a; color: #ffffff !important; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none; margin-top: 12px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h2>New Project Inquiry</h2>
              <p>Submitted via your portfolio contact modal</p>
            </div>
            <div class="body">
              <div class="field-group">
                <div class="label">Client Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field-group">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-group">
                <div class="label">Scope / Area</div>
                <div><span class="badge">${service || 'General Consultation'}</span></div>
              </div>
              <div class="field-group">
                <div class="label">Project Details</div>
                <div class="message-box">${message}</div>
              </div>
              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${email}?subject=Re:%20Project%20Inquiry%20-%20Rohith%20Sunilkumar" class="btn">Reply to ${name}</a>
              </div>
            </div>
            <div class="footer">
              Received on ${formattedDate} (IST)
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const linkedinUrl = process.env.LINKEDIN_URL || 'https://www.linkedin.com/in/rohith-sunilkumar/';

    // ─── 2. Confirmation Email (Auto-reply sent to the Client) ───
    const clientMailOptions = {
      from: `"Rohith Sunilkumar" <${emailUser}>`,
      to: email,
      replyTo: recipientEmail,
      subject: `Inquiry Received — Rohith Sunilkumar`,
      text: `
Hi ${name},

Thank you for reaching out regarding ${service || 'your project'}.

I have received your project details and requirements. I personally review every inquiry and will respond within 24 hours with initial thoughts on approach, architecture, and estimated timeline.

Summary of what you shared:
- Scope: ${service || 'General Consultation'}
- Details: ${message}

If you have additional specifications, wireframes, or documents to share in the meantime, simply reply directly to this email.

Best regards,

Rohith Sunilkumar
Full-Stack Software Developer
Email: ${recipientEmail}
Website: https://rohithsunilkumar.in
LinkedIn: ${linkedinUrl}
      `.trim(),
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fafaf9; margin: 0; padding: 24px; color: #171717; }
            .card { background: #ffffff; border: 1px solid #e7e5e4; border-radius: 14px; max-width: 580px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 12px -2px rgba(0,0,0,0.04); }
            .header { padding: 32px 28px 20px; border-bottom: 1px solid #f5f5f4; }
            .tag { font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.1em; color: #737373; margin-bottom: 8px; }
            .title { font-size: 22px; font-weight: 700; color: #0a0a0a; margin: 0; letter-spacing: -0.02em; }
            .body { padding: 28px; line-height: 1.65; color: #404040; font-size: 15px; }
            .greeting { font-size: 16px; font-weight: 600; color: #0a0a0a; margin-bottom: 14px; }
            .summary-box { background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 10px; padding: 18px 20px; margin: 22px 0; }
            .summary-title { font-size: 12px; text-transform: uppercase; font-weight: 700; color: #737373; letter-spacing: 0.05em; margin-bottom: 10px; }
            .summary-item { font-size: 14px; margin-bottom: 8px; color: #262626; }
            .summary-item strong { color: #0a0a0a; }
            .quote { border-left: 3px solid #0a0a0a; padding-left: 12px; margin-top: 8px; font-style: italic; color: #525252; font-size: 13.5px; }
            .footer { padding: 24px 28px; background: #fafaf9; border-top: 1px solid #f5f5f4; font-size: 13px; color: #737373; }
            .signature { font-size: 15px; font-weight: 700; color: #0a0a0a; margin-bottom: 2px; }
            .role { font-size: 13px; color: #737373; margin-bottom: 14px; }
            .links a { color: #0a0a0a; text-decoration: none; font-weight: 500; margin-right: 14px; font-size: 12px; }
            .links a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <div class="tag">Inquiry Received</div>
              <h1 class="title">Thank you for reaching out.</h1>
            </div>
            <div class="body">
              <div class="greeting">Hi ${name},</div>
              <p style="margin: 0 0 14px;">
                I have received your project details regarding <strong>${service || 'Software Development'}</strong>. Thank you for considering me for your build.
              </p>
              <p style="margin: 0 0 14px;">
                I personally review every inquiry and will respond within <strong>24 hours</strong> with initial thoughts on approach, system architecture, and estimated timeline.
              </p>

              <div class="summary-box">
                <div class="summary-title">Summary of your request</div>
                <div class="summary-item"><strong>Scope:</strong> ${service || 'General Software Consultation'}</div>
                <div class="summary-item"><strong>Details:</strong></div>
                <div class="quote">${message}</div>
              </div>

              <p style="margin: 0; font-size: 14px; color: #737373;">
                Need to add more context, design links, or technical requirements? You can simply reply directly to this email.
              </p>
            </div>
            <div class="footer">
              <div class="signature">Rohith Sunilkumar</div>
              <div class="role">Full-Stack Software Developer • Palakkad, Kerala</div>
              <div class="links">
                <a href="https://rohithsunilkumar.in">Portfolio</a>
                <a href="${linkedinUrl}">LinkedIn</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails concurrently:
    // 1) Admin notification to Rohith
    // 2) Confirmation auto-reply to client
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions).catch((err) => {
        // If client email address is invalid, log it without failing the main submission
        console.error('Confirmation email to client failed:', err.message);
      }),
    ]);

    return Response.json(
      { success: true, message: 'Inquiry and confirmation emails sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return Response.json(
      {
        error:
          error.message ||
          'Failed to send inquiry email. Please check server logs and configuration.',
      },
      { status: 500 }
    );
  }
}
