import React from 'react';

import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import AboutPage from './components/about';
import Comic from './components/comic';
import ContentPage from './components/content';
import HomePage from './components/home';
import TutorialPage from './components/tutorial';
import SoundManager from './components/sound/SoundManager';

import './scss/normalize.scss';
import './App.scss';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <SoundManager>
      <div className="app-comic">
        <AnimatePresence
          initial={false}
          exitBeforeEnter={false}
        >
          <Routes
            location={location}
            key={location.pathname}
          >
            <Route path="/" element={<HomePage />} />
            <Route
              path="tutorial"
              element={<TutorialPage />}
            />
            <Route path="comic">
              <Route index element={<Comic />} />
              <Route path=":pageId" element={<Comic />} />
            </Route>
            <Route path="about" element={<AboutPage />} />
            <Route
              path="content"
              element={<ContentPage />}
            />
          </Routes>
        </AnimatePresence>
      </div>
    </SoundManager>
  );
};

export default App;
