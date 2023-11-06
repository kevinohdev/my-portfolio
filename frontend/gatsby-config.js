const dotenv = require('dotenv');

dotenv.config({ path: '.env'});

module.exports = {
  siteMetadata: {
    title: `kkodev`,
    siteUrl: `https://kkodev.com`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-sanity`,
    options: {
      projectId: `bryroqks`,
      dataset: `production`,
      token: process.env.SANITY_TOKEN,
      watchMode: true,
      graphqlTag: 'default',
    },
  },
]
};