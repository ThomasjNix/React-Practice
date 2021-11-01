import React from 'react'
import { useState } from 'react';

const Home = () => {

    /**
     * The useState method from React allows accessing state from the component
     * In this example, useState accepts a value (that is assigned to the destructured name variable)
     * and a function to update that value (that is assigned ot the destructured setName method)
     */
    const [blogs, setBlogs] = useState([
        {
            title: 'Example title 1',
            body: 'lorem ipsum and a whole lot more',
            author: 'me',
            id: 1
        },
        {
            title: 'Example title 2',
            body: 'lorem ipsum and a that\'s about it',
            author: 'somebody else',
            id: 2
        },
        {
            title: 'Example title 3',
            body: 'lorem ipsum, who needs more?',
            author: 'anonymously submitted',
            id: 3
        }
    ]);
 
    return (
        <div className="home">
            {blogs.map((blog) => {
                /**
                 * When mapping a list, each HTML output must have a key property
                 * so that React can keep track of it in the DOM
                 */
                return <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            })}
        </div>
    )
}

export default Home
