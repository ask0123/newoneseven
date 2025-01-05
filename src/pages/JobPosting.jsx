import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function JobPosting() {
  const [jobs, setJobs] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    description: '',
    required_skills: '',
    deadline: '',
    salary_range: '',
    location: '',
    job_type: 'FULL_TIME',
    is_active: true
  });

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/jobs/');
      setJobs(response.data);
    } catch (error) {
      console.error('Error loading jobs:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field ${name} changed to:`, value); // Debug log
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['company', 'title', 'description', 'required_skills', 'deadline'];
    const emptyFields = requiredFields.filter(field => !formData[field]);
    
    if (emptyFields.length > 0) {
      alert(`Please fill in all required fields: ${emptyFields.join(', ')}`);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData); // Debug log

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = new FormData();
      
      // Append all form data
      Object.keys(formData).forEach(key => {
        if (key === 'company') {
          submissionData.append(key, parseInt(formData[key]));
        } else {
          submissionData.append(key, formData[key]);
        }
      });

      console.log('Sending data to server:', Object.fromEntries(submissionData)); // Debug log

      const response = await axios.post('http://localhost:8000/api/jobs/', submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Server response:', response.data); // Debug log
      
      if (response.data) {
        alert('Job posted successfully!');
        loadJobs();
        // Reset form
        setFormData({
          company: '',
          title: '',
          description: '',
          required_skills: '',
          deadline: '',
          salary_range: '',
          location: '',
          job_type: 'FULL_TIME',
          is_active: true
        });
      }
    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);
      alert('Error creating job: ' + (error.response?.data?.detail || error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-red-800 mb-6">Job Postings</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold text-red-700 mb-4">Post New Job</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company ID*
            </label>
            <input
              type="number"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Title*
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description*
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Required Skills*
            </label>
            <textarea
              name="required_skills"
              value={formData.required_skills}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary Range
            </label>
            <input
              type="text"
              name="salary_range"
              value={formData.salary_range}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Type*
            </label>
            <select
              name="job_type"
              value={formData.job_type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            >
              <option value="FULL_TIME">Full Time</option>
              <option value="PART_TIME">Part Time</option>
              <option value="INTERNSHIP">Internship</option>
              <option value="CONTRACT">Contract</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Application Deadline*
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            {isSubmitting ? 'Posting...' : 'Post Job'}
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-red-700 mb-4">Current Job Postings</h3>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-medium text-red-600">{job.title}</h4>
              <p className="text-sm text-gray-600">Company: {job.company_name}</p>
              <p className="text-sm text-gray-600">Location: {job.location}</p>
              <p className="text-sm text-gray-600">Job Type: {job.job_type.replace('_', ' ')}</p>
              <p className="text-sm text-gray-600">Salary Range: {job.salary_range}</p>
              <p className="mt-2">{job.description}</p>
              <div className="mt-2">
                <strong className="text-sm text-gray-700">Required Skills:</strong>
                <p className="text-sm">{job.required_skills}</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Deadline: {new Date(job.deadline).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}