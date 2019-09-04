import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(6).fill(0))
  let position = selected


  const setToSelected = (newSelected) => {
    setSelected(newSelected)
  }

  const setToVote = (position) => {
    const copy = [...vote]
    copy[position] += 1
    setVote(copy)

  }
  let highestVote = vote.indexOf(Math.max(...vote))
  console.log("Hightest vote", vote[highestVote])

  return (
    <div>
    <p>{props.anecdotes[selected]}</p>
    <p>has {vote[position]} votes</p>
    <Button onClick={() => setToSelected(Math.floor(Math.random() * Math.floor(6)))} text="Next anecdote" />
    <Button onClick={() => setToVote(position)} text='Vote' />
    <h1>Anecdotes with most votes</h1>
    <p>{anecdotes[highestVote]}</p>
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}> {text}</button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
