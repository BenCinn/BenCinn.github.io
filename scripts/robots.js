const fs = require("fs");
const crawlableRobotsTxt = `User-agent: *\nAllow: /\nDisallow: /*.jpeg\nDisallow: /**/*.jpeg\nSitemap: https://bencinn.github.io/sitemap-common.xml`;
function generateRobotsTxt() {
  // Create a non-crawlable robots.txt in non-production environments
  const robotsTxt = crawlableRobotsTxt
  // Create robots.txt file
  fs.writeFileSync("out/robots.txt", robotsTxt);
}

generateRobotsTxt();