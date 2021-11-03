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
    const [isLoading, setIsLoading] = useState(true); 
    const [error, setError] = useState(null);

    /**
     * useEffect runs every time there is a re-render, or every time data changes
     * When data is retrieved on this hook, it's called a side effect in React
     * 
     * By providing an array as the second argument, any properties provided will be 
     * watched for updates and useEffect() will trigger on the updates of those values
     */
    useEffect(() => {
        // Just to demo the loading behavior
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Failed to fetch requested resources.');
            }
        })
        .then((blogs) => {
            setBlogs(blogs);
            setIsLoading(false);
            setError(null);
        })
        .catch((err) => {
            setError(err.message);
            setIsLoading(false);
        })
        }, 1000);
    }, []);
 
    return (
        <div className="home">
            {isLoading && <div className="loading">Loading...</div>}
            { error && <div className="error">An unexpected error occured: { error }</div>}
            {!isLoading && blogs && <BlogList blogs={ blogs } title="All Blogs"/>}
            {!isLoading && blogs && <BlogList blogs={ blogs.filter((blog) => blog.author === 'me') }title="Blogs by me"/>}
        </div>
    )
}

export default Home
