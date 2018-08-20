'use strict';

// npm modules
import React from 'react'
import ReactDom from 'react-dom'
import superagent from 'superagent'
import { connect } from 'react-redux'


import './sidebar.scss'

class SidebarContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    let {product} = this.props
    return(
      <div className="sidebar">
        <div className="product">
          <img className="product-image" src={product.image}/>
          <p className="title"> {product.title} </p>
          <p className="subtitle"> {product.subtitle} </p>
        </div>
        <div className="tags-container">
            { product.tags.map( (tag, i) => (
              <span key={i} className="tag"> {tag} </span>
            ))}
        </div>
        <div className="option">
          <p> Overview </p>
        </div>
        <div className="option">
          <p> Sales </p>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state)
  return {
    product: state.product,
  }
}

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)
