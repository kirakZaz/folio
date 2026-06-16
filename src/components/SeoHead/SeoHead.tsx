import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://folio-kiraz.vercel.app';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

const SeoHead = ({ title, description, path, ogImage, jsonLd }: SeoHeadProps) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SeoHead;
