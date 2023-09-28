import React from "react";

function Header() {
    return (
        <div class="container">
            <div className="header">
                <div className="hdr-left">
                    <ul>
                        <li>customer service</li>
                        <li>newsletter</li>
                        <li>find a store</li>
                        <li></li>
                    </ul>
                </div>
                <div className="logo">
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png" alt="" />

                </div>

                <div className="hdr-right">
                    <ul>
                        <li><i class="fa-regular fa-user"></i><span>sign in</span></li>
                        <li><i class="fa-regular fa-heart"></i><span>favourite</span></li>
                        <li><i class="fa-light fa-bag-shopping"></i><span>shopping bag (0)</span></li>
                    </ul>
                </div>
            </div>

            <div className="product-list">
                <div className="pr-list-cen">
                    <ul>
                        <li>ladies</li>
                        <li>men</li>
                        <li>divided</li>
                        <li>baby</li>
                        <li>kids</li>
                        <li>H&M HOME</li>
                        <li>sport</li>
                        <li>sustanability</li>
                        <li>sale</li>
                    </ul>
                </div>
                <div className="search-box">
                    <i class="fa-light fa-magnifying-glass"></i>
                    <input type="text" placeholder="search products" />

                </div>

            </div>


        </div>

    )
}
export default Header;