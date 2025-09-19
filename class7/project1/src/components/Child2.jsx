import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../index'

function Child2() {
    const userName = useContext(MyContext)
  return (
    <div>{userName}</div>
  )
}

export default Child2