import Country from './Country';

const Countries = ({ countries }) => { 
  console.log('Countries to show: ', countries.length);

  if (countries.length > 10) { 
    return <div>Too many matches, specify another filter</div>
  }

  if (countries.length > 1) { 
    console.log('entra al segundo if');
    return (
      <div>
        {countries.map(country => 
          <Country key={country.name.common} country={country} /> 
        )}
      </div>
    )
  }

  if (countries.length === 1) { 
    const country = countries[0];
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages).map(language => 
            <li key={language}>{language}</li>  
          )}
        </ul>
        <img 
          src={country.flags.png} 
          alt={`flag of ${country.name.common}`} 
          width='150' 
        />
      </div>
    )
  }
}

export default Countries;