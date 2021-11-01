import React from 'react'
import { useState } from 'react';

const Home = () => {

    /**
     * The useState method from React allows accessing state from the component
     * In this example, useState accepts a value (that is assigned to the destructured name variable)
     * and a function to update that value (that is assigned ot the destructured setName method)
     */
    const [name, setName] = useState('Thomas');

    const handleClick = () => {
        setName('Some name set in a function')
    }
    return (
        <div className="home">
            <h2>Home</h2>
            <button onClick={handleClick}>Change name</button>
            <h1>Welcome, {name}</h1>
        </div>
    )
}

export default Home
