import React from 'react'
import { Navbar } from 'react-bootstrap'
import { BRAND_TITLE } from '../constants'

const NavigationBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        {BRAND_TITLE}
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
)

export default NavigationBar
