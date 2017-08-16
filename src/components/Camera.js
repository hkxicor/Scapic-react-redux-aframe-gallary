import React from 'react';
import {Entity} from 'aframe-react';

export default props => (
  <Entity position="0 0 0">
    <Entity camera look-controls {...props}/>
  </Entity>
);
