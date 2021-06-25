import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Sidebar from './Sidebar';
import Board from './Board';
import { Switch, Route } from 'react-router-dom';

//main user screen with boards and threads

const MainLayout = () => {
  return(
    <>
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
    </>
  )
}

export default MainLayout;