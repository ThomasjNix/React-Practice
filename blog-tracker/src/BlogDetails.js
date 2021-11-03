import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    return (
        <div className="blog-container">
            {isLoading && <div className="loading">Loading...</div>}
            {error && <div className="error">An unexpected error occured: {error}</div>}
            {!isLoading && !error &&
                <div className="blog-details">
                    <div className="blog-header">
                        <h2>{blog.title || 'Blog details'}:</h2>
                    </div>
                    <div className="blog-body">
                        <p>{blog.body || 'No description provided'}</p>
                        <p><em>-Written by {blog.author || 'unknown author'}</em></p>
                    </div>
                </div>
            }
        </div>
    )
}

export default BlogDetails
