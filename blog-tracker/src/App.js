import Navbar from './navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Routing structure:
 * 
 * Router
 * * Switch  (renders nested <Route>s exclusively, only the first matching path will render)
 * * * Route (for each route) 
 * * * * Component to render for that route
 * 
 * If Switch is not used, all <Route>s matching the path will render
 * 
 * The exact property will cause the <Route> to only match if the route matches exactly,
 * for example /create will not match / because it is not an exact match, even though
 * / is within /create
 */

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="page-content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails />
          </Route>
          {/* Fallback route */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
