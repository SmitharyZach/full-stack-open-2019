import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => {
  return (
    <>
    <h2>{text}</h2>
    </>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({ text, counter}) => {
  console.log({ text, counter})
  if (counter === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return  (
      <p>{text} {counter}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [mathClicks, setMath] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks +1)
    setGood(good +1)
    setMath(mathClicks.concat(1))
  }

  const handleNeutralClick = () => {
    setAll(allClicks +1)
    setNeutral(neutral +1)
    setMath(mathClicks.concat(0))
  }

  const handleBadClick = () => {
    setAll(allClicks +1)
    setBad(bad +1)
    setMath(mathClicks.concat(-1))
  }

  const average = () => {
    if (mathClicks.length === 0) {
      return 0
    }
      return mathClicks.reduce((previous, current) => current += previous, 0) / mathClicks.length
  }

  const percentagePositive = () => {

    if (mathClicks.length === 0) {
      return 0
    }

    let p = []
    for(let i = 0; i <= mathClicks.length; i++)
      if (mathClicks[i] === 1) {
        p.push(mathClicks[i])
      }
    return   (p.length / mathClicks.length) * 100 + "%"
  }

  return (
    <div>
    <Header text={"Give Feedback"}/>
    <Button handleClick={handleGoodClick} text={"Good"}/>
    <Button handleClick={handleNeutralClick} text={"Neutral"}/>
    <Button handleClick={handleBadClick} text={"Bad"}/>
    <Header text={'Statistics'}/>
    <Statistics text={"Good"} counter={good}/>
    <Statistics text={"Neutral"} counter={neutral}/>
    <Statistics text={"Bad"} counter={bad}/>
    <Statistics text={"All"} counter={allClicks.length}/>
    <Statistics text={"Average"} counter={average()}/>
    <Statistics text={"Percentage"} counter={percentagePositive()}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
