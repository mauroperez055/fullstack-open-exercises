const Person = ({ person, handleRemove }) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={() => handleRemove(person.id)}>delete</button>
    </div>
  );
};

export default Person;
