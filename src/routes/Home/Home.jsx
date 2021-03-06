import React from 'react';
import './Home.css';

import Leftbar from '../../containers/Leftbar/Leftbar';
import Content from '../../containers/Content/Content';

const Home = () => {
  return (
    <div className="Home" data-testid='Home'>
      <div className="container-fluid h-100">
        <div className="row">
            <Leftbar />
            <Content />
        </div>
      </div>
    </div>
  );
}

export default Home;
