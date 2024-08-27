import React, { useState } from 'react';
import axios from 'axios';

const Display = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);

  const searchCountries = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${query}`);
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCountries();
  };

  return (
    <div>
      <center>
      <h1>Country Search</h1>
      <form onSubmit={handleSubmit} className='topnav'>
        <input
          type="text"
          placeholder="Enter country name..."
          value={query}
          onChange={handleInputChange}
        />
      <button type="submit"><i class="fa fa-search">Submit</i></button>
      </form>
      </center>
      <div>
        {countries.map((country) => (
          <div key={country.name.common} className='pad'>
            <h2>{country.name.common}</h2>
            <table>
              <tr>
                <td><b>Official Name:</b></td><td> {country.name.official}</td>
              </tr>
              <tr>
                <td><b>Capital:</b></td><td> {country.capital}</td>
              </tr>
              <tr>
                <td><b>Region:</b></td><td> {country.region}</td>
              </tr>
              <tr>
                <td><b>Sub-Region:</b></td><td> {country.subregion}</td>
              </tr>
              <tr>
                <td><b>Continent:</b></td><td> {country.continents}</td>
              </tr>
              <tr>
                <td><b>Time Zones:</b></td><td> {country.timezones}</td>
              </tr>
              <tr>
                <td><b>Start Of Week:</b></td><td> {country.startOfWeek}</td>
              </tr>
              <tr>
                {/* <td><b>Currency:</b></td><td> {country.currencies} </td> */}
              </tr>
            </table>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`}/>
            <p>{country.flags.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
// import React, { useState } from 'react';
// import axios from 'axios';

// const Display = () => {
//   const [query, setQuery] = useState('');
//   const [countries, setCountries] = useState([]);

//   const searchCountries = async () => {
//     try {
//       const response = await axios.get(`https://restcountries.com/v3.1/name/${query}`);
//       setCountries(response.data);
//     } catch (error) {
//       console.error('Error fetching country data:', error);
//     }
//   };

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     searchCountries();
//   };

//   return (
//     <div>
//       <center>
//         <h1>Country Search</h1>
//         <form onSubmit={handleSubmit} className="topnav">
//           <input
//             type="text"
//             placeholder="Enter country name..."
//             value={query}
//             onChange={handleInputChange}
//           />
//           <button type="submit">
//             <i className="fa fa-search"></i> Search
//           </button>
//         </form>
//       </center>
//       <div>
//         {countries.map((country) => (
//           <div key={country.name.common} className="pad">
//             <h2>{country.name.common}</h2>
//             <table>
//               <tbody>
//                 <tr>
//                   <td><b>Official Name:</b></td><td>{country.name.official}</td>
//                 </tr>
//                 <tr>
//                   <td><b>Capital:</b></td><td>{country.capital ? country.capital.join(', ') : 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td><b>Region:</b></td><td>{country.region}</td>
//                 </tr>
//                 <tr>
//                   <td><b>Sub-Region:</b></td><td>{country.subregion || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td><b>Continent:</b></td><td>{country.continents ? country.continents.join(', ') : 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td><b>Time Zones:</b></td><td>{country.timezones.join(', ')}</td>
//                 </tr>
//                 <tr>
//                   <td><b>Start Of Week:</b></td><td>{country.startOfWeek || 'N/A'}</td>
//                 </tr>
//                 {/* Add currency details if needed */}
//               </tbody>
//             </table>
//             <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
//             <p>{country.flags.alt}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Display;
