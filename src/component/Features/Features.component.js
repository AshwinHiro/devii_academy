import React, { Component } from 'react'
import FeatureIcon from './FeatureIcon.component'
import "./Features.css";
export class Features extends Component {
  render() {
    return (
      <div>
        <div className='container-lg'>
            <div className='d-flex flex-wrap justify-content-evenly'>
                <div>
                    <FeatureIcon />
                </div>
                <div>
                    <FeatureIcon />
                </div>
                <div>
                    <FeatureIcon />
                </div>
            </div>
        </div>

      </div>
    )
  }
}

export default Features