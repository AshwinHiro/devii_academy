import React, { Component } from 'react'
import "./Gallery.css"
import Boy from "../../assets/imgs/boy.svg";

export class Gallery extends Component {
  render() {
    return (
      <div>
        <div className='container-lg'>
            <div className='row align-items-center'>

                <div className='col-6'>
                    <div className='align-self-start'>
                        <h4>Gallery</h4>
                    </div>

                    <div className='text-start py-4'> 
                        <h3>Success Stories</h3>
                    </div>

                    <div className='text-start'>
                        <h3>From Our Students</h3><br />
                        <p>Tuition centre means an educational institution which specifically 
                            provides educational guidance or assists a pupil of a school or
                            educational institution or any person to prepare for an examination.
                        </p>
                    </div>

                    <div className='text-start py-4'>
                        <button className='transparentButton'>See More</button>
                    </div>
                </div>

                <div className='col-6'>
                    <img src={Boy} />
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Gallery