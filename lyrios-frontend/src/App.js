
import React from 'react';
import './App.css';
import Navbar from './components/NavBarElements';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Session from './pages/session';
import Show from './pages/show';
import User from './pages/user';
import Search from './components/Search'
import Lyrics from './components/Lyrics'
function App() {
  const URL = "testing"
  return (
    <div className="App">
      <h1>Lets get started with the Lyrios App!</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/session' component={Session} />
          <Route path='/show' component={Show} />
          <Route path='/user' component={User} />
          {/* <Route path='/team' component={Teams} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
        </Router>
      <Search/>
      <Lyrics/>
    </div>
  );
}

export default App;
