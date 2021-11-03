import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title = 'Blog List' }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => {
                /**
                 * When mapping a list, each HTML output must have a key property
                 * so that React can keep track of it in the DOM
                 */
                return <div className="blog-preview" key={blog.id}>
                    <h2>
                        <Link to={`/blogs/${blog.id}`}>
                            {blog.title}
                        </Link>
                    </h2>
                    <p>Written by {blog.author}</p>
                </div>
            })}
        </div>
    )
}

export default BlogList
