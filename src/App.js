import './App.css';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HomePage from './containers/HomePage';

function App() {
  return (
    <Router>
            <Switch>
                <Route key="home" path="/" exact render={() => <HomePage />} />
                <Route key="nopage" render={() => <div>404 Page</div>} />
            </Switch>
    </Router>
  );
}

export default App;
