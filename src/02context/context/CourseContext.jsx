import { createContext } from 'react'

export const CourseContext = createContext()

const courseData = {
  title: 'React',
  price: 100
}

export const CourseProvider = ({ children }) => {
  return(
    <CourseContext.Provider value={courseData}>
      { children }
    </CourseContext.Provider>
  )
}