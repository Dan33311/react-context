import React, { createContext } from 'react'
import Child1 from './Child1';


export const NameContext = createContext()

const App3 = ({name}) => {
  return (
    <NameContext.Provider value={name}>
      <Child1 />
    </NameContext.Provider>
  )
}

App3.defaultProps = {
  name: 'Dan'
}

export default App3;


// using `defaulProps` 
// const App3 = (data) => {
//   return (
//     <NameContext.Provider value={data}>
//       <Child1 />
//     </NameContext.Provider>
//   )
// }

// App3.defaultProps = {
//   name: 'Dan',
//   age: 37
// }