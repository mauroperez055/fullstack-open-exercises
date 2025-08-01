import { useState } from 'react'
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: ' ' }
  ]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  
  const addPerson = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name.toLocaleUpperCase() === newName.toLocaleUpperCase())) {
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      setNewNumber('');
    } else {
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    }
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Person key={person.name} person={person} />
      )}
    </div>
  )
}

export default App