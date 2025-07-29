const Total = ({ parts }) => {
  console.log(parts);
  //const total =+ parts.map(part => part.exercises);
  return (
    <div>
      <h3>total of exercises {parts.map(part => part.exercises)}</h3>
    </div>
  )
} 

export default Total;