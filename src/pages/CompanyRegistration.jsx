import { useState } from 'react';
import InputField from '../components/forms/InputField';

export default function CompanyRegistration() {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    website: '',
    contactPerson: '',
    email: '',
    phone: '',
    eligibilityCriteria: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-red-800 mb-6">Company Registration</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <InputField
          label="Industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
        />
        <InputField
          label="Website"
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <InputField
          label="Contact Person"
          name="contactPerson"
          value={formData.contactPerson}
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
          label="Phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Eligibility Criteria
          </label>
          <textarea
            name="eligibilityCriteria"
            value={formData.eligibilityCriteria}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
        >
          Register Company
        </button>
      </form>
    </div>
  );
}