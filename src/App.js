import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './pages/MainMenu';
import Noun from './pages/Noun';
import Verb from './pages/Verb';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainMenu />} />
      <Route path="/nouns"element={<Noun />} />
      <Route path="/verbs" element={<Verb />} />
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
  );
}

export default App;
