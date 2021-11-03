import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);
    const [errorDelete, setErrorDelete] = useState(null);
    const history = useHistory();

    // Mimic HTTP delay
    const handleClick = () => {
        setIsLoadingDelete(true);
        setErrorDelete(null);
        setTimeout(() => {
            fetch(`http://localhost:8000/blogs/${id}`,
            {
                method: 'DELETE',
            })
            .then((res) => {
                if (res.ok) {
                    setIsLoadingDelete(false);
                    setErrorDelete(null);
                    return res.json();
                } else {
                    throw new Error('Something went wrong, please try again.')
                }
            })
            .then(() => {
                history.push('/');
            })
            .catch((err) => {
                setIsLoadingDelete(false);
                setErrorDelete(err.message);
            })
        }, 1000);
    }
    return (
        <div className="blog-container">
            {isLoading && <div className="loading">Loading...</div>}
            {error && <div className="error">An unexpected error occured: {error}</div>}
            {!isLoading && !error &&
                <article className="blog-details">
                    <div className="blog-header">
                        <h2>{blog.title || 'Blog details'}:</h2>
                    </div>
                    <div className="blog-body">
                        <p>{blog.body || 'No description provided'}</p>
                        <p><em>-Written by {blog.author === 'currentUser' ? 'Me' : blog.author}</em></p>
                    </div>
                    <div className="blog-options">
                        {!isLoading && <button onClick={handleClick} disabled={isLoadingDelete}>{isLoadingDelete ? 'Loading...' : 'Delete Blog'}</button>}
                        {errorDelete && <p className="error">An unexpected error occured: {errorDelete}</p>}
                    </div>
                </article>
            }
        </div>
    )
}

export default BlogDetails
