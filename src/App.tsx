import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  const tittle = "Welcome to the New Blog";
  const likes = "50";

  return (
      <div className="App">
        <Navbar />
        <div className="content" >
          <h1>{tittle}</h1>
          <Home />
        </div>
      </div>
  );
}

export default App;
