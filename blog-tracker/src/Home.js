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
 
    return (
        <div className="home">
            <BlogList blogs={ blogs } title="My blog List"/>
        </div>
    )
}

export default Home
