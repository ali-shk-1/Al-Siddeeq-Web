import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Al Siddeeq Model High School | Rawalpindi',
  description = 'Al Siddeeq Model High School, Rawalpindi — over 15 years of excellence in education from Montessori to Class 10, with 100% board results and a strong focus on character building.',
  keywords = 'Al Siddeeq Model High School, best school in Rawalpindi, Montessori Rawalpindi, BISE Rawalpindi school, Khayaban-e-Sir Syed school',
  canonical = 'https://www.alsiddeeqschool.edu.pk/',
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Al Siddeeq Model High School',
    description,
    url: canonical,
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'House #186-A, Sector 4-A, Khayaban-e-Sir Syed',
        addressLocality: 'Rawalpindi',
        addressCountry: 'PK',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'House #14-A, Sector 3, Khayaban-e-Sir Syed',
        addressLocality: 'Rawalpindi',
        addressCountry: 'PK',
      },
    ],
    telephone: ['051-4831802', '051-4834045'],
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_PK" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SEO;