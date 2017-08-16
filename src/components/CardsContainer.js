import React from 'react'
import {
  Grid,
  Row,
} from 'react-bootstrap'
import './CardsContainer.css'
import Card from './Card'

const CardsContainer = ({cards, switchToVr}) => {
  return (
    <Grid>
      <Row>
        {
          cards.map((item, key) =>
            (
              <Card switchToVr={switchToVr} key={key} pano={item.pano} name={item.name} id={item.id} />
          ))
        }
      </Row>
    </Grid>
  )
}

export default CardsContainer
