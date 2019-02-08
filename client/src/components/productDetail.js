import React, { Component } from 'react'
import axios from 'axios'
export default class ProductDetail extends Component {


  componentWillMount = () => {
    axios.get("/api" + this.props.id)
        .then(res => console.log(res.data))
  }  

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
