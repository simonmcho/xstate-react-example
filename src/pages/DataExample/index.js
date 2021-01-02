import { useMachine } from '@xstate/react'

import { dataMachine } from '../../machine'
import DataVisualization from '../../components/DataVisualization'

const DataExample = () => {
  const [current, send] = useMachine(dataMachine)
  const { data } = current.context
  const isLoading = current.matches('loading')
  const isMore = current.matches('more')
  const sendLoad = () => {
    send('LOAD')
  }
  return (
    <div>
      Data Example
      <DataVisualization
        data={data}
        isLoading={isLoading}
        isMore={isMore}
        sendLoad={sendLoad}
      />
    </div>
  )
}

export default DataExample
