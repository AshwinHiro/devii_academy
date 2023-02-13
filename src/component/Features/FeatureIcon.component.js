import React, { Component } from 'react'
import Laptop from "../../assets/imgs/icon _laptop chromebook_.svg";
import "./Features.css";
export class FeatureIcon extends Component {
  render() {
    return (
      <div>
        <img src={Laptop} />
        <h4>Expert Teachers</h4>
        <p className='textSize'>A teacher also called a school teacher called a school teacher</p>
      </div>
    )
  }
}

export default FeatureIcon