import React, { useState } from 'react';
import axios from 'axios'; // Add this import
import InputField from '../components/forms/InputField';

export default function CompanyRegistration() {
    const [formData, setFormData] = useState({
        companyName: '',
        industry: '',
        website: '',
        contact_person: '',
        email: '',
        phone: '',
        eligibilityCriteria: ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        success: false,
        error: null
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
        
        try {
            const submissionData = {
                name: formData.companyName,
                industry: formData.industry,
                website: formData.website || '', 
                contact_person: formData.contact_person,
                email: formData.email,
                phone: formData.phone,
                eligibility_criteria: formData.eligibilityCriteria || ''
            };

            console.log('Submission Data:', submissionData);

            const response = await axios.post('http://localhost:8000/api/companies/', submissionData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Reset form and show success message
            setFormData({
                companyName: '',
                industry: '',
                website: '',
                contact_person: '',
                email: '',
                phone: '',
                eligibilityCriteria: ''
            });

            setSubmitStatus({
                success: true,
                error: null
            });

            console.log('Company registered successfully:', response.data);
        } catch (error) {
            console.error('Full Error:', error.response ? error.response.data : error);
            
            setSubmitStatus({
                success: false,
                error: error.response ? error.response.data : 'An error occurred'
            });
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-red-800 mb-6">Company Registration</h2>
            
            {submitStatus.success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    Company registered successfully!
                </div>
            )}
            
            {submitStatus.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    Error: {JSON.stringify(submitStatus.error)}
                </div>
            )}
            
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
                    name="contact_person"
                    value={formData.contact_person}
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