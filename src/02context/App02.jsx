import React from "react";

import { CourseProvider } from "./context/CourseContext";
import Course from "./components/Course";


// TODO: add by comments the step by step
const App02 = () => {

  return (
    <>
      <h1>App 02 working</h1>
      <CourseProvider>
        <Course />
      </CourseProvider>
    </>
  )
}

export default App02;