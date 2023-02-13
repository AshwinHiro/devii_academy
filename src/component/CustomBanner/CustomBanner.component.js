import React, { Component } from 'react'
import Logo from "../../assets/imgs/logo.svg";
import Banner from "../../assets/imgs/girl.svg";
import Banner2 from "../../assets/imgs/girl2.png";
import "./CustomBanner.style.css";

export class CustomBanner extends Component {
  render() {
    return (
      <div className="padding10">

        {/* Insider */}
        {/* Logo and Menu*/}

        <div className='container-lg'>
          <div className='row align-items-center'>
            {/* Logo */}
            <div className='col text-start'><img src={Logo} /></div>

            {/* Menu */}
            <div className='col d-flex justify-content-evenly'>
                <a href="">Home</a>
                <a href="">Gallery</a>
                <a href="">About Us</a>
                <a href="">Courses</a>
                <a href="">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="banner container">
            <div className="bannerLeft row">
                <div className="bannerContent col-3 text-start ">
                    <div></div>
                    
                    <div className='d-flex flex-column mb-3 p-5 bannerText'>
                      <div><h1>Welcome</h1></div>
                      <div><h1>To Devvi</h1></div>
                      <div><h3>Academy</h3></div>
                    </div>
                    <div className='p-5'><button className='transparentButton' type="button">Learn more</button></div>
                </div>

                <div className='col-9'>
                    <img src={Banner2} />
                </div>
            </div>

            <div>
                <p>circle 1</p>
                <p>circle 2</p>
                <p>circle 3</p>
            </div>
        </div>

      </div>
    )
  }
}

export default CustomBanner