import { notFound } from 'next/navigation';
import { servicesData } from '@/data/servicesData';
import ServiceDetailClientView from './ServiceDetailClientView';

export function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | Rohith Sunilkumar',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      service.title,
      `${service.title} Palakkad`,
      `${service.title} Kerala`,
      `${service.title} India`,
      'Application Developer Palakkad',
      'Web Developer Kerala',
      'Software Engineer India',
      'Remote Full-Stack Developer',
    ],
    alternates: {
      canonical: `https://rohithsunilkumar.in/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://rohithsunilkumar.in/services/${service.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Schema.org Structured Data for this specific service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        serviceType: service.eyebrow,
        description: service.overview,
        url: `https://rohithsunilkumar.in/services/${service.slug}`,
        provider: {
          '@type': 'Person',
          name: 'Rohith Sunilkumar',
          jobTitle: 'Full-Stack Software Developer',
          url: 'https://rohithsunilkumar.in',
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
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://rohithsunilkumar.in',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://rohithsunilkumar.in/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: `https://rohithsunilkumar.in/services/${service.slug}`,
          },
        ],
      },
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
