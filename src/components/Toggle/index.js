import { useMachine } from '@xstate/react'
import { toggleMachine } from '../../machine'

const Toggle = () => {
  const [current, send, service] = useMachine(toggleMachine)

  const handleClick = () => {
    send('TOGGLE')
  }
  console.log('sc: current', current)
  console.log('sc: service', service)
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
      >
        Click me!
      </button>
      <div>
        <p>Machine state below:</p>
        <p>{current.matches('inactive') ? 'Off' : 'On'}</p>
      </div>
    </div>
  )
}

export default Toggle
