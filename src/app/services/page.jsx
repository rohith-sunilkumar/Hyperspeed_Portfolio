import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import ServicesClientView from './ServicesClientView';

export const metadata = {
  title: 'Engineering & Software Development Services | Rohith Sunilkumar',
  description:
    'Explore custom software development services by Rohith Sunilkumar in Palakkad, Kerala. Specializing in Web Applications, Mobile Apps (Flutter), Custom Business Software, and Scalable Backend APIs for clients across India and globally.',
  keywords: [
    'Web Application Developer Palakkad',
    'Mobile App Developer Kerala',
    'Custom Business Software India',
    'Full Stack Developer Palakkad',
    'Software Engineer Kerala',
    'Backend API Development Services',
    'SaaS Development Company Kerala',
    'Flutter Developer Palakkad',
  ],
  alternates: {
    canonical: 'https://rohithsunilkumar.in/services',
  },
  openGraph: {
    title: 'Software Development & Application Services | Rohith Sunilkumar',
    description:
      'High-performance Web Apps, Mobile Systems, Business Tools & APIs built with React, Next.js, Flutter, and Node.js. Serving Palakkad, Kerala, and global clients.',
    url: 'https://rohithsunilkumar.in/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Software Development Services by Rohith Sunilkumar',
    description:
      'Comprehensive web application, mobile app, and business software development services available in Palakkad, Kerala, across India, and globally.',
    itemListElement: servicesData.map((svc, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: svc.title,
        description: svc.overview,
        url: `https://rohithsunilkumar.in/services/${svc.slug}`,
        provider: {
          '@type': 'Person',
          name: 'Rohith Sunilkumar',
          jobTitle: 'Full-Stack Software Developer',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Palakkad',
            addressRegion: 'Kerala',
            addressCountry: 'IN',
          },
        },
        areaServed: [
          { '@type': 'City', name: 'Palakkad' },
          { '@type': 'AdministrativeArea', name: 'Kerala' },
          { '@type': 'Country', name: 'India' },
          { '@type': 'Place', name: 'Worldwide' },
        ],
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesClientView services={servicesData} />
    </>
  );
}
