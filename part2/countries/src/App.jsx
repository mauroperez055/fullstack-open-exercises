import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import countriesService from './services/countries';
import Countries from './components/Countries';

export default function App() {
  const [newFilter, setNewFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect (() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries);
      })
  }, []);
  console.log('render', countries.length, ' countries');

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  
  const countriesToShow = newFilter === '' 
    ? [] 
    : countries.filter(country => 
        country.name.common.toLowerCase().includes(newFilter.toLowerCase())
      ) 
  console.log('coincidences: ', countriesToShow.length);

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Countries countries={countriesToShow} />
    </div>
  )
}
