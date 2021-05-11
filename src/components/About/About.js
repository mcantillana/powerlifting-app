import React from 'react';

import Title from './Title/Title';
import Information from './Information/Information';
import Details from './Details/Details';

const About = (props) => {
    return(
        <div>
          <Title/>
          <Information/>
          <Details/>
        </div>
    );
};

export default About;