import { useState } from 'react'

const Anecdotes = ({anecdotes, selected, votes}) => {
  return (
    <div>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes 
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}


function App() {
  const anecdotes = [
    'If it hurst, do it more often.',
    'Adding manpower to a late software project majes is later!',
    'The first 90 percent of the code account for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good progammers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debbugin is twice has hard has writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood test when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(8));

  const handleAnecdote = () => {
    let anecdoteRandom;
    do{
      anecdoteRandom = Math.floor(Math.random() * anecdotes.length);
    } while (anecdoteRandom === selected);
    setSelected(anecdoteRandom);
    console.log(anecdoteRandom);
  }

  const handleVotes = () => {
    const copy = [...votes];
    copy[selected] +=1;
    console.log('copy actualizado', copy);
    setVotes(copy);
  }

  return (
    <div>
      <Anecdotes anecdotes={anecdotes} selected={selected} votes={votes}/>
      <Button handleClick={handleVotes} text='vote'/>
      <Button handleClick={handleAnecdote} text='next anecdote'/>
    </div>
  )
}

export default App
