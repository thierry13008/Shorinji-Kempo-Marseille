import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Headers for SEO
  app.use((req, res, next) => {
    res.setHeader("X-Robots-Tag", "index, follow");
    next();
  });

  // Sitemap handler function
  const handleSitemap = async (req: express.Request, res: express.Response) => {
    const staticPages = [
      { url: "/", priority: "1.0", freq: "monthly" },
      { url: "/contact", priority: "0.8", freq: "yearly" },
      { url: "/encyclopedia", priority: "0.8", freq: "yearly" },
      { url: "/blog", priority: "0.8", freq: "monthly" },
      { url: "/mentions-legales", priority: "0.5", freq: "yearly" },
      { url: "/politique-confidentialite", priority: "0.5", freq: "yearly" },
    ];

    let wpPosts: any[] = [];
    try {
      const response = await fetch("https://public-api.wordpress.com/wp/v2/sites/shorinjikempomarseille.wordpress.com/posts?per_page=100&_fields=slug,date");
      if (response.ok) {
        wpPosts = await response.json() as any[];
      }
    } catch (error) {
      console.error("Failed to fetch WP posts for sitemap:", error);
    }

    const baseUrl = "https://shorinji-kempo-marseille.vercel.app";
    const lastModDate = new Date().toISOString().split("T")[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    staticPages.forEach(page => {
      xml += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>${page.freq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    wpPosts.forEach(post => {
      const postDate = post.date ? post.date.split("T")[0] : lastModDate;
      xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });

    xml += `
</urlset>`;

    console.log("Generated Sitemap XML:", xml);

    res.header("Content-Type", "application/xml");
    res.status(200).send(xml);
  };

  // Sitemap routes
  app.get("/sitemap.xml", handleSitemap);
  app.get("/sitemap", handleSitemap);

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));

    // Valid routes list for 404 handling
    const validRoutes = [
      "/",
      "/encyclopedia",
      "/contact",
      "/blog",
      "/mentions-legales",
      "/politique-confidentialite"
    ];

    app.get("*", (req, res) => {
      let url = req.path;
      // Remove trailing slash for normalization (except for root)
      if (url.length > 1 && url.endsWith("/")) {
        url = url.slice(0, -1);
      }
      
      // Check if it's a static page or a blog post route
      const isBlogRoute = url.startsWith("/blog/");
      const isValidRoute = validRoutes.includes(url) || isBlogRoute;

      if (!isValidRoute) {
        // Send index.html with 404 status to allow React Router to handle UI
        res.status(404).sendFile(path.join(distPath, "index.html"));
      } else {
        res.sendFile(path.join(distPath, "index.html"));
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
