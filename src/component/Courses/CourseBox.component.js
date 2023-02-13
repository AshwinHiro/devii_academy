import React, { Component } from 'react'
import Youtube from "../../assets/imgs/YouTube.svg";
import "./Courses.css"
export class CourseBox extends Component {
  render() {
    return (

        <div className='border border-info-subtle background-transparent py-5 px-4'>
            <div className=''>
                <img src={Youtube} />
            </div>
        </div>
    )
  }
}

export default CourseBox