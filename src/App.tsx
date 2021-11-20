import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ComicViewer from './components/comicViewer';
import FrontPage from './components/frontPage';
import Tutorial from './components/tutorial';

import './App.scss';

const pages = [
  { id: 'page-1', intro: 'ilu_01_intro.json', outro: 'ilu_01_outro.json' },
  { id: 'page-2', intro: 'ilu_02_intro.json', outro: 'ilu_02_outro.json' },
  { id: 'page-3', intro: 'ilu_03_intro.json', outro: 'ilu_03_outro.json' },
];

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="app-comic">
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="router-fade"
          timeout={300}
        >
          <Switch>
            <Route exact path="/">
              <FrontPage />
            </Route>
            <Route exact path="/tutorial">
              <Tutorial />
            </Route>
            <Route exact path="/comic">
              <ComicViewer pages={pages} />
            </Route>
            <Route path="/comic/:pageId">
              <ComicViewer pages={pages} />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
