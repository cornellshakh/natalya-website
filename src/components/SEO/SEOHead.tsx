import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  article?: {
    publishTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  image = '/favicon/favicon-32x32.png',
  type = 'website',
  article
}: SEOHeadProps) {
  const { language } = useLanguage();
  
  const siteTitle = 'Natalya Shakh - Účetní služby';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  const siteUrl = 'https://natalya-website.vercel.app';
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const canonicalUrl = canonical || window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language} />
      <meta name="author" content="Natalya Shakh" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content={language === 'cs' ? 'cs_CZ' : 'ru_RU'} />
      <meta property="og:locale:alternate" content={language === 'cs' ? 'ru_RU' : 'cs_CZ'} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Article-specific tags */}
      {type === 'article' && article && (
        <>
          {article.publishTime && (
            <meta property="article:published_time" content={article.publishTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags && article.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Business-specific tags */}
      <meta property="business:contact_data:street_address" content="Prague" />
      <meta property="business:contact_data:locality" content="Prague" />
      <meta property="business:contact_data:region" content="Prague" />
      <meta property="business:contact_data:postal_code" content="110 00" />
      <meta property="business:contact_data:country_name" content="Czech Republic" />

      {/* Additional SEO tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteTitle} />
      <meta name="application-name" content={siteTitle} />
      
      {/* Geo tags */}
      <meta name="geo.region" content="CZ" />
      <meta name="geo.placename" content="Prague" />
      <meta name="geo.position" content="50.0755;14.4378" />
      <meta name="ICBM" content="50.0755, 14.4378" />
    </Helmet>
  );
}
