import React from "react"
import './ShopNow.css'
import Header from "../Header"
import Footer from "../Footer"



const ShopNow = () => {


    return (


        <div className="container-sn">
            <Header />
            <div className="main-sn">
                <div className="left-bar-sn">
                    <div className="bar-sn">
                        <div className="bar-sn-col">
                            <h4>Member Exclusive Prices</h4>
                            <div className="bar-sn-list">
                                <span>Shop Now</span>
                            </div>
                        </div>
                    </div>
                    <div className="bar-sn">
                        <div className="bar-sn-col">
                            <h4>New Arrivals</h4>
                            <div className="bar-sn-list">
                                <span>View All</span><br />
                                <span>Clothes</span><br />
                                <span>Shoes & Accessories</span><br />
                            </div>
                        </div>

                    </div>
                    <div className="bar-sn">
                        <div className="bar-sn-col">
                            <h4>Treding Now</h4>
                            <div className="bar-sn-list">
                                <span>Trending Now</span>
                            </div>
                        </div>
                    </div>
                    <div className="bar-sn">
                        <div className="bar-sn-col">
                            <h4>Shop by Product</h4>
                            <div className="bar-sn-list">
                                <span>view all</span><br />
                                <span>t-shirts & tops</span><br />
                                <span>hoodies & sweatshirts</span><br />
                                <span>shirts</span><br />
                                <span>Trousers</span><br />
                                <span>Shoes</span><br />
                                <span>Jeans</span><br />
                                <span>Jackets & Coats</span><br />
                                <span>Cardigans & Jumpers</span><br />
                                <span>Shorts</span><br />
                                <span>Basics</span><br />
                                <span>Suits & Blazers</span><br />
                                <span>Underwear & Innerwear</span><br />
                                <span>Swimwear</span><br />
                                <span>Socks</span><br />
                                <span>Accessories</span><br />
                                <span>Sportswear</span><br />
                                <span>Care products</span><br />
                                <span>Sleepwear & Loungewear</span><br />
                                <span>Premium Selection</span><br />
                                <span>Sale</span><br />
                            </div>
                        </div>
                    </div>
                    <div className="bar-sn">
                        <div className="bar-sn-col">
                            <h4>Sustainability</h4>
                            <div className="bar-sn-list">
                                <span>H&M Take Care</span><br />
                                <span>Learn More</span><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-bar-sn">
                    <h1>MEMBER EXCLUSIVE PRICES</h1>
                    <div className="righ-opt">
                        <div className="righ-opt-sort">
                            <h5>SORT BY </h5>
                            <div className="sort-list">
                                <ul>
                                    <li><input type="radio" name="sort" />Recommended</li>
                                    <li><input type="radio" name="sort" />Newest</li>
                                    <li><input type="radio" name="sort" />Lowest Price</li>
                                    <li><input type="radio" name="sort" />Highest Price</li>
                                </ul>
                            </div>
                        </div>
                        <div className="righ-opt-sort">
                            <h5>SIZE</h5>
                            <div className="sort-list">
                                <ul>
                                    <li>Menswear</li>
                                    <li>Waist(inches)</li>
                                    <li>Footwear</li>
                                </ul>
                            </div>

                        </div>
                        <div className="righ-opt-sort">
                            <h5>COLOR</h5>
                            <div className="sort-list">
                                <ul>
                                    <li>Black</li>
                                    <li>blue</li>
                                    <li>brown</li>
                                    <li>green</li>
                                    <li>grey</li>
                                    <li>multi</li>
                                    <li>purple</li>
                                    <li>silver</li>
                                    <li>white</li>
                                </ul>
                            </div>

                        </div>
                        <div className="righ-opt-sort">
                            <h5>PATTERN</h5>
                            <div className="sort-list">
                                <ul>
                                    <li>Black</li>
                                    <li>blue</li>
                                    <li>brown</li>
                                    <li>green</li>
                                    <li>grey</li>
                                    <li>multi</li>
                                    <li>purple</li>
                                    <li>silver</li>
                                    <li>white</li>
                                </ul>
                            </div>

                        </div>
                        <div className="righ-opt-sort">
                            <h5>PRODUCT TYPE</h5>
                            <div className="sort-list">
                                <ul>
                                    <li>Black</li>
                                    <li>blue</li>
                                    <li>brown</li>
                                    <li>green</li>
                                    <li>grey</li>
                                    <li>multi</li>
                                    <li>purple</li>
                                    <li>silver</li>
                                    <li>white</li>
                                </ul>
                            </div>

                        </div>
                        <div className="righ-opt-sort">
                            <h5>all filters</h5>
                            <div className="sort-list">
                                <ul>
                                    <li>Black</li>
                                    <li>blue</li>
                                    <li>brown</li>
                                    <li>green</li>
                                    <li>grey</li>
                                    <li>multi</li>
                                    <li>purple</li>
                                    <li>silver</li>
                                    <li>white</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="main-prod-container">
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
                        <div className="prod-con-flex">
                            <img src="images/7.jpg" alt="" />
                            <p>Loose Fit Jumper</p>
                            <span>Rs.2,999.00</span>
                            
                            <p>Member price Rs.2,549.00</p>
                        </div>
                        <div className="prod-con-flex">
                            <img src="images/8.jpg" alt="" />
                            <p>Loose Fit Jumper</p>
                            <span>Rs.2,999.00</span>
                            
                            <p>Member price Rs.2,549.00</p>
                        </div>
                        <div className="prod-con-flex">
                            <img src="images/9.jpg" alt="" />
                            <p>Loose Fit Jumper</p>
                            <span>Rs.2,999.00</span>
                            
                            <p>Member price Rs.2,549.00</p>
                        </div>
                        <div className="prod-con-flex">
                            <img src="images/10.jpg" alt="" />
                            <p>Loose Fit Jumper</p>
                            <span>Rs.2,999.00</span>
                            
                            <p>Member price Rs.2,549.00</p>
                        </div>
                        <div className="prod-con-flex">
                            <img src="images/11.jpg" alt="" />
                            <p>Loose Fit Jumper</p>
                            <span>Rs.2,999.00</span>
                            
                            <p>Member price Rs.2,549.00</p>
                        </div>
                        <div className="prod-con-flex">
                            <img src="images/12.jpg" alt="" />
                            <p>Loose Fit Jumper</p>
                            <span>Rs.2,999.00</span>
                            
                            <p>Member price Rs.2,549.00</p>
                        </div>
                        <div className="prod-con-flex">
                            <img src="images/13.jpg" alt="" />
                            <p>Loose Fit Jumper</p>
                            <span>Rs.2,999.00</span>
                            
                            <p>Member price Rs.2,549.00</p>
                        </div>
                        <div className="prod-con-flex">
                            <img src="images/14.jpg" alt="" />
                            <p>Loose Fit Jumper</p>
                            <span>Rs.2,999.00</span>
                            
                            <p>Member price Rs.2,549.00</p>
                        </div>
                        <div className="prod-con-flex">
                            <img src="images/15.jpg" alt="" />
                            <p>Loose Fit Jumper</p>
                            <span>Rs.2,999.00</span>
                            
                            <p>Member price Rs.2,549.00</p>
                        </div>
                        <div className="prod-con-flex">
                            <img src="images/16.jpg" alt="" />
                            <p>Loose Fit Jumper</p>
                            <span>Rs.2,999.00</span>
                            
                            <p>Member price Rs.2,549.00</p>
                        </div>
                        
                    </div>



                </div>
            </div>
            <Footer />
        </div>

    )
}

export default ShopNow