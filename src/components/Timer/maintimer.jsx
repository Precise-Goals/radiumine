import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { buildStyles } from 'react-circular-progressbar'
import ReactSlider from 'react-slider'

const SettingsContext = React.createContext({});

function Playbutton(props) {
  return (
    <button {...props}>
      <FontAwesomeIcon icon={faPlay} />
    </button>
  )
}
function Pausebutton(props) {
  return (
    <button {...props}>
      <FontAwesomeIcon icon={faPause} />
    </button>
  )
}
function Settings() {
  const SettingsInfo = useContext(SettingsContext);
  return (
    <div className="setter">
      <label>Focus Timer: {SettingsInfo.focusMinutes} mins</label>
      <ReactSlider
        thumbClassName="thumb"
        trackClassName="track"
        className="slider"
        onChange={(newValue) => SettingsInfo.setFocusMinutes(newValue)}
        value={SettingsInfo.focusMinutes}
        min={30}
        max={240}
      />
      <label>Break Timer: {SettingsInfo.breakMinutes} mins</label>
      <ReactSlider
        thumbClassName="thumb"
        trackClassName="track"
        className="slider"
        onChange={(newValue) => SettingsInfo.setBreakMinutes(newValue)}
        value={SettingsInfo.breakMinutes}
        min={1}
        max={80}
      />
    </div>
  );
}


function Maintimer() {
  const [focusMinutes, setFocusMinutes] = useState(45)
  const [breakMinutes, setBreakMinutes] = useState(15)

  const SettingsInfo = useContext(SettingsContext)
  const [isStop, setIsStop] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [mode, setMode] = useState('focus')
  const isStopRef = useRef(isStop);
  const secondsLeftRef = useRef(secondsLeft)
  const modeRef = useRef(mode)


  const tick = useCallback(() => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }, [secondsLeftRef])


  useEffect(() => {

    secondsLeftRef.current = focusMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    function swithMode() {
      const nextMode = modeRef.current === 'focus' ? 'break' : 'focus';
      const nextSeconds = (nextMode === 'focus' ? focusMinutes : breakMinutes) * 60;
      setMode(nextMode);
      modeRef.current = nextMode;
      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    const interval = setInterval(() => {
      if (isStopRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return swithMode();
      }
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [focusMinutes, breakMinutes, tick]);

  const totalSeconds = mode === 'focus'
    ? SettingsInfo.focusMinutes * 60
    : SettingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds);
  const minutes = Math.floor(secondsLeft / 60)
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;


  return (
    <div className='timewrapper'>
      <div className="overllayz">
        <div className="Timer">
          <SettingsContext.Provider value={{
            focusMinutes,
            breakMinutes,
            setFocusMinutes,
            setBreakMinutes,
          }}>
            <CircularProgressbar value={percentage} text={secondsLeft <= 0 ? '00:00' : `${minutes}:${seconds}`}
              styles={buildStyles({
                trailColor: `var(--outcolor)`,
                pathColor: `var(--elmcolors)`,
                textColor: `var(--elmcolors)`,
              })} />
          </SettingsContext.Provider>
        </div>
        <div className="buttons">
          {isStop
            ? <Playbutton onClick={()=>{setIsStop(false); isStopRef.current = false}}/>
            : <Pausebutton onClick={()=>{setIsStop(true); isStopRef.current = true}}/>}
        </div>
        <div className="settings">
          <SettingsContext.Provider value={{
            focusMinutes,
            breakMinutes,
            setFocusMinutes,
            setBreakMinutes,
          }}>
            <Settings />
          </SettingsContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Maintimer
