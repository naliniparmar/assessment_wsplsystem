import React, { useState, useEffect } from 'react';
import './CandidatesList.css'; // Ensure this CSS file is included
import backgroundImage from './assest/bg_img.jpg';
import Navbar from './navbar'; // Correct the file extension if necessary
import Footer from './footer';

const CandidatesList = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('All');

  useEffect(() => {
    fetch('/api/candidates') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        setCandidates(data);
        setFilteredCandidates(data);
      })
      .catch(error => console.error('Error fetching candidates:', error));
  }, []);

  useEffect(() => {
    if (selectedLocation === 'All') {
      setFilteredCandidates(candidates);
    } else {
      setFilteredCandidates(
        candidates.filter(candidate => candidate.centre === selectedLocation)
      );
    }
  }, [selectedLocation, candidates]);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className='NavContainer'>
      <Navbar />
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
        <div className="candidates-list-container">
          <h1>List of Candidates</h1>
          <div className="filter-container">
            <label htmlFor="location-filter">Filter by Location:</label>
            <select
              id="location-filter"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option value="All">All</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Coimbatore">Coimbatore</option>
            </select>
          </div>
          <div className="result-table-container">
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
                {filteredCandidates.length > 0 ? (
                  filteredCandidates.map((candidate, index) => (
                    <tr key={index}>
                      <td>{candidate.rank}</td>
                      <td>{candidate.name}</td>
                      <td>{candidate.centre}</td>
                      <td>{candidate.designation}</td>
                      <td>{candidate.result}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No candidates available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CandidatesList;
