import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';
import readingTime from "reading-time";
import highlightjs from "markdown-it-highlightjs";
var namedCodeBlocks = require('markdown-it-named-code-blocks');
import "highlight.js/styles/atom-one-dark-reasonable.css"

// The page for each post
export default function Post({frontmatter, content, readingTime}) {

    const {title, author, category, date, bannerImage, tags, series} = frontmatter

    return <main className="p-6">
        <img src={bannerImage}/>
        <h1 className="text-lg font-semibold lg:text-md">{title}</h1>
        <h2>Posted: {date}</h2>
        {series && <h2 className="font-medium">Series: <span className="font-semibold text-amber-400">{series}</span></h2>}
        <h2 className="text-gray-600">Reading time: {readingTime}</h2>
        <div class="py-2">
          {tags.map(tag => {
              return (
                <span class="inline-block px-3 py-1 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{tag}</span>
              )
          })}
        </div>
        <div className="blog-start" dangerouslySetInnerHTML={{ __html: md().use(highlightjs).use(namedCodeBlocks).render(content) }} />
    </main>
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("blog");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}


// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
    const file = fs.readFileSync(`blog/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(file);
    return {
      props: {
        frontmatter,
        content,
        readingTime: readingTime(file).text,
      },
    };
  }