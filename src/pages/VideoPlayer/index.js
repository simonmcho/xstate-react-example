import React, { useRef } from 'react'
import { useMachine } from '@xstate/react'

import { videoMachine } from '../../machine/videoMachine'

import Buttons from '../../components/Buttons'
import ElapsedBar from '../../components/ElapsedBar'
import Timer from '../../components/Timer'

import videoSrc from './assets/MDM_ScreenRecording_1.mp4'

const playVideo = ({ video }, _event) => {
  video.play()
}

const pauseVideo = ({ video }, _event) => {
  video.pause()
}

const resetVideo = ({ video }, _event) => {
  video.currentTime = 0
}

const restartVideo = ({ video }, _event) => {
  video.currentTime = 0
  video.play()
}

const VideoPlayer = () => {
  const ref = useRef(null)
  const [current, send] = useMachine(
    videoMachine,
    {
      actions: {
        playVideo,
        pauseVideo,
        resetVideo,
        restartVideo
      }
    }
  )
  const { duration, elapsed } = current.context
  const isPlaying = current.matches({ ready: 'playing' })

  const handleBtnClick = () => {
    if (isPlaying) {
      send('PAUSE')
    } else {
      send('PLAY')
    }
  }

  console.log('sc: current value!', current.value)

  return (
    <div>
      <video
        ref={ref}
        style={{ width: '50%', margin: '0 auto' }}
        onCanPlay={() => {
          send(
            'LOADED',
            {
              video: ref.current
            }
          )
        }}
        onError={() => {
          send('FAIL')
        }}
        onTimeUpdate={() => {
          send('TIMING')
        }}
        onEnded={() => {
          send('END')
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div>
        <ElapsedBar elapsed={elapsed} duration={duration} />
        <Buttons btnText={isPlaying ? 'Pause' : 'Play'} onClick={handleBtnClick} />
        <Timer elapsed={elapsed} duration={duration} />
      </div>
    </div>
  )
}

export default VideoPlayer
