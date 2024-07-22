import React from 'react'
import { useAppSelector } from './redux/hooks'

const Component = () => {
    const count = useAppSelector(s => s.counter);
  return (
    <div>
      <h1>Component : {count}</h1>
    </div>
  )
}

export default Component
