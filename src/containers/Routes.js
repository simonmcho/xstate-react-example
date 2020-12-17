import React from 'react'
import { Route } from 'react-router'
import App from './App'
import Home from '../pages/Home'
import DataExample from '../pages/DataExample'

const Routes = () => {
  console.log('routes!')
  return (
    <>
      <Route path="/home" component={Home} />
      <Route path="/data-example" component={DataExample} />
    </>
  )
}
export default Routes
