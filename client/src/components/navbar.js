import React, { Component } from 'react'



export default class Navbar extends Component {
  render() {
    return (
      <div>
      <div className="wrap_header">
				<a href="index.html" className="logo">
				<img src={require('./images/icons/logo.png')} alt="IMG-LOGO"/>
				</a>

			
				<div className="wrap_menu">
					<nav className="menu">
						<ul className="main_menu">
							<li>
								<a href="index.html">Home</a>
								<ul className="sub_menu">
									<li><a href="index.html">Homepage V1</a></li>
									<li><a href="home-02.html">Homepage V2</a></li>
									<li><a href="home-03.html">Homepage V3</a></li>
								</ul>
							</li>

							<li>
								<a href="product.html">Shop</a>
							</li>

							<li className="sale-noti">
								<a href="product.html">Sale</a>
							</li>

							<li>
								<a href="cart.html">Features</a>
							</li>

							<li>
								<a href="blog.html">Blog</a>
							</li>

							<li>
								<a href="about.html">About</a>
							</li>

							<li>
								<a href="contact.html">Contact</a>
							</li>
						</ul>
					</nav>
				</div>
                <div className="header-icons">
					<a href="#" className="header-wrapicon1 dis-block">
						<img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
					</a>

					<span className="linedivide1"></span>

					<div className="header-wrapicon2">
						<img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON"/>
						<span className="header-icons-noti">0</span>
						<div className="header-cart header-dropdown">
							<ul className="header-cart-wrapitem">
								<li className="header-cart-item">
									<div className="header-cart-item-img">
										<img src="images/item-cart-01.jpg" alt="IMG"/>
									</div>

									<div className="header-cart-item-txt">
										<a href="#" className="header-cart-item-name">
											White Shirt With Pleat Detail Back
										</a>

										<span className="header-cart-item-info">
											1 x $19.00
										</span>
									</div>
								</li>

								<li className="header-cart-item">
									<div className="header-cart-item-img">
										<img src="images/item-cart-02.jpg" alt="IMG"/>
									</div>

									<div className="header-cart-item-txt">
										<a href="#" className="header-cart-item-name">
											Converse All Star Hi Black Canvas
										</a>

										<span className="header-cart-item-info">
											1 x $39.00
										</span>
									</div>
								</li>

								<li className="header-cart-item">
									<div className="header-cart-item-img">
										<img src="images/item-cart-03.jpg" alt="IMG"/>
									</div>

									<div className="header-cart-item-txt">
										<a href="#" className="header-cart-item-name">
											Nixon Porter Leather Watch In Tan
										</a>

										<span className="header-cart-item-info">
											1 x $17.00
										</span>
									</div>
								</li>
							</ul>

							<div className="header-cart-total">
								Total: $75.00
							</div>

							<div className="header-cart-buttons">
								<div className="header-cart-wrapbtn">
								
									<a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										View Cart
									</a>
								</div>

								<div className="header-cart-wrapbtn">
									
									<a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										Check Out
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
      </div>
      </div>
    )
  }
}
