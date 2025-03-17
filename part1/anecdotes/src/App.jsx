import { useState } from 'react'

const Anecdote = ({ text }) => {  
  return (
    <div>
      {text}
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', 
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 
    'Premature optimization is the root of all evil.', 
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', 
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', 
    'The only way to go fast, is to go well.'
  ]

  const [selected, getSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [highest, setHighest] = useState(0)
  const [topAnecdote, setTopAnecdote] = useState('')

  const handleNextClick = () => {
    getSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    // increment votes for the selected anecdote
    const copyOfVotes = [...votes]
    copyOfVotes[selected] += 1
    setVotes(copyOfVotes)
    
    // set top number of votes in state
    const topVotes = copyOfVotes.toSorted().slice(-1)
    setHighest(topVotes)

    // set the most popular anecdote in state
    const topVotesIndex = copyOfVotes.indexOf(Number(topVotes))
    setTopAnecdote(anecdotes[topVotesIndex])
  }

  console.log(votes)

  return (
    <div>
      <h2>Anecdote of the day</h2>
        <Anecdote text={anecdotes[selected]}/>
        has {votes[selected]} votes
        <br />
        <Button onClick={handleVote} text='vote'/>
        <Button onClick={handleNextClick} text='next anecdote' />
      <h2>Anecdote with most votes</h2>
        <Anecdote text={topAnecdote}/>
        has {highest} votes
    </div>
  )
}

export default App
