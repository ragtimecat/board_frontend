import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Sidebar from './components/Sidebar';
import Board from './components/Board';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="main-part">
          <aside>
            <Sidebar />
          </aside>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/:board_id" component={Board} />
              <Route component={NotFound} />
            </Switch>
          </main>  
        </div>
      </div>
    </Router>
  );
}

export default App;
