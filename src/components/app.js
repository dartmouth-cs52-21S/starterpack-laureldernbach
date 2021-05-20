import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Counter from '../counter';
import Controls from '../control';
import Hellos from './hello';

const About = (props) => {
  return <div> Bringing together the experience of listening to discovering new music with creativity, color, and visual appeal! </div>;
};

const Welcome = (props) => {
  return (
    <div>Welcome to Synesthesia!
      <Counter />
      <Controls />
    </div>
  );
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <iframe title="song-player" src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route path="/hello" component={Hellos} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/hello">Hello!</NavLink></li>
      </ul>
    </nav>
  );
};

export default App;
