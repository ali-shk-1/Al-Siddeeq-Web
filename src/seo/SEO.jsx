import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Al Siddeeq Model High School',
    description: 'Al Siddeeq Model High School, Rawalpindi — 15+ years of excellence from Montessori to Class 10, with 100% board results & strong character building.',
    url: 'https://alsiddeeq.vercel.app/',
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
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SEO;