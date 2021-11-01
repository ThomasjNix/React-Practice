import './App.css';
import Navbar from './navbar';
import Home from './Home';

function App() {
  const title = 'Blog Tracker';
  return (
    <div className="App">
      <Navbar />
      <Home />
      <h1>{ title }</h1>
    </div>
  );
}

export default App;
