import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { buildStyles } from 'react-circular-progressbar'
import ReactSlider from 'react-slider'
import aud from '../../assets/aud.mp3'

const SettingsContext = React.createContext({});

function Playbutton(props) {
  return (
    <button {...props} aria-label="Play">
      <FontAwesomeIcon icon={faPlay} />
    </button>
  )
}

function Pausebutton(props) {
  return (
    <button {...props} aria-label="Pause">
      <FontAwesomeIcon icon={faPause} />
    </button>
  )
}
function Settings() {
  const SettingsInfo = useContext(SettingsContext);
  return (
    <div className="setter">
      <label htmlFor="focusTimer">Focus Timer: {SettingsInfo.focusMinutes} mins</label>
      <ReactSlider
        thumbClassName="thumb"
        trackClassName="track"
        className="slider"
        id="focusTimer"
        onChange={(newValue) => SettingsInfo.setFocusMinutes(newValue)}
        value={SettingsInfo.focusMinutes}
        min={30}
        max={180}
      />
      <label htmlFor="breakTimer">Break Timer: {SettingsInfo.breakMinutes} mins</label>
      <ReactSlider
        thumbClassName="thumb"
        trackClassName="track"
        className="slider"
        id="breakTimer"
        onChange={(newValue) => SettingsInfo.setBreakMinutes(newValue)}
        value={SettingsInfo.breakMinutes}
        min={15}
        max={60}
      />
    </div>
  );
}


function Maintimer() {
  const [focusMinutes, setFocusMinutes] = useState(60)
  const [breakMinutes, setBreakMinutes] = useState(20)
  const [isStop, setIsStop] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [mode, setMode] = useState('focus')
  const isStopRef = useRef(isStop);
  const secondsLeftRef = useRef(secondsLeft)
  const [playAudio, setPlayAudio] = useState(false);
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


  useEffect(() => {
    if (modeRef.current !== mode) {
      setPlayAudio(true);
    }
  }, [mode]);

  const totalSeconds = mode === 'focus'
    ? focusMinutes * 60
    : breakMinutes * 60;

  const percentage = totalSeconds > 0
    ? Math.round(secondsLeft/ totalSeconds * 100)
    : 0;

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;
  console.log(percentage);



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
        <audio src={aud} autoPlay={playAudio}></audio>
        <div className="buttons">
          {isStop
            ? <Playbutton onClick={() => { setIsStop(false); isStopRef.current = false }} />
            : <Pausebutton onClick={() => { setIsStop(true); isStopRef.current = true }} />}
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
