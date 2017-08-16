import React, { Component } from 'react';
import { connect } from 'react-redux'
import Gallary from './Gallary'
import VR from './VR'
import {
  START_LOADING,
  STOP_LOADING,
  INIT_GALLARY,
} from '../actions'
import { API, LOADING_IMAGE } from '../constants'
import './App.css'

class App extends Component {
  componentDidMount(){
    const { init } = this.props
    init()
  }
  render() {
    const { vrMode, isLoading } = this.props
    return (
      <div>
        {
          !vrMode ? <Gallary /> : <VR />
        }
        {
          !isLoading || <img className="loader" alt="Loading..." src={LOADING_IMAGE} /> 
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  vrMode: state.gallary.vrMode,
  isLoading: state.gallary.isLoading
})
const mapDispatchToProps = (dispatch) => ({
  init: async () => {
    dispatch({type: START_LOADING})
    let cards = await fetch(API)
    cards = await cards.json()
    dispatch({type: STOP_LOADING})
    dispatch({type: INIT_GALLARY, payload: cards})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
