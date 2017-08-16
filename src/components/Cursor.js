import React from 'react';
import { Entity } from 'aframe-react';

export default props => {
  const components = {
    cursor: {
      fuse: true,
      timeout: 200
    },
    geometry: {
      primitive: 'ring',
      radiusInner: 0.01,
      radiusOuter: 0.016,
      segmentsTheta: 36
    },
    material: {
      color: '#000',
      shader: 'flat',
      opacity: 0.9,
      transparent: true
    },
    position: '0 0 -1'
  };
  return (
    <Entity animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}} {...components}/>
  );
}
