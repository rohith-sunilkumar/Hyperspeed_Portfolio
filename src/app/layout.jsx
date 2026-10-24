import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Rohith Sunilkumar | Full-Stack MERN Developer | React & Node.js Expert',
  description:
    'Rohith Sunilkumar (Rohith S) is a Full-Stack MERN Developer specializing in React.js, Node.js, MongoDB, Express.js, AI Integration, and scalable modern web applications.',
  keywords: [
    'Rohith Sunilkumar',
    'Rohith Sunil Kumar',
    'Rohith S',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Full Stack Developer',
    'JavaScript Developer',
    'MongoDB Developer',
    'Express.js Developer',
    'AI Integration Developer',
    'Web Developer Kerala',
    'Palakkad Developer',
    'Tailwind CSS Developer',
  ],
  authors: [{ name: 'Rohith Sunilkumar' }],
  metadataBase: new URL('https://rohithsunilkumar.in'),
  alternates: {
    canonical: 'https://rohithsunilkumar.in/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    url: 'https://rohithsunilkumar.in/',
    siteName: 'Rohith Sunilkumar Portfolio',
    title: 'Rohith Sunilkumar | Full-Stack MERN Developer | React & Node.js Expert',
    description:
      'Professional portfolio of Rohith Sunilkumar showcasing MERN Stack projects, AI integration, real-time applications, and modern web development.',
    images: [
      {
        url: 'https://rohithsunilkumar.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rohith Sunilkumar - Full Stack MERN Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohith Sunilkumar | Full-Stack MERN Developer | React & Node.js Expert',
    description:
      'Explore the portfolio of Rohith Sunilkumar, Full-Stack MERN Developer specializing in React, Node.js, AI integration and scalable web applications.',
    images: ['https://rohithsunilkumar.in/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rohith Sunilkumar',
    alternateName: ['Rohith Sunil Kumar', 'Rohith S'],
    url: 'https://rohithsunilkumar.in',
    image: 'https://rohithsunilkumar.in/profile.jpg',
    jobTitle: 'Full-Stack MERN Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Palakkad',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'JavaScript',
      'MERN Stack',
      'AI Integration',
      'Tailwind CSS',
      'REST API Development',
      'Socket.IO',
    ],
    sameAs: [
      'https://github.com/rohith-sunilkumar',
      'https://linkedin.com/in/rohithsunilkumar',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rohith Sunilkumar Portfolio',
    url: 'https://rohithsunilkumar.in',
    author: {
      '@type': 'Person',
      name: 'Rohith Sunilkumar',
    },
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Rohith Sunilkumar - Full-Stack Development Services',
    url: 'https://rohithsunilkumar.in',
    image: 'https://rohithsunilkumar.in/profile.jpg',
    description:
      'Professional Full-Stack MERN development services including React.js, Node.js, MongoDB, Express.js, AI integration and scalable web applications.',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Palakkad',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body className="bg-[#ffffff] text-[#0a0a0a] font-sans antialiased selection:bg-neutral-900 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
