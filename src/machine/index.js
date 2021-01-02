import { Machine, assign } from 'xstate'

export const toggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
})

const allData = new Array(25).fill(0).map((_val, index) => index + 1)
const PER_PAGE = 10

export const dataMachine = Machine({
  id: 'dataMachine',
  initial: 'loading',
  context: {
    data: []
  },
  states: {
    loading: {
      invoke: { // xstate allows invoking of SERVICE when transitioning into a state
        id: 'dataLoader',
        src: (context, _event) => { // context is data in context, event is what event sent us here
          return (callback, _onEvent) => {
            // 1. cb to send events back up to parent machine, id: dataMachine. Events sent to parent are DONE_MORE, DONE_COMPLETE, FAIL
            // the events we can send are defined in loading.on object
            // 2. onEvent we can listen to other events coming from parent. EG: Maybe other actors are cancelling an axios call
            setTimeout(() => {
              const { data } = context
              const newData = allData.slice(data.length, data.length + PER_PAGE)
              const hasMore = newData.length === PER_PAGE
              console.log('sc: newData!', newData)
              if (hasMore) {
                callback({
                  type: 'DONE_MORE',
                  newData
                })
              } else {
                callback({
                  type: 'DONE_COMPLETE',
                  newData
                })
              }
            }, 1000)
          }
        }
      },
      on: {
        DONE_MORE: {
          target: 'more',
          actions: assign({ // actions are functions we want to call when 'DONE_MORE' event is captured. assign is updating data in the context
            // here, we are saying update the data property of the context (see context.data in parent machine )
            data: (context, event) => { // context is current context, event is the event being called
              return [
                ...context.data,
                ...event.newData
              ]
            }
          })
        },
        DONE_COMPLETE: {
          target: 'complete',
          actions: assign({
            data: ({ data }, { newData }) => {
              return [
                ...data,
                ...newData
              ]
            }
          })
        },
        FAIL: 'failure'
      }
    },
    more: {
      on: {
        LOAD: 'loading'
      }
    },
    complete: {
      type: 'final',
    },
    failure: {
      type: 'final',
    }
  }
})
