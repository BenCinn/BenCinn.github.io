// Example from https://medium.com/spemer/creating-a-sitemap-generator-for-next-js-3102fb5a297e
const fs = require("fs");
const globby = require("globby");

const getDate = new Date().toISOString();

const YOUR_AWESOME_DOMAIN = "https://bencinn.github.io";

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

(async () => {
  const pages = await globby([
    // include
    "out/**/*.html",
    "out/*.html",
    // exclude
    "!out/_next/**/*",
    "!out/404*",
    "!out/.nojekyll",
    "!out/_*",
    "!out/google*"
  ]);

  const pagesSitemap = `
    ${pages
      .map(page => {
        const path = page
          .replace("out/", "")
          .replace(".html", "")
          .replace(/\/index/g, "");
        const routePath = path === "index" ? "" : path;
        return `
          <url>
            <loc>${YOUR_AWESOME_DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join("")}
  `;

  const generatedSitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${pagesSitemap}</urlset>`;

  fs.writeFileSync("out/sitemap-common.xml", generatedSitemap, "utf8");
})();