'use strict';

// npm modules
import React from 'react'
import ReactDom from 'react-dom'

import './header.scss'

class HeaderContainer extends React.Component {
  render() {
    return(
      <header className="header-container">
        <div className="header-text">Stackline</div>
      </header>
    )
  }
}

export default HeaderContainer
