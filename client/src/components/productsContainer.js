import React, { Component } from 'react';
import ProductBox from './productBox.js';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class ProductsContainer extends Component {
    state = {
        products: []
    }
    
    componentWillMount = () => {
        axios.get('/api/products')
        .then(res => this.setState({products: res.data}))
  }

    renderProducts = () => {
        return this.state.products.map(product => {
            return (<ProductBox key={product._id}  id={product._id} name={product.name} price={product.price} image={product.image} />)
        })
    }

  render() {
    return (
      <React.Fragment>     
             {this.renderProducts()}
      </React.Fragment>
    )
  }
}
