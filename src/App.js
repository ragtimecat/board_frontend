import './App.css';
import MainLayout from './components/MainLayout';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import CreateBoard from './components/CreateBoard';

import CreateThread from './components/CreateThread';
import AdminPanel from './components/AdminPanel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/admin-panel" component={AdminPanel} />
          <Route exact path="/:board_id/create-thread" component={CreateThread} />
          <Route exact path="/create-board" component={CreateBoard} />
          <Route component={MainLayout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
