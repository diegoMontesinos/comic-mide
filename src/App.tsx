import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import ComicViewer from './components/comicViewer';
import FrontPage from './components/frontPage';
import Tutorial from './components/tutorial';

import './App.scss';

const pages = [
  { id: 'page-1', intro: 'ilu_01_intro.json', outro: 'ilu_01_outro.json' },
  { id: 'page-2', intro: 'ilu_02_intro.json', outro: 'ilu_02_outro.json' },
  { id: 'page-3', intro: 'ilu_03_intro.json', outro: 'ilu_03_outro.json' },
];

const App: React.FC = () => (
  <Router>
    <div className="app-comic">
      <Switch>
        <Route exact path="/"><FrontPage /></Route>
        <Route exact path="/tutorial"><Tutorial /></Route>
        <Route path="/comic/:pageId"><ComicViewer pages={pages} /></Route>
      </Switch>
    </div>
  </Router>
);

export default App;
