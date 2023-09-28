import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import './Men.css'



function Men(){
    return(
     <div className="container">
        <Header/>

        <div class="left-right-bar">
            <div class="left-bar">
                

            </div>
            <div class="right-bar">

                <div class="blazer">
                    <div class="blz-price">
                        <p>Rs. 2,299.00
                        </p>
                        <span>Frill-trimmed pointelle-knit jumper Campaign image
                        </span>
                    </div>
                    <div class="blz-head">
                        <h1>Season for knits</h1>
                        <p> Hello bows, frills, and puffers!</p>

                    </div>
                    <button>Shop now</button>
                </div>

                <div class="wardrobe">
                    <div class="wrdb-head">
                        <h3>Affordable fashion,unlimited styles!</h3>
                        <h6>Everything under ₹1999</h6>
                    </div>
                    <div class="wrdb-button">
                        <button>shop now</button>

                    </div>
                </div>

                <div class="blazer-1">
                    <div class="blz-price">
                        <p>Rs. 2,299.00
                        </p>
                        <span>Frill-trimmed pointelle-knit jumper Campaign image
                        </span>
                    </div>
                    <div class="blz-head">
                        <h1>Season for knits</h1>
                        <p> Hello bows, frills, and puffers!</p>

                    </div>
                    <button>Shop now</button>
                </div>
            </div>
        </div>



        <Footer/>
 
     </div>

    )
}

export default Men;