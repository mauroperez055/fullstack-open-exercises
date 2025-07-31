const Person = ({ person }) => {
  console.log('debug: ', person);
  return (
    <div>{person.name}</div>
  )
}

export default Person;