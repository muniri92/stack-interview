
import './chart.scss'

import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'

class ChartContainer extends React.Component {
  constructor(props){
    super(props)
  }




  render() {
    let {product} = this.props
    return(
      <div className="chart-container">
        <table>
          <tr>
            <th> WEEK ENDING  </th>
            <th> RETAIL SALES  </th>
            <th> WHOLESALE SALES </th>
            <th> UNITS SOLD </th>
            <th> RETAILER MARGIN </th>
          </tr>

          {
            product.sales.map( (sale, i) => (
              <tr key={i}>
                  <td> { sale.weekEnding} </td>
                  <td> $ { sale.retailSales.toLocaleString()} </td>
                  <td> $ { sale.wholesaleSales.toLocaleString()} </td>
                  <td> { sale.unitsSold} </td>
                  <td> $ { sale.retailerMargin.toLocaleString()} </td>
              </tr>
            ))
          }
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer)
