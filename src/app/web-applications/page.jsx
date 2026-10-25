import { servicesData } from '@/data/servicesData';
import ServiceDetailClientView from '@/app/services/[slug]/ServiceDetailClientView';
import { notFound } from 'next/navigation';

const slug = 'web-applications';

export function generateMetadata() {
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: 'Web Applications | Rohith Sunilkumar' };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      'Web Application Developer Palakkad',
      'Web Developer Palakkad',
      'React Developer Kerala',
      'Next.js Developer India',
      'Custom Web Applications Kerala',
      'SaaS Platform Developer India',
      'Rohith Sunilkumar',
    ],
    alternates: {
      canonical: `https://rohithsunilkumar.in/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://rohithsunilkumar.in/${slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function WebApplicationsPage() {
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.eyebrow,
    description: service.overview,
    url: `https://rohithsunilkumar.in/${slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rohith Sunilkumar — Web & Application Developer',
      url: 'https://rohithsunilkumar.in',
      telephone: '+91 95263 21140',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Palakkad',
        addressRegion: 'Kerala',
        postalCode: '678001',
        addressCountry: 'IN',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Palakkad' },
      { '@type': 'AdministrativeArea', name: 'Kerala' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailClientView service={service} allServices={servicesData} />
    </>
  );
}
