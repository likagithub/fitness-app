import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const CountdownTimer = () => {
  return (
      <CountdownCircleTimer
          isPlaying
          duration={30}
          colors={[
          ['#1D2A73']
          ]}
          trailColor={[
              ['#9CA6B4']
              ]}
          strokeLinecap={[
              ['square']
              ]}
        >
          {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
  )
}

export default CountdownTimer;