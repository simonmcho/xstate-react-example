import React from 'react'
import pt from 'prop-types'

import { minutes, seconds } from '../../utils/timerUtils'

const Timer = ({ elapsed, duration }) => {
  return (
    <div>
      <span>
        {minutes(elapsed)}:{seconds(elapsed)} of {minutes(duration)}:{seconds(duration)}
      </span>
    </div>
  )
}

Timer.propTypes = {
  onClick: pt.func.isRequired
}

export default Timer
