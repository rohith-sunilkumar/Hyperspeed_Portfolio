import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Rohith Sunilkumar | Application & Web Developer — Palakkad, Kerala & Global',
  description:
    'Rohith Sunilkumar is a Full-Stack Application & Web Developer based in Palakkad, Kerala. Building high-performance web applications, Flutter mobile apps, custom business software, and scalable APIs for clients across India and worldwide.',
  keywords: [
    'Application Developer Palakkad',
    'Web Developer in Palakkad',
    'Application Developer Kerala',
    'Web Developer Kerala',
    'Software Developer Palakkad',
    'Full Stack Developer India',
    'MERN Stack Developer Kerala',
    'React Developer Palakkad',
    'Next.js Developer India',
    'Mobile Application Developer Kerala',
    'Flutter Developer Palakkad',
    'Custom Business Software Kerala',
    'Backend API Developer India',
    'Remote Web Developer Worldwide',
    'Rohith Sunilkumar',
    'Rohith Sunil Kumar',
    'Rohith S',
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
    title: 'Rohith Sunilkumar | Application & Web Developer — Palakkad, Kerala & Global',
    description:
      'Full-Stack Application & Web Developer in Palakkad, Kerala. Engineering custom SaaS platforms, Flutter mobile apps, business software, and resilient backend systems.',
    images: [
      {
        url: 'https://rohithsunilkumar.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rohith Sunilkumar - Application & Web Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohith Sunilkumar | Application & Web Developer — Palakkad, Kerala & Global',
    description:
      'Application & Web Developer in Palakkad, Kerala. Building production software for businesses in India and worldwide.',
    images: ['https://rohithsunilkumar.in/og-image.jpg'],
  },
  other: {
    'geo.region': 'IN-KL',
    'geo.placename': 'Palakkad',
    'geo.position': '10.7867;76.6548',
    'ICBM': '10.7867, 76.6548',
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://rohithsunilkumar.in/#person',
    name: 'Rohith Sunilkumar',
    alternateName: ['Rohith Sunil Kumar', 'Rohith S'],
    url: 'https://rohithsunilkumar.in',
    image: 'https://rohithsunilkumar.in/profile.jpg',
    telephone: '+91 95263 21140',
    email: 'rohith.sunilkumar09@gmail.com',
    jobTitle: 'Full-Stack Application & Web Developer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Palakkad',
      addressLocality: 'Palakkad',
      addressRegion: 'Kerala',
      postalCode: '678001',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'Flutter',
      'Dart',
      'MongoDB',
      'Express.js',
      'JavaScript',
      'TypeScript',
      'MERN Stack',
      'REST API Development',
      'Custom Business Software',
    ],
    sameAs: [
      'https://github.com/rohith-sunilkumar',
      'https://www.linkedin.com/in/rohith-sunilkumar/',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://rohithsunilkumar.in/#website',
    name: 'Rohith Sunilkumar Portfolio',
    url: 'https://rohithsunilkumar.in',
    author: {
      '@id': 'https://rohithsunilkumar.in/#person',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': 'https://rohithsunilkumar.in/#localbusiness',
    name: 'Rohith Sunilkumar — Web & Application Developer',
    alternateName: [
      'Rohith Sunilkumar Software Studio',
      'Rohith Sunilkumar Web Development',
    ],
    url: 'https://rohithsunilkumar.in',
    logo: 'https://rohithsunilkumar.in/profile.jpg',
    image: 'https://rohithsunilkumar.in/og-image.jpg',
    telephone: '+91 95263 21140',
    email: 'rohith.sunilkumar09@gmail.com',
    description:
      'Independent Web and Application Development studio based in Palakkad, Kerala (PIN 678001). Engineered by Rohith Sunilkumar, specializing in responsive web applications, cross-platform Flutter mobile apps, custom business ERPs, and scalable backend APIs for local businesses, Indian enterprises, and global clients.',
    priceRange: '₹₹',
    currenciesAccepted: 'INR, USD, EUR, AED',
    paymentAccepted: 'UPI, Net Banking, Credit Card, Wire Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Palakkad',
      addressLocality: 'Palakkad',
      addressRegion: 'Kerala',
      postalCode: '678001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.7867,
      longitude: 76.6548,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Palakkad', sameAs: 'https://en.wikipedia.org/wiki/Palakkad' },
      { '@type': 'AdministrativeArea', name: 'Kerala', sameAs: 'https://en.wikipedia.org/wiki/Kerala' },
      { '@type': 'Country', name: 'India', sameAs: 'https://en.wikipedia.org/wiki/India' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    founder: {
      '@id': 'https://rohithsunilkumar.in/#person',
    },
    sameAs: [
      'https://github.com/rohith-sunilkumar',
      'https://www.linkedin.com/in/rohith-sunilkumar/',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Applications Development',
            description: 'Custom SaaS platforms, responsive web apps, and portal development in Palakkad, Kerala.',
            url: 'https://rohithsunilkumar.in/services/web-applications',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Applications Development',
            description: 'Native-speed iOS and Android cross-platform mobile apps with Flutter.',
            url: 'https://rohithsunilkumar.in/services/mobile-applications',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Business Software',
            description: 'Bespoke ERPs, billing systems, and operational workflow software.',
            url: 'https://rohithsunilkumar.in/services/business-software',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Backend & Scalable APIs',
            description: 'High-performance microservices, database schemas, and REST APIs.',
            url: 'https://rohithsunilkumar.in/services/backend-and-apis',
          },
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
