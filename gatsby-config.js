module.exports = {
  siteMetadata: {
    title: `Kaleigh Comedy`,
    description: `kaleigh scruggs comedy site`,
    author: `@kaleighscruggs`,
    siteUrl: "https://kaleighcomedy.com",
  },
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: true,
        basePath: `/notes`,
      },
    },
    // with gatsby-plugin-theme-ui, the last theme in the config
    // will override the theme-ui context from other themes
    { resolve: `gatsby-theme-blog` },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",
      },
    },
  ],
}
