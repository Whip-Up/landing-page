/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const tailwindcss = require("tailwindcss")

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
      },
    },
  ],
}
