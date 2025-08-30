const Country = ({ country, onShowCountry }) => { 
  return (
    <div>
      {country.name.common}
      <button onClick={() => onShowCountry(country)}>Show</button>
    </div>
  )
}

export default Country;