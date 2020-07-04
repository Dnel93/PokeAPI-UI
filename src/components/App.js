import React from 'react';
import './App.css';

import Leftbar from './Leftbar/Leftbar';
import Content from './Content/Content';

function App() {
  return (
    <div className="App">
      <div className="container-fluid h-100">
        <div className="row">
            <Leftbar />
            <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
