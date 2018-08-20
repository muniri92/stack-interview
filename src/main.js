'use strict';
import './main.scss'
// NPM Modules
import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import storeCreate from './lib/store-create'
// APP Components
import HeaderContainer from './components/header-container'
import SidebarContainer from './components/sidebar-container'
import ChartContainer from './components/chart-container'

// App holds all application state
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Provider store={storeCreate()}>
        <MuiThemeProvider>
          <div>
            <HeaderContainer />
              <SidebarContainer />
            <ChartContainer />
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
