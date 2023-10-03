import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './ProductPage.css'

const ProductPage = () => {
    return (
        <div className='singlepg-container'>
            <Header />
            <div className="pg-container">
                <div className="pg-cont-left">
                    <div className="pg-img">
                        <img src="images/pg1.jpg" alt="" />
                    </div>
                    <div className="pg-img">
                        <img src="images/pg2.webp" alt="" />
                    </div>
                    <div className="pg-img">
                        <img src="images/pg3.webp" alt="" />
                    </div>
                    <div className="pg-img">
                        <img src="images/pg4.webp" alt="" />
                    </div>
                    <div className="pg-img">
                        <img src="images/pg5.webp" alt="" />
                    </div>
                    <div className="pg-img">
                        <img src="images/pg6.webp" alt="" />
                    </div>
                    <div className="pg-img">
                        <img src="images/pg7.webp" alt="" />
                    </div>
                    <div className="pg-img">
                        <img src="images/pg8.webp" alt="" />
                    </div>
                </div>
                <div className="pg-cont-right">
                    <div className="pg-title">
                        <h4>Loose Fit Jumper</h4>
                        <div className="pg-price">

                            <p>Rs. 2,999.00</p>

                            <p>Member price Rs. 2,549.00</p>
                        </div>
                    </div>
                    <p>Black/Flower</p>
                    <img src="images/1..jpg" alt="" />
                    <div className="pg-prod-size">
                        <h5>Sizes</h5>
                        <div className="prod-size">
                            <button>XS</button>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                        </div>
                    </div>
                    <button className='pg-cont-button'>Add</button>
                    <div className="str-dlr-pg">
                        <ul>
                            <li>Find in store</li>
                            <li>standard delivery in 2-7days</li>
                        </ul>
                    </div>
                    <h4 className='txt-center'>delivery and payment</h4>
                    <div className="review-pg">
                        <h4>(4 reviews)</h4>
                    </div>

                    <div className="descript-pg">
                        <h4>Description & fit</h4>
                    </div>
                    <div className="descript-pg">
                        <h4>Materials</h4>
                    </div>
                    <div className="descript-pg">
                        <h4>Care guide</h4>
                    </div>




                </div>
            </div>
            <div className="pg-cont-list">
                 <h3 className='style-with'>style with</h3>
                <div className="list-style">
                   
                    <div className="list-stl-flex">
                        <img src="images/1..jpg" alt="" />
                        <p>Loose Fit Jumper</p>
                        <span>Rs.2,999.00</span>

                        <p>Member price Rs.2,549.00</p>
                    </div>
                    <div className="list-stl-flex">
                        <img src="images/2.jpg" alt="" />
                        <p>Loose Fit Jumper</p>
                        <span>Rs.2,999.00</span>

                        <p>Member price Rs.2,549.00</p>
                    </div>
                    <div className="list-stl-flex">
                        <img src="images/3.jpg" alt="" />
                        <p>Loose Fit Jumper</p>
                        <span>Rs.2,999.00</span>

                        <p>Member price Rs.2,549.00</p>
                    </div>
                    <div className="list-stl-flex">
                        <img src="images/4.jpg" alt="" />
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

export default ProductPage