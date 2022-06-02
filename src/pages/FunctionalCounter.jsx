import React from 'react'
import { Button } from '../components/Button';

export const FunctionalCounter = (props) => {
  const {count, inc, dec} = props; //desctructuring
  return (
    <div>
      <h2 data-testid='header'>Counter App</h2>
      <div className='box'>
          <h1 data-testid='counter'>{count}</h1>
        </div>
        <div className='boxCenter'>
          {/* Mengirim props ke Button, dan menambah props baru */}
          {/* Mengirim props ke Button, dan menambah props baru */}
          <Button idTest='increment-test' act={inc} label="increment"/>
          <Button act={dec} label="decrement"/>
        </div>
    </div>
  )
}
