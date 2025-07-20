import { useState } from "react";

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}> 
      {text}
    </button>
  )
}

const Statistic = ({ text, value }) => {
  return <div>{text} {value}</div>
}

const All = ({ good, neutral, bad}) => {
  const total = good + neutral + bad;

  return (
    <Statistic text='all' value={total} />
  )
}

const Average = ({ points, good, neutral, bad }) => {
  console.log('puntaje acumulado', points);
  const total = good + neutral + bad;
  const average = ( total === 0 ? 0 : (points/total));

  return (
    <div>average {(average)}</div>
  )
}

const Positive = ({ good, neutral, bad}) => {
  const positive = good === 0 ? 0 : (good * 100 / (good + neutral + bad));

  return (
    <p>positive {positive}%</p>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [points, setPoints] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
    setPoints(points + 1);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleClickBad = () => {
    setBad(bad + 1);
    setPoints(points - 1);
  }
  
  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text='good' />
      <Button handleClick={handleClickNeutral} text='neutral' />
      <Button handleClick={handleClickBad} text='bad' />
      <h1>statistics</h1>
      <Statistic text='good' value={good}/> 
      <Statistic text='neutral' value={neutral}/> 
      <Statistic text='bad' value={bad}/> 
      <All good={good} neutral={neutral} bad={bad} />
      <Average points={points} good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </div>
  )

}

export default App
