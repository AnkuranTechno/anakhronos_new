import React, { useEffect, useState } from 'react'
import "./Timer.scss"

const Timer = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')
  
    // let interval = useRef()
    let interval
    const startTimer = () => {
      // ADD THE DATE HERE FROM WHICH THE TIMER NEEDS TO START 
      const countdownDate = new Date('April 26,2023').getTime()
  
      interval = setInterval(() => {
        const now = new Date().getTime()
  
        const distance = countdownDate - now
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        if (distance < 0) {
          //stop the timer
          clearInterval(interval.current)
        } else {
          setTimerDays(days)
          setTimerHours(hours)
          setTimerMinutes(minutes)
          setTimerSeconds(seconds)
        }
      }, 1000)
    }
    useEffect(() => {
      startTimer()
      return () => {
        clearInterval(interval.current)
      }
    }, [])
  
  return (
    <div className="timerContainer " >
        <div className=" timerSec ">
          <div className="timerItem ">
            <h2 >
             Anakhronos 
            </h2>
            <p></p>
          </div>
          <div className="timerItems ">
            <section>
              <p >
                {timerDays}
              </p>
              <p >Days</p>
            </section>
            <span >:</span>
            <section>
              <p >
                {timerHours}
              </p>
              <p >Hours</p>
            </section>
            <span >:</span>
            <section>
              <p >
                {timerMinutes}
              </p>
              <p >Minutes</p>
            </section>
            <span >:</span>
            <section>
              <p >
                {timerSeconds}
              </p>
              <p >seconds</p>
            </section>
          </div>
        </div>
      </div>    

  )
}

export default Timer