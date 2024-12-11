import fs from 'fs';
import path from 'path';

export const dynamic = "force-static";
export const revalidate = 60;

export async function GET() {

  const blogDirectory = path.join(process.cwd(), 'app/content/posts');

   const mdxFilePaths = getAllMdxFilePaths(blogDirectory);

  const sitemap = mdxFilePaths.map((filePath) => {
    const slug = path.basename(filePath, '.mdx');
    const category = path.basename(path.dirname(filePath));
    const url = `https://www.techchain.com.br/blog/${slug}`;
    const lastModified = fs.statSync(filePath).mtime;
    return {
      url,
      lastModified,
    };
  });

  sitemap.push(
    {
      url: 'https://www.techchain.com.br/',
      lastModified: new Date(),
    }
  );

  const xml = generateSitemapXml(sitemap);
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

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
