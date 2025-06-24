/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nigaran.in',
  generateRobotsTxt: true,
  exclude: ['/admin/*'], // ✅ Exclude all /admin pages
};