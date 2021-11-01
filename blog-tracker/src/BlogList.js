import React from 'react'

const BlogList = ({ blogs, title = 'Blog List', handleDelete }) => {
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => {
                /**
                 * When mapping a list, each HTML output must have a key property
                 * so that React can keep track of it in the DOM
                 */
                return <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            })}
        </div>
    )
}

export default BlogList
