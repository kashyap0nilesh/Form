import React, { useState } from 'react'; 
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    course: '',
    twelfthPercentage: '',
    tenthPercentage: '',
    graduationPercentage: '',
    hobby: '',
    workingExperience: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use the correct URL endpoint `/api/students`
      const response = await axios.post('http://localhost:5000/api/students', formData);
      console.log(response.data);
      setFormData({
        name: '',
        mobile: '',
        address: '',
        course: '',
        twelfthPercentage: '',
        tenthPercentage: '',
        graduationPercentage: '',
        hobby: '',
        workingExperience: ''
      });
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Mobile Number:</label>
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>Course:</label>
        <input type="text" name="course" value={formData.course} onChange={handleChange} required />
      </div>
      <div>
        <label>12th Percentage:</label>
        <input type="number" name="twelfthPercentage" value={formData.twelfthPercentage} onChange={handleChange} required />
      </div>
      <div>
        <label>10th Percentage:</label>
        <input type="number" name="tenthPercentage" value={formData.tenthPercentage} onChange={handleChange} required />
      </div>
      <div>
        <label>Graduation Percentage:</label>
        <input type="number" name="graduationPercentage" value={formData.graduationPercentage} onChange={handleChange} required />
      </div>
      <div>
        <label>Hobby:</label>
        <input type="text" name="hobby" value={formData.hobby} onChange={handleChange} required />
      </div>
      <div>
        <label>Working Experience:</label>
        <input type="text" name="workingExperience" value={formData.workingExperience} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
