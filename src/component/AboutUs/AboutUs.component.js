import React, { Component } from 'react'
import "./AboutUs.css"
import Boy from "../../assets/imgs/boy.svg";

export class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className='container-lg'>
            <div className='row align-items-center'>
                <div className='col-6'>
                    <img src={Boy} />
                </div>

                <div className='col-6'>
                    <div className='align-self-start'>
                        <h4>About Us</h4>
                    </div>

                    <div className='text-start py-4'> 
                        <h3>What we do???</h3>
                        <p>Tuition centre means an educational institution which specifically 
                            provides educational guidance or assists a pupil of a school or
                            educational institution or any person to prepare for an examination.
                        </p>
                    </div>

                    <div className='text-start'>
                        <h3>What do we do?</h3>
                        <p>Tuition centre means an educational institution which specifically 
                            provides educational guidance or assists a pupil of a school or
                            educational institution or any person to prepare for an examination.
                        </p>
                    </div>

                    <div className='text-start py-4'>
                        <button className='transparentButton'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default AboutUs