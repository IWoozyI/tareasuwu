import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard'; 
import './App.css';  

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Mi Dashboard</h1>
        <Routes>
          {/* Ruta principal que renderiza el Dashboard */}
          <Route path="/" exact component={Dashboard} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
