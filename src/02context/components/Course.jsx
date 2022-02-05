import { useContext } from 'react'
import { CourseContext } from '../context/CourseContext'


const Course = () => {

  const { title, price } = useContext(CourseContext)

  return (
    <>
      <h1>Our Courses</h1>
      <p>Title: {title}</p>
      <p>Price: {price}</p>
    </>
  )
}

export default Course