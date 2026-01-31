"use client"
import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java'
import 'highlight.js/styles/github-dark.css';
import './Post.css'
import { Image } from 'react-bootstrap';
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

    const formattedAuthorName = author.replace(/\s+/g, '_');

    return (
        <>
            <h1 className="display-4">{title}</h1>
            <div className="d-flex justify-content-start">
                <Image src={`/authors/${formattedAuthorName}.png`} width={100} alt={author}></Image>
            </div>
            <div className="d-flex justify-content-start">

                <p className="text-muted mb-0 me-2 text-uppercase"> por {author} | {date}</p>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
}

export default Post;
