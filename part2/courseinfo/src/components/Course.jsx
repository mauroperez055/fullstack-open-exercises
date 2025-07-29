const Header = ({ course }) => {
  console.log(course);
  return <h2>{course.name}</h2>
} 

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <h3>total of exercises {total}</h3>
    </div>
  )
} 

const Part = ({ name, exercises }) => {
  return(
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

const Course = ({ courses }) => {
  return(
    <div>
      {courses.map(course => 
        <div key={course.id}>
          <Header course={course} />
          <Content parts={course.parts}/>
          <Total parts={course.parts} />
        </div>
      )}
    </div>
  )
}

export default Course;