import React from 'react'
import pt from 'prop-types'

import { percentage } from '../../utils/timerUtils'

const ElapsedBar = ({ elapsed, duration }) => {
  return (
    <div>
      <div style={{ width: `${percentage(duration, elapsed)}%` }} />
    </div>
  )
}

ElapsedBar.propTypes = {
  onClick: pt.func.isRequired
}

export default ElapsedBar
