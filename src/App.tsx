import React from 'react';

import ComicViewer from './components/ComicViewer';

import './App.scss';

const pages = [
  { id: 'page-1', intro: 'ilu_01_intro.json', outro: 'ilu_01_outro.json' },
  { id: 'page-2', intro: 'ilu_02_intro.json', outro: 'ilu_02_outro.json' },
  { id: 'page-3', intro: 'ilu_03_intro.json', outro: 'ilu_03_outro.json' },
];

const App: React.FC = () => (
  <div className="app-comic">
    <ComicViewer pages={pages} />
  </div>
);

export default App;
