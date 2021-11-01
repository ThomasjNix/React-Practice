import React from 'react'
import { useState } from 'react';
import BlogList from './BlogList';

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

    /**
     * Functions can be passed as props to child components 
     * This allows values on the parent component to be modified
     * through the child component via closure
     */
     const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id));
    }
 
    return (
        <div className="home">
            <BlogList blogs={ blogs } handleDelete={handleDelete} title="All Blogs"/>
            <BlogList blogs={ blogs.filter((blog) => blog.author === 'me') } handleDelete={handleDelete} title="Blogs by me"/>
        </div>
    )
}

export default Home
