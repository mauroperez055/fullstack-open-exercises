import { useState, useEffect } from 'react'
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
  }, []);
  console.log('render', persons.length, ' persons');
  
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
        personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
        })
    }
  }

  const handleFilter = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const personToShow = persons.filter(person => 
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm 
        onSubmit={addPerson} 
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}  
      />
      <h2>Numbers</h2>
      <Persons persons={personToShow} />
    </div>
  )
}

export default App