import { useState } from 'react';
import InputField from '../components/forms/InputField';

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    course: '',
    skills: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-red-800 mb-6">Student Registration</h2>
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
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
}