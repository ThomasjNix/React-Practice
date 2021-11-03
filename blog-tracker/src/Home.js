import React from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
 
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
