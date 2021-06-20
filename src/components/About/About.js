import React from 'react';

import Header from '../UI/Header/Header';
import Information from './Information/Information';
import Details from './Details/Details';

const About = (props) => {
    return(
        <div>
          <Header/>
          <Information/>
          <Details/>
        </div>
    );
};

export default About;