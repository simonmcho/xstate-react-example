import React from 'react'
import { Route } from 'react-router'

import Home from '../pages/Home'
import Switch from '../pages/Switch'
import DataExample from '../pages/DataExample'
import VideoPlayer from '../pages/VideoPlayer'

const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route exact path="/switch" component={Switch} />
      <Route exact path="/data-example" component={DataExample} />
      <Route exact path="/video" component={VideoPlayer} />
    </>
  )
}
export default Routes
