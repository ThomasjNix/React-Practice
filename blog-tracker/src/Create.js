import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('randomPerson1');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // useHistory() returns an object that represents the routing history, which is useful for redirects
    const history = useHistory();

    const handleSubmit = (event) => {
        setError(null);
        setIsLoading(true);

        // Prevent page refresh
        event.preventDefault();
        const blog = {
            title,
            body,
            author
        };

        // Mimic POST delay
        setTimeout(() => {
            // POST to json-server to create new blog
            fetch('http://localhost:8000/blogs',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(blog)
                }
            )
            .then((res) => {
                if (res.ok) {
                    setIsLoading(false);
                    setError(null);
                    return res.json();    
                }  else {
                    throw new Error('Unable to submit new blog, please try again.');
                }
            })
            .then((newBlog) => {
                history.push(`/blogs/${newBlog.id}`);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
        }, 1000);
    }

    return (
        <div className="create">
            <h2>Add another blog:</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="blogTitle">Blog Title</label>
                <input
                    id="blogTitle"
                    disabled={isLoading}
                    type="text"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <label htmlFor="blogBody">Blog Body</label>
                <textarea
                    id="blogBody"
                    disabled={isLoading}
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    required></textarea>

                <label htmlFor="blogAuthor">Blog Author</label>
                <select 
                id="blogAuthor"
                disabled={isLoading}
                value={author}
                onChange={(event) => setAuthor(event.target.value)}>
                    <option value="randomPerson1">Random Person 1</option>
                    <option value="randomPerson2">Random Person 2</option>
                    <option value="randomPerson3">Random Person 3</option>
                </select>

                <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Add Blog'}</button>
                {error && <p className="error">An unexpected error occured: {error}</p>}
            </form>
        </div>
    );
}

export default Create;