import React, { useState } from 'react';
import './assessment_result.css';  // Assuming the compiled CSS is saved as assessment_result.css

const AssessmentResult = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    theory: '',
    practical: '',
    feedback: '',
    viva: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, theory, practical, feedback, viva } = formData;

    const total = parseFloat(theory) + parseFloat(practical) + parseFloat(feedback) + parseFloat(viva);
    const average = total / 4;
    const passOrFail = average >= 70 ? 'Pass' : 'Fail';

    const newStudent = {
      name,
      total,
      average,
      passOrFail
    };

    setStudents([...students, newStudent]);

    // Clear form
    setFormData({
      name: '',
      theory: '',
      practical: '',
      feedback: '',
      viva: ''
    });
  };

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <center>
        <form onSubmit={handleSubmit}>
          <table border="1" cellSpacing="5" style={{ backgroundColor: 'white' }}>
            <caption><b>Input Marks</b></caption>
            <thead>
              <tr>
                <th rowSpan="2">Name</th>
                <th colSpan="4">Score</th>
              </tr>
              <tr>
                <th>Theory</th>
                <th>Practical</th>
                <th>Feedback</th>
                <th>Viva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" id="name" value={formData.name} onChange={handleInputChange} required /></td>
                <td><input type="number" id="theory" value={formData.theory} onChange={handleInputChange} required /></td>
                <td><input type="number" id="practical" value={formData.practical} onChange={handleInputChange} required /></td>
                <td><input type="number" id="feedback" value={formData.feedback} onChange={handleInputChange} required /></td>
                <td><input type="number" id="viva" value={formData.viva} onChange={handleInputChange} required /></td>
              </tr>
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>
                  <button type="submit">Add To Table</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        <br />

        <table border="1" cellSpacing="5" style={{ backgroundColor: 'white' }} height="100" width="500" cellPadding="5">
          <caption><b>Student Data</b></caption>
          <thead>
            <tr>
              <th width="180">Name</th>
              <th>Total</th>
              <th>Average</th>
              <th>Pass Or Fail</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.total}</td>
                <td>{student.average}</td>
                <td style={{ color: student.passOrFail === 'Pass' ? 'green' : 'red' }}>{student.passOrFail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default AssessmentResult;
