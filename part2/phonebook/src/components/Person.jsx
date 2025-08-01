const Person = ({ person }) => {
  console.log('debug: ', person);
  return (
    <div>{person.name} {person.number}</div>
  )
}

export default Person;