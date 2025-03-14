import { useState } from "react"

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <div>{text} {value}</div>
    </div>
  )
}

const Statistics = ({ good, neutral, bad, allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </div>
    )
  }

  const all = good + neutral + bad
  const average = allClicks.reduce((acc, curr) => acc + curr)/allClicks.length
  const positive = good/all * 100

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
    </div>
  )
}

const Button = ({ onClick, text, value }) => {
  return (
    <button onClick={onClick} value={value}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat(1))
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    setAll(allClicks.concat(0))
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    setAll(allClicks.concat(-1))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good' value={good} />
      <Button onClick={handleNeutralClick} text='neutral' value={neutral} />
      <Button onClick={handleBadClick} text='bad' value={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    </div>
  )
}

export default App