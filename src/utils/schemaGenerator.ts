export default ({
  location,
  canonical,
  siteUrl,
  pageTitle,
  siteTitle,
  pageTitleFull,
}) => {
  const isSubPage = pageTitle && location.pathname !== '/'

  let schema: any[] = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: canonical,
      name: pageTitle || siteTitle,
      alternateName: pageTitleFull,
    },
  ]

  if (isSubPage) {
    schema.push({
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': siteUrl,
            name: siteTitle,
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': canonical,
            name: pageTitle,
          },
        },
      ],
    })
  }

  return schema
}
