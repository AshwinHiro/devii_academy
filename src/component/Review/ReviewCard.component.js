import React, { Component } from 'react'
import "./Review.css"
import profile from "../../assets/imgs/profile.svg"

export class ReviewCard extends Component {
  render() {
    return (
      <div>
        <div className='profiler text-start'>
            {/* <div className='profile row align-items-center'>
                <div className='col-5'><img src={profile} /></div>
                <div className='col-7 text-start'>
                    <div>Amer</div>
                    <div>Stars</div>
                </div>

            </div> */}
            <div className='profile d-inline-flex '>
                <div className=''><img className='rounded-circle' src={profile} /></div>
                <div className='text-start  align-self-center'>
                    <div><p className='mb-0'>Amer</p></div>
                    <div><p className='mb-0'>Stars</p></div>
                </div>
                
            </div>
            
            <div className='profile-content py-5 '>
                <p>
                Thanks to FCL, I am a grade 8/9 CSE student 
                in the core subjects. The lessons made me
                more comfortable with not understanding
                things the first time and being happy to ask 
                questions. This helped boost my confidence 
                in my learning exponentially.he is so proud
                and happy!
                </p>
            </div>
        </div>
      </div>
    )
  }
}

export default ReviewCard