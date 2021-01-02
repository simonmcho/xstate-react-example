import React from 'react'
import { Route } from 'react-router'

import Home from '../pages/Home'
import DataExample from '../pages/DataExample'
import VideoPlayer from '../pages/VideoPlayer'

const Routes = () => {
  console.log('routes!')
  return (
    <>
      <Route path="/home" component={Home} />
      <Route path="/data-example" component={DataExample} />
      <Route path="/video" component={VideoPlayer} />
    </>
  )
}
export default Routes
