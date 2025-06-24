// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://nigaran.in',
  generateRobotsTxt: true,
  exclude: ['/admin'], // 🔒 Exclude /admin from sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/admin', // 🔒 Disallow in robots.txt
      },
    ],
  },
};