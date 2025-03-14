import { useState } from "react"

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
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </div>
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
      <button onClick={handleGoodClick} good={good}>good</button>
      <button onClick={handleNeutralClick} neutral={neutral}>neutral</button>
      <button onClick={handleBadClick} bad={bad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    </div>
  )
}

export default App