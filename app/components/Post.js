"use client"
import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java'
import 'highlight.js/styles/github.css';
import Link from 'next/link';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('java', java)


const Post = ({ title, date, content, category, author, image }) => {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
        const blocks = document.querySelectorAll('pre code');
        blocks.forEach((block) => {
            hljs.highlightBlock(block);
        });
    }, []);

    return (
        <article className="article-page">
            <header className="article-header">
                <h1>{title}</h1>
                <div className="post-meta">
                    <span>por {author}</span>
                    <time dateTime={date}>{date}</time>
                    {category && <Link href={`/categories/${category}`}>{category}</Link>}
                </div>
            </header>
            <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
        </article>
    );
}

export default Post;
