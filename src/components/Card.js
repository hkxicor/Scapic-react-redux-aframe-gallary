import React, { Component } from 'react'
import { Col, Thumbnail } from 'react-bootstrap'
export default class Card extends Component {
  switchVR(){
    this.props.switchToVr(this.props.id)
  }
  render(){
    const { pano, name } = this.props
    return (
      <Col xs={6} md={4}>
        <Thumbnail onClick={this.switchVR.bind(this)} className="card-fix" href="#" alt={name} src={pano} />
      </Col>
    )
  }
}
