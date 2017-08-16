import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavigationBar from '../components/NavigationBar'
import CardsContainer from '../components/CardsContainer'
import {
  SWITCH_TO_VR
} from '../actions'

class Gallary extends Component {
  render(){
    const { cards, switchToVr } = this.props
    return (
      <div>
        <NavigationBar />
        <CardsContainer switchToVr={switchToVr} cards={cards} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.gallary.cards
})
const mapDispatchToProps = (dispatch) => ({
  switchToVr: (id) => {
    dispatch({type: SWITCH_TO_VR, id})
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Gallary)
