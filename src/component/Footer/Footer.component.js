import React, { Component } from 'react'
import "./Footer.css"

import Logo from "../../assets/imgs/logo.svg";


export class Footer extends Component {
  render() {
    return (
      <div>

        <div>
            <div className='d-flex justify-content-evenly'>
                <div>   
                    <h4>Contact:</h4>
                    <p>94565-78956<br />79056-86547</p>
                </div>
                
            </div>

            <div className='d-flex align-items-center justify-content-evenly'>   
                <div>
                    <h4>Email:</h4>
                    <p>devvidevvi@gmail.com</p>
                </div>
                <div>
                    <img src={Logo} />
                </div>
            </div>

        </div>

        <div className='d-flex justify-content-evenly'>
            <div>
                <div>   
                    <h4 classname="textLeft">Contact:</h4>
                    <p>94565-78956<br />79056-86547</p>
                </div>
                <div>
                    <h4>Email:</h4>
                    <p>devvidevvi@gmail.com</p>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-evenly'>   
               
                <div>
                    <img src={Logo} />
                </div>
            </div>

        </div>
      </div>
    )
  }
}

export default Footer