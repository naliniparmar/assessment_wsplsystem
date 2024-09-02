import React, { useState, useEffect } from 'react';
import './resulttable.css';
import logo from './assest/logo.png';
import backgroundImage from './assest/bg_img.jpg';
import Navbar from './navbar.jsx'

const ResultTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('/api/results') // Replace with your backend API endpoint
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of result objects
        const formattedData = data.map(item => ({
          rank: item.rank,
          name: item.name,
          centre: item.centre,
          designation: item.designation,
          result: item.result,
          errors: {} // Initialize errors object
        }));
        setRows(formattedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) {
      error = `${name} is required`;
    } else if (name === 'rank' && isNaN(value)) {
      error = 'Rank must be a number';
    }
    return error;
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    const error = validateField(name, value);
    newRows[index][name] = value;
    newRows[index].errors[name] = error;
    setRows(newRows);
  };

  return (<div className='NavContainer'><Navbar/>
    <div 
      className="bg-img" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        minHeight: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        overflowY: 'auto'
      }}
    >
      <div className="result-table-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>MPS Annual Examination Mumbai Result 2023-24</h1>
        <table>
          <thead>
            <tr>
              <th>RANK</th>
              <th>NAME</th>
              <th>CENTRE</th>
              <th>DESIGNATION</th>
              <th>RESULT</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="rank"
                    value={row.rank}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  {row.errors.rank && <span className="error-text">{row.errors.rank}</span>}
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={row.name}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  {row.errors.name && <span className="error-text">{row.errors.name}</span>}
                </td>
                <td>
                  <input
                    type="text"
                    name="centre"
                    value={row.centre}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  {row.errors.centre && <span className="error-text">{row.errors.centre}</span>}
                </td>
                <td>
                  <input
                    type="text"
                    name="designation"
                    value={row.designation}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  {row.errors.designation && <span className="error-text">{row.errors.designation}</span>}
                </td>
                <td>
                  <input
                    type="text"
                    name="result"
                    value={row.result}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  {row.errors.result && <span className="error-text">{row.errors.result}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></div>
  );
};

export default ResultTable;
