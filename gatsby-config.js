const siteMetadata = require('./siteMetadata')
const path = require('path')

module.exports = {
  siteMetadata: {
    ...siteMetadata,
    themeColor: '#933B60',
    backgroundColor: '#fff',
    pathPrefix: null,
    logo: path.resolve(__dirname, 'src/images/icon.png'),
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.siteTitle,
        short_name: siteMetadata.siteTitleShort,
        start_url: '/',
        background_color: siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        codegen: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: { id: 'GTM-P4H5SJK' },
    },
    {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        id: 2045898,
        sv: 6,
      },
    },
  ],
}
