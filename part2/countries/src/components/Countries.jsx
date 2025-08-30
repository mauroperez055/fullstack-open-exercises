import Country from './Country';

const Countries = ({ countries, selectedCountry, onShowCountry }) => { 
  console.log('Countries to show: ', countries.length);

  if(selectedCountry) {
    return (
      <div>
        <h1>{selectedCountry.name.common}</h1>
        <p>capital {selectedCountry.capital}</p>
        <p>area {selectedCountry.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(selectedCountry.languages).map(language => 
            <li key={language}>{language}</li>  
          )}
        </ul>
        <img 
          src={selectedCountry.flags.png} 
          alt={`flag of ${selectedCountry.name.common}`} 
          width='150'
        />
      </div>
    )
  }

  if (countries.length > 10) { 
    return <div>Too many matches, specify another filter</div>
  }

  if (countries.length > 1) { 
    console.log('entra al segundo if');
    return (
      <div>
        {countries.map(country => 
          <Country 
            key={country.name.common} 
            country={country} 
            onShowCountry={onShowCountry}
          /> 
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