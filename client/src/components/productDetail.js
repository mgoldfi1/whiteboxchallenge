import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ProductInfo from './productInfo'

export default class ProductDetail extends Component {

  state = {
      err: '',
      item: {}
  }

  componentWillMount = () => {
    axios.get("/api" + this.props.id)
        .then(res =>  this.setState({item: res.data}))
        .catch(error => {
        alert(error.response.data.err);
        this.setState({err: error.response.data.err })
        })
  }  



  render() {
    return (
      <div>
        {this.state.err ? <Redirect to="/"/> : <ProductInfo description={this.state.item.about} image={this.state.item.image} name={this.state.item.name} price={this.state.item.price}/>}
      </div>
    )
  }
}
