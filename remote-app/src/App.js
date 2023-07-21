// src/App.js
import React from 'react';
import './styles/tailwind.css';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Remote App</h1>
      <div id="remoteAppContainer"></div>
    </div>
  );
};

export default App;
