import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'aframe'
import {
  Entity,
  Scene,
} from 'aframe-react'
import Cursor from '../components/Cursor'
import Camera from '../components/Camera'
import VRButton from '../components/VRButton'
import { SWITCH_TO_GALLARY } from '../actions'

class VR extends Component {
  back(){
    this.props.backToGallary()
  }
  render(){
    const { pano, name } = this.props.vr
    return (
      <Scene>
        <Camera>
          <Cursor />
        </Camera>
        <Entity text={{value: "Place: "+name}} scale={{x: 10, y: 10, z: 10}} position={{x: 0, y: 0, z: -5}}/>
        <VRButton title={"Back To Gallary"} color={'red'} action={this.back.bind(this)} />
        <Entity primitive='a-sky' src={pano} />
      </Scene>
    )
  }
}

const mapStateToProps = state => ({
  vr: state.gallary.vr
})

const mapDispatchToProps = (dispatch) => ({
  backToGallary: () => {
    dispatch({type: SWITCH_TO_GALLARY})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VR)
