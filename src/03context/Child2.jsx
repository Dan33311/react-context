import { useContext } from 'react'
import { NameContext } from './App3'


const Child2 = () => {

  const name = useContext(NameContext)

  return (
    <h1>{name} from Child2 component</h1>
  )
}

export default Child2