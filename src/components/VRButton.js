import React from 'react'
import { Entity } from 'aframe-react'

const VRButton = ({title, color, action}) => (
  <Entity id="box"
    geometry={{primitive: 'box'}}
    material={{color: color, opacity: .5}}
    position={{x: 0, y: 1, z: -3}}
    events={{click: action}}>
    <Entity text={{value: title}} scale={{x:10, y:10, z:10}} position={{x: 3.5, y: 2.5, z: -6}}  />
  </Entity>
)

export default VRButton
