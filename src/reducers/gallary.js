import {
  INIT_GALLARY,
  STOP_LOADING,
  START_LOADING,
  SWITCH_TO_VR,
  SWITCH_TO_GALLARY,
} from '../actions'

const initialState = {
  cards: [],
  vrMode: false,
  isLoading: false,
  vr: null
}
function gallary(state = initialState, action) {
  switch (action.type) {
    case INIT_GALLARY:
      let cards = action.payload.map((item,key) => {
        return {
          pano: item.pano,
          name: item.name,
          id: key
        }
      })
      return Object.assign({},state,{
        cards: cards
      })
    case START_LOADING:
      return Object.assign({},state,{
        isLoading: true
      })
    case STOP_LOADING:
      return Object.assign({},state,{
        isLoading: false
      })
    case SWITCH_TO_VR:
      return Object.assign({},state,{
        vrMode: true,
        vr: state.cards[action.id]
      })
    case SWITCH_TO_GALLARY:
      return Object.assign({},state,{
        vrMode: false
      })
    default:
      return state
  }
}

export default gallary
