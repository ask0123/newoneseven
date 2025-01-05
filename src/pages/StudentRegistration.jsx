import { useState } from 'react';
import InputField from '../components/forms/InputField';
import React from 'react';
import axios from 'axios';

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    course: '',
    skills: '',
    grades: '',  // Added grades field
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Create FormData object to handle file upload
      const submitData = new FormData();
      
      // Append all form fields to FormData
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null) {
          submitData.append(key, formData[key]);
        }
      });

      console.log('Submitting form data:', {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        course: formData.course,
        skills: formData.skills,
        grades: formData.grades,
        resume: formData.resume?.name
      });

      const response = await axios.post(
        'http://localhost:8000/api/students/',
        submitData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Response:', response.data);
      
      if (response.data) {
        alert('Registration successful!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          contact: '',
          course: '',
          skills: '',
          grades: '',
          resume: null
        });
      }
    } catch (err) {
      console.error('Registration error:', err.response?.data);
      setError(
        err.response?.data?.error || 
        Object.entries(err.response?.data || {})
          .map(([key, value]) => `${key}: ${value}`)
          .join(', ') || 
        'Registration failed. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-red-800 mb-6">Student Registration</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          label="Contact Number"
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <InputField
          label="Course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        />
        {/* Added Grades field */}
        <InputField
          label="Grades"
          name="grades"
          value={formData.grades}
          onChange={handleChange}
          required
          placeholder="Enter your grades (e.g., CGPA or percentage)"
        />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Skills
          </label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
            rows="3"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Resume
          </label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="w-full"
            accept=".pdf,.doc,.docx"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors disabled:bg-red-400"
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}