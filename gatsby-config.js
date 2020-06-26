module.exports = {
  siteMetadata: {
    title: 'Gatsby With Apollo',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'DYNOS',
        fieldName: 'dynos',
        url: 'https://stg-apollo.dynos.io/gql',
      },
    },
  ],
};
