const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header course = {course} />
      <Content 
        part1 = {part1} 
        part2 = {part2}  
        part3 = {part3}  
      />
      <Total total = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

const Header = (props) => {
  console.log('1', props);
  return <p>{props.course}</p>
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props);

  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
} 

export default App