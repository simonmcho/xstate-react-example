import { Machine, assign } from 'xstate'

export const videoMachine = Machine({
  id: 'videoMachine',
  initial: 'loading',
  context: {
    video: null,
    duration: 0,
    elapsed: 0
  },
  states: {
    loading: {
      on: {
        LOADED: {
          target: 'ready',
          actions: assign({
            video: (_context, event) => event.video,
            duration: (_context, event) => event.video.duration
          })
        },
        FAIL: 'failure'
      }
    },
    ready: {
      initial: 'paused',
      states: {
        paused: {
          on: {
            PLAY: {
              target: 'playing',
              actions: ['playVideo'] // will trigger functions in this array
            }
          }
        },
        playing: {
          on: {
            PAUSE: {
              target: 'paused',
              actions: ['pauseVideo']
            },
            END: {
              target: 'ended',
              actions: ['resetVideo']
            },
            TIMING: {
              target: 'playing',
              actions: assign({
                elapsed: (context, _event) => {
                  return context.video.currentTime
                }
              })
            }
          }
        },
        ended: {
          on: {
            PLAY: {
              target: 'playing',
              actions: ['restartVideo']
            }
          }
        }
      }
    },
    failure: { type: 'FINAL' }
  }
})
