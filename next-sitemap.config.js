/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.nigaran.in/', // ⬅️ Replace with your actual domain
  generateRobotsTxt: true,           // Generate robots.txt file
  exclude: ['/admin', '/dashboard']
}