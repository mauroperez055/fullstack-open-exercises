import { useState } from "react";

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}> 
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistic = ({ good, neutral, bad, points}) => {
  console.log(points);
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (points/all);
  const positive = good === 0 ? 0 : (good * 100)/all;

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={all}/>
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positive' value={positive + ' %'}/>
    </div>
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
      <Statistic good={good} neutral={neutral} bad={bad} points={points} />
    </div>
  )

}

export default App
