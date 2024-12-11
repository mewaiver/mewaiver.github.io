import fs from 'fs';
import path from 'path';

// This will ensure the route is treated as a static route
export const dynamic = "force-static"; // or "force-dynamic" if you want it to be dynamic
export const revalidate = 60; // Set revalidation time in seconds

export async function GET() {
  debugger
  // Path to the directory containing your MDX files
  const blogDirectory = path.join(process.cwd(), 'app/content/posts'); // your blog directory may be different

  // Retrieve all MDX file paths recursively
  const mdxFilePaths = getAllMdxFilePaths(blogDirectory);

  // Generate URLs and add them to the sitemap
  const sitemap = mdxFilePaths.map((filePath) => {
    const slug = path.basename(filePath, '.mdx'); // remove the .mdx extension from the file name to get the slug
    const category = path.basename(path.dirname(filePath));
    const url = `http://localhost:3000/blog/${slug}`; // Updated URL to localhost
    const lastModified = fs.statSync(filePath).mtime;
    return {
      url,
      lastModified,
    };
  });

  // Add other URLs to the sitemap
  sitemap.push(
    {
      url: 'http://localhost:3000', // Updated URL to localhost
      lastModified: new Date(),
    }
    // Add other URLs here
  );

  // Return the sitemap as XML
  const xml = generateSitemapXml(sitemap);
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

// Recursively retrieve all MDX file paths
function getAllMdxFilePaths(directory) {
  const fileNames = fs.readdirSync(directory);
  const filePaths = fileNames.map((fileName) => {
    const filePath = path.join(directory, fileName);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      return getAllMdxFilePaths(filePath);
    } else {
      return filePath;
    }
  });

  return [].concat(...filePaths);
}

// Function to generate XML for the sitemap
function generateSitemapXml(sitemap) {
  const urlset = sitemap
    .map(({ url, lastModified }) => {
      return `
        <url>
          <loc>${url}</loc>
          <lastmod>${lastModified.toISOString()}</lastmod>
        </url>
      `;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
    ${urlset}
  </urlset>`;
}
