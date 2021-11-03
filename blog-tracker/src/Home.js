import React from 'react'
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    /**
     * The useState method from React allows accessing state from the component
     * In this example, useState accepts a value (that is assigned to the destructured name variable)
     * and a function to update that value (that is assigned ot the destructured setName method)
     */
    const [blogs, setBlogs] = useState(null);

    /**
     * useEffect runs every time there is a re-render, or every time data changes
     * When data is retrieved on this hook, it's called a side effect in React
     * 
     * By providing an array as the second argument, any properties provided will be 
     * watched for updates and useEffect() will trigger on the updates of those values
     */
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then((res) => res.json())
        .then((blogs) => {
            setBlogs(blogs);
        })
    }, []);

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
            {blogs && <BlogList blogs={ blogs } handleDelete={handleDelete} title="All Blogs"/>}
            {blogs && <BlogList blogs={ blogs.filter((blog) => blog.author === 'me') } handleDelete={handleDelete} title="Blogs by me"/>}
        </div>
    )
}

export default Home
