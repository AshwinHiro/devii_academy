import React, { Component } from 'react'
import CourseBox from './CourseBox.component'

export class Courses extends Component {
  render() {
    return (
      <div>
        <div className='container-lg pt-5'>
            <div className='py-5'>
                <h3>Top Essential Courses</h3>
            </div>

            <div className='d-flex justify-content-end'>
                <a>View All</a>
            </div>

            <div className='d-flex flex-nowrap gap-4 py-5'>
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
            </div>

        </div>
      </div>
    )
  }
}

export default Courses