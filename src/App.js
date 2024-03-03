import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import UIChallenge from './pages/UIChallenge';

const app = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UIChallenge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default app;
