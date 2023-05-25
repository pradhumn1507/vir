import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExportPage from './pages/ExportPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/export" element={<ExportPage />} />
      </Routes>
    </Router>
  );
}


export default App;
