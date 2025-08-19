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
      const person = persons.find(p => p.name.toLocaleUpperCase() === newName.toLocaleUpperCase());
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(person.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson));
          })
      }
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

  const handleRemove = (id) => {
    const person = persons.find(p => p.id === id);

    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id));
        })
        .catch(error => {
          alert(`Information of ${person.name} has already been removed from server`);
          setPersons(persons.filter(p => p.id !== id));
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
      <Persons persons={personToShow} handleRemove={handleRemove} />
    </div>
  )
}

export default App