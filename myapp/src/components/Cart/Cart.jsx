import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <Header />
            <div className="cart-container">
                <h1>Shopping Bag</h1>
                <div className="add-log-cart">
                    <div className="add-cart">
                        <div className="add-cart-1">
                            <img src="images/1..jpg" alt="" />
                            <div className="add-cart-descript">
                                <p>Loose Fit Jumper</p>
                                <span>Rs.2,999.00</span>
                                <p>Member price Rs.2,549.00</p>
                                <div className="info-add-cart">
                                    <div className="info-add-cart-1">
                                        <h6>art.no:1169667001</h6>
                                        <h6>Color: black/flower</h6>
                                    </div>
                                    <div className="info-add-cart-2">
                                        <h6>Size:M</h6>
                                        <h6>Total:Rs.2,999.00</h6>
                                    </div>
                                </div>
                                <div className="cart-no">
                                    <div className="cart-box"></div>
                                    <select className='cart-opt'>
                                        <option>0</option>
                                        <option>1</option>
                                        <option >2</option>
                                        <option >3</option>
                                        <option >4</option>
                                        <option >5</option>
                                        <option >6</option>
                                        <option >7</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="log-cart">
                        <div className="disc-log">
                            <h6>Discounts</h6>
                            <h6>Apply discount</h6>
                        </div>
                        <p>Log in to use your personal offers!</p>
                        <div className="login-log">
                            <button>Log in</button>
                        </div>
                        <hr />
                        <div className="value-log-1">
                            <h6>order value</h6>
                            <h6>Rs.5998.00</h6>
                        </div>
                        <div className="value-log-2">
                            <h6>Delivery</h6>
                            <h6>Free</h6>
                        </div>
                        <hr />
                        <div className="value-log-3">
                            <h5>Total</h5>
                            <h5>Rs.5998.00</h5>
                        </div>
                        <div className="checkout-log">
                            <button>continue to checkout</button>
                        </div>
                        <p>we accept</p>
                        <div className="cashondel-log">
                            <p>cash on delivery</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-product">
                <h4>You may also like</h4>
                <div className="cart-product-list">
                    <div className="prod-con-flex">
                        <img src="images/1..jpg" alt="" />
                        <p>Loose Fit Jumper</p>
                        <span>Rs.2,999.00</span>

                        <p>Member price Rs.2,549.00</p>
                    </div>
                    <div className="prod-con-flex">
                        <img src="images/2.jpg" alt="" />
                        <p>Loose Fit Jumper</p>
                        <span>Rs.2,999.00</span>

                        <p>Member price Rs.2,549.00</p>
                    </div>
                    <div className="prod-con-flex">
                        <img src="images/3.jpg" alt="" />
                        <p>Loose Fit Jumper</p>
                        <span>Rs.2,999.00</span>

                        <p>Member price Rs.2,549.00</p>
                    </div>
                    <div className="prod-con-flex">
                        <img src="images/4.jpg" alt="" />
                        <p>Loose Fit Jumper</p>
                        <span>Rs.2,999.00</span>

                        <p>Member price Rs.2,549.00</p>
                    </div>
                    <div className="prod-con-flex">
                        <img src="images/5.jpg" alt="" />
                        <p>Loose Fit Jumper</p>
                        <span>Rs.2,999.00</span>

                        <p>Member price Rs.2,549.00</p>
                    </div>
                    <div className="prod-con-flex">
                        <img src="images/6.jpg" alt="" />
                        <p>Loose Fit Jumper</p>
                        <span>Rs.2,999.00</span>

                        <p>Member price Rs.2,549.00</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Cart