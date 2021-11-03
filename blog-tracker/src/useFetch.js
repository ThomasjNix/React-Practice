import { useState, useEffect } from "react";
const useFetch = (endpoint) => {
    /**
     * The useState method from React allows accessing state from the component
     * In this example, useState accepts a value (that is assigned to the destructured name variable)
     * and a function to update that value (that is assigned ot the destructured setName method)
     */
    const [data, setData] = useState(null);
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
            fetch(endpoint)
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error('Failed to fetch requested resources.');
                    }
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsLoading(false);
                })
        }, 500);
    }, []);

    /**
     * Return all of the data associated with the request
     */
    return {
        data, isLoading, error
    };
}

export default useFetch;