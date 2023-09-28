import React from "react";
import'./SignIn.css'

function SignIn(){
    return(
        <div className="container-m">
            <div className="main">
                <div className="main-head">
                    <h1>Sign in</h1>
                    <p>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
                </div>
                <form >
                    <label className="lab-1">Email <span>*</span></label><br />
                  <input className="email" type="email" required  /> <br /> 
                  <label className="lab-2">Password <span>*</span></label><br />
                  <input className="password" type="password"  /> <br />
                  <div className="check">
                    <div className="check-l">
                        <input type="checkbox" />
                        <span>remember me</span>
                    </div>
                    <a href="#">forgot password?</a>
                    
                  </div>
                  <button className="bt-si" type="submit">sign in</button>
                  <button className="be-me" type="submit">Become a member</button>
                </form>
                
                
                  <span>
                    <a href="#">Membership info</a>
                  </span>
                


            </div>

        </div>
    )
}

export default SignIn;