import React, { Component } from 'react'
import ReviewCard from './ReviewCard.component'
import "./Review.css";
export class Review extends Component {
  render() {
    return (
      <div>
        <div className='container-lg'>
            <div>
                <h3>Student Review</h3>
            </div>

            <div className='d-flex justify-content-around py-5'>
                <ReviewCard />
                <ReviewCard />
            </div>

            <div className='pb-5'>
                <button className='transparentButton'>More Reviews</button>
            </div>
        </div>
      </div>
    )
  }
}

export default Review