import React, { useContext } from "react";
import './Homepage.css';
import { AuthContext } from "../AuthContext";

function Homepage() {
    const {state} = useContext(AuthContext)
    return (
        <div className="container-h">
            <div className="header-h">
                <div className="hdr-left-h">
                    <ul>
                        <li>customer service</li>
                        <li>newsletter</li>
                        <li>find a store</li>
                        <li></li>
                    </ul>
                </div>
                <div className="logo-h">
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png" alt="" />

                </div>

                <div className="hdr-right-h">
                    <ul>
                        <li>{state?.user?.id?
                            <div>{state?.user?.name}</div> :
                            <>
                            <i class="fa-regular fa-user"></i><a href="/signin" target="blank">sign in</a></> }
                        </li>
                        <li><i class="fa-regular fa-heart"></i><span>favourite</span></li>
                        <li><i class="fa-regular fa-bag-shopping"></i><span>shopping bag (0)</span></li>
                    </ul>
                </div>
            </div>

            <div className="product-list-h">
                <div className="pr-list-cen-h">
                    <ul style={{cursor:"pointer"}}>
                        <li>ladies</li>
                        <li ><a href="/men" target="blank">men </a> </li>
                        <li>divided</li>
                        <li>baby</li>
                        <li>kids</li>
                        <li>H&M HOME</li>
                        <li>sport</li>
                        <li>sustanability</li>
                        <li>sale</li>
                    </ul>
                </div>
                <div className="search-box-h">
                    <i class="fa-light fa-magnifying-glass"></i>
                    <input type="text" placeholder="search products" />

                </div>

            </div>

            <div className="prod-price">
                <ul>
                    <li>Members get free shipping above Rs.1999</li>
                    <li>Free & flexible 15 days return</li>
                    <li>Download the H&M App</li>
                </ul>
            </div>

            <div className="blazer-h">
                <div className="blz-price">
                    <p>Rs. 2,299.00
                    </p>
                    <span>Frill-trimmed pointelle-knit jumper Campaign image
                    </span>
                </div>
                <div className="blz-head">
                    <h1>Season for knits</h1>
                    <p> Hello bows, frills, and puffers!</p>

                </div>
                <button>Shop now</button>
            </div>

            <div className="wardrobe">
                <div className="wrdb-head">
                    <h3>A/W23 WARDROBE WINS</h3>
                    <h6>key stales for the season ahead!</h6>
                </div>
                <div className="wrdb-button">
                    <button>Ladies</button>
                    <button>Men</button>
                    <button>Divided</button>
                    <button>kids & baby</button>
                </div>
            </div>

            <div className="pop-cat">
                <div className="pop-cat-head">
                    <h1>Popular categories</h1>
                </div>
                <div className="pop-cat-flex">
                    <div className="pop-cat-combo">
                        <div className="pop-cat-l">
                            <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />


                        </div>
                        <div className="pop-cat-name">
                            <h4>Ladies</h4>
                            <h5>Tops & T-shirts</h5>
                        </div>
                    </div>
                    <div className="pop-cat-combo">
                        <div className="pop-cat-l">
                            <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10201.png?imwidth=124" alt="" />

                        </div>
                        <div className="pop-cat-name">
                            <h4>Ladies</h4>
                            <h5>Tops & T-shirts</h5>
                        </div>
                    </div>
                    <div className="pop-cat-combo">
                        <div className="pop-cat-l">
                            <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10231.png?imwidth=124" alt="" />


                        </div>
                        <div className="pop-cat-name">
                            <h4>Ladies</h4>
                            <h5>Tops & T-shirts</h5>
                        </div>
                    </div>
                    <div className="pop-cat-combo">
                        <div className="pop-cat-l">
                            <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10244.png?imwidth=124" alt="" />


                        </div>
                        <div className="pop-cat-name">
                            <h4>Ladies</h4>
                            <h5>Tops & T-shirts</h5>
                        </div>
                    </div>
                    <div className="pop-cat-combo">
                        <div className="pop-cat-l">
                            <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />


                        </div>
                        <div className="pop-cat-name">
                            <h4>Ladies</h4>
                            <h5>Tops & T-shirts</h5>
                        </div>
                    </div>
                    <div className="pop-cat-combo">
                        <div className="pop-cat-l">
                            <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />


                        </div>
                        <div className="pop-cat-name">
                            <h4>Ladies</h4>
                            <h5>Tops & T-shirts</h5>
                        </div>
                    </div>
                    <div className="pop-cat-combo">
                        <div className="pop-cat-l">
                            <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />


                        </div>
                        <div className="pop-cat-name">
                            <h4>Ladies</h4>
                            <h5>Tops & T-shirts</h5>
                        </div>
                    </div>
                    <div className="pop-cat-combo">
                        <div className="pop-cat-l">
                            <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />


                        </div>
                        <div className="pop-cat-name">
                            <h4>Ladies</h4>
                            <h5>Tops & T-shirts</h5>
                        </div>
                    </div>
                </div>


            </div>

            <div className="blazer-h">
                <div className="blz-price">
                    <p>Rs. 2,299.00
                    </p>
                    <span>Frill-trimmed pointelle-knit jumper Campaign image
                    </span>
                </div>
                <div className="blz-head">
                    <h1>Season for knits</h1>
                    <p> Hello bows, frills, and puffers!</p>

                </div>
                <button>Shop now</button>
            </div>

            <div className="new-arrivals">
                <div className="new-arr-head">
                    <h2>New Arrivals</h2>
                </div>
                <div className="new-arr-but">
                    <button>Ladies</button>
                    <button>Men</button>
                    <button>Divided</button>
                    <button>Baby</button>
                    <button>Kids</button>
                    <button>H&m HOME</button>
                    <button>Sport</button>
                </div>
                <div className="new-arr-combo">
                    <div className="new-arr-combo-im">
                        <img src="https://lp2.hm.com/hmgoepprod?set=source[/24/6a/246a4d20fdeb95a2530eab9c7ae54030fe445600.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" alt="" />

                        <div className="new-arr-name">
                            <h4>Crinkled button-front top</h4>
                            <span>Rs.1,299.00</span>
                        </div>
                    </div>
                    <div className="new-arr-combo-im">
                        <img src="https://lp2.hm.com/hmgoepprod?set=source[/24/6a/246a4d20fdeb95a2530eab9c7ae54030fe445600.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" alt="" />

                        <div className="new-arr-name">
                            <h4>Crinkled button-front top</h4>
                            <span>Rs.1,299.00</span>
                        </div>
                    </div>
                    <div className="new-arr-combo-im">
                        <img src="https://lp2.hm.com/hmgoepprod?set=source[/24/6a/246a4d20fdeb95a2530eab9c7ae54030fe445600.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" alt="" />

                        <div className="new-arr-name">
                            <h4>Crinkled button-front top</h4>
                            <span>Rs.1,299.00</span>
                        </div>
                    </div>
                    <div className="new-arr-combo-im">
                        <img src="https://lp2.hm.com/hmgoepprod?set=source[/24/6a/246a4d20fdeb95a2530eab9c7ae54030fe445600.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" alt="" />

                        <div className="new-arr-name">
                            <h4>Crinkled button-front top</h4>
                            <span>Rs.1,299.00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blazer-h">
                <div className="blz-price">
                    <p>Rs. 2,299.00
                    </p>
                    <span>Frill-trimmed pointelle-knit jumper Campaign image
                    </span>
                </div>
                <div className="blz-head">
                    <h1>Season for knits</h1>
                    <p> Hello bows, frills, and puffers!</p>

                </div>
                <button>Shop now</button>
            </div>

            <div className="magazin">
                <div className="mag-head">
                    <h1>MAGAZINE</h1>
                    <h5>A WORLD OF INSPIRATION</h5>

                    <a href="#">READ H&M MAGAZINE</a>
                </div>
                <div className="mag-combo">
                    <div className="mag-combo-story">
                        <img src="https://image.hm.com/content/dam/hm-magazine-2023/september_2023/7428/7428-Outdoor-Movement-Magazine-image-1-1688x1126.jpg?imwidth=768"  />

                        <h4>INSIDE H&M</h4>
                        <h3>Gear up for the outdoors
                        </h3>
                        <a href="#">Read More </a>
                    </div>
                    <div className="mag-combo-story">
                        <img src="https://image.hm.com/content/dam/hm-magazine-2023/september_2023/7428/7428-Outdoor-Movement-Magazine-image-1-1688x1126.jpg?imwidth=768" alt="" />

                        <h4>INSIDE H&M</h4>
                        <h3>Gear up for the outdoors
                        </h3>
                        <a href="#">Read More </a>
                    </div>
                    <div className="mag-combo-story">
                        <img src="https://image.hm.com/content/dam/hm-magazine-2023/september_2023/7428/7428-Outdoor-Movement-Magazine-image-1-1688x1126.jpg?imwidth=768" alt="" />

                        <h4>INSIDE H&M</h4>
                        <h3>Gear up for the outdoors
                        </h3>
                        <a href="#">Read More </a>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="ft-combo">
                    <div className="ft-combo-li-1">
                        <div className="ft-shop">
                            <h4>SHOP</h4>
                        </div>
                        <div className="ft-shop-list">
                            <ul>
                                <li>ladies</li>
                                <li>men</li>
                                <li>divided</li>
                                <li>baby</li>
                                <li>kids</li>
                                <li>H&M HOME</li>
                                <li>sport</li>
                            </ul>
                        </div>
                    </div>

                    <div className="ft-combo-li-2">
                        <div className="ft-shop">
                            <h4>CORPORATE INFO</h4>
                        </div>
                        <div className="ft-shop-list">
                            <ul>
                                <li>career at H&M</li>
                                <li>About H&M group</li>
                                <li>sustanability</li>
                                <li>press</li>
                                <li>investor relation</li>
                                <li>corporate governance</li>

                            </ul>
                        </div>
                    </div>

                    <div className="ft-combo-li-3">
                        <div className="ft-shop">
                            <h4>help</h4>
                        </div>
                        <div className="ft-shop-list">
                            <ul>
                                <li>Customer Service</li>
                                <li>My H&M</li>
                                <li>Find a store</li>
                                <li>Legal & Privacy</li>
                                <li> Contact</li>
                                <li>Report a scam</li>
                                <li>Cookie Notice</li>
                                <li>Cookie Settings</li>
                            </ul>
                        </div>
                    </div>
                    <div className="ft-combo-li-4">
                        <p>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!
                        </p>
                        <a href="#">Read more </a>
                       
                    </div>


                </div>

                <div class="ft-social">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-pinterest"></i>
                </div>

                <div className="ft-copyr">
                    <p>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</p>
                </div>

                <div className="ft-logo">
                    <img src="https://th.bing.com/th/id/OIP.XBSvgfrG-kuYAMfPPVTSXAHaFG?pid=ImgDet&rs=1" alt="" />

                    <h6>INDIA | Rs.</h6>
                </div>
            </div>
        </div>








    )
}

export default Homepage;