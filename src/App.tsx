import React from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';

import AboutPage from './components/about';
import Comic from './components/comic';
import ContentPage from './components/content';
import HomePage from './components/home';
import TutorialPage from './components/tutorial';

import './scss/normalize.scss';
import './App.scss';

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
              <HomePage />
            </Route>
            <Route exact path="/tutorial">
              <TutorialPage />
            </Route>
            <Route exact path="/comic">
              <Comic />
            </Route>
            <Route path="/comic/:pageId">
              <Comic />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/content">
              <ContentPage />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
