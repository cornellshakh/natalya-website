import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'service' | 'article';
  pageTitle?: string;
  description?: string;
  url?: string;
  image?: string;
  article?: {
    title: string;
    description: string;
    publishDate: string;
    author: string;
    category: string;
  };
  service?: {
    name: string;
    description: string;
    price?: string;
  };
}

export default function StructuredData({
  type = 'organization',
  url = window.location.href,
  article,
  service
}: StructuredDataProps) {
  const { language } = useLanguage();

  const getOrganizationData = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Natalya Shakh - Účetní služby",
    "alternateName": "Natalya Shakh - Accounting Services",
    "url": "https://natalya-website.vercel.app",
    "logo": "https://natalya-website.vercel.app/favicon/favicon-32x32.png",
    "image": "https://natalya-website.vercel.app/favicon/favicon-32x32.png",
    "description": language === 'cs' 
      ? "Profesionální účetní služby, daňové poradenství a vedení účetnictví pro malé a střední podniky v České republice."
      : "Professional accounting services, tax consulting and bookkeeping for small and medium enterprises in Czech Republic.",
    "founder": {
      "@type": "Person",
      "name": "Natalya Shakh",
      "jobTitle": language === 'cs' ? "Účetní specialistka" : "Accounting Specialist"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+420-XXX-XXX-XXX",
      "contactType": "customer service",
      "availableLanguage": ["cs", "ru", "en"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CZ",
      "addressLocality": "Prague"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Czech Republic"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Accounting Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": language === 'cs' ? "Vedení účetnictví" : "Bookkeeping",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": language === 'cs' ? "Kompletní vedení účetnictví" : "Complete bookkeeping services"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": language === 'cs' ? "Daňové poradenství" : "Tax consulting",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": language === 'cs' ? "Daňová přiznání" : "Tax returns"
              }
            }
          ]
        }
      ]
    }
  });

  const getLocalBusinessData = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://natalya-website.vercel.app",
    "name": "Natalya Shakh - Účetní služby",
    "image": "https://natalya-website.vercel.app/favicon/favicon-32x32.png",
    "description": language === 'cs' 
      ? "Profesionální účetní služby, daňové poradenství a vedení účetnictví pro malé a střední podniky v České republice."
      : "Professional accounting services, tax consulting and bookkeeping for small and medium enterprises in Czech Republic.",
    "url": "https://natalya-website.vercel.app",
    "telephone": "+420-XXX-XXX-XXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CZ",
      "addressLocality": "Prague"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.0755,
      "longitude": 14.4378
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": "Czech Republic"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Accounting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'cs' ? "Vedení účetnictví" : "Bookkeeping",
            "description": language === 'cs' 
              ? "Kompletní vedení účetnictví pro malé a střední podniky"
              : "Complete bookkeeping services for small and medium enterprises"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'cs' ? "Daňové poradenství" : "Tax consulting",
            "description": language === 'cs' 
              ? "Profesionální daňové poradenství a příprava daňových přiznání"
              : "Professional tax consulting and tax return preparation"
          }
        }
      ]
    }
  });

  const getServiceData = () => service && ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Natalya Shakh - Účetní služby"
    },
    "serviceType": "Accounting Services",
    "areaServed": {
      "@type": "Country",
      "name": "Czech Republic"
    },
    ...(service.price && { "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "CZK"
    }})
  });

  const getArticleData = () => article && ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.publishDate,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Natalya Shakh - Účetní služby",
      "logo": {
        "@type": "ImageObject",
        "url": "https://natalya-website.vercel.app/favicon/favicon-32x32.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": article.category,
    "inLanguage": language
  });

  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return getOrganizationData();
      case 'localBusiness':
        return getLocalBusinessData();
      case 'service':
        return getServiceData();
      case 'article':
        return getArticleData();
      default:
        return getOrganizationData();
    }
  };

  const structuredData = getStructuredData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
