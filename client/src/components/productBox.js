import React, { Component } from 'react'

export default class ProductBox extends Component {
  render() {
    return (
      <div>
        <div className="block2">
								<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
									<img src={this.props.image} alt="IMG-PRODUCT" />

									<div className="block2-overlay trans-0-4">
										<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
											<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
											<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
										</a>

										<div className="block2-btn-addcart w-size1 trans-0-4">
											<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
												Add to Cart
											</button>
										</div>
									</div>
								</div>
                                <div class="block2-txt p-t-20">
									<a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">
										{this.props.name}
									</a>

									<span class="block2-price m-text6 p-r-5">
										${this.props.price}
									</span>
								</div>
                        </div>
      </div>
    )
  }
}
