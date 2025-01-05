import { useState } from 'react';
import React from 'react';
// import './ProfileComparison.css'; // Assuming CSS is in the same directory

const sampleProfiles = [
  {
    id: 1,
    name: 'Apurva Sutar',
    course: 'Computer Science',
    cgpa: 3.8,
    skills: ['JavaScript', 'React', 'Python'],
    certifications: ['AWS Certified', 'React Developer']
  },
  {
    id: 2,
    name: 'Rohini Kirdak',
    course: 'Information Technology',
    cgpa: 3.9,
    skills: ['HTML', 'CSS', 'SQL'],
    certifications: ['Frontend developer', 'Database Admin']
  }
];

export default function ProfileComparison() {
  const [selectedProfiles, setSelectedProfiles] = useState([]);

  const handleProfileSelect = (profileId) => {
    const profile = sampleProfiles.find(p => p.id === profileId);
    if (selectedProfiles.length < 2 && !selectedProfiles.includes(profile)) {
      setSelectedProfiles([...selectedProfiles, profile]);
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">Profile Comparison</h2>

      <div className="profile-selector">
        <label className="profile-label">Select Profiles to Compare (max 2):</label>
        <select
          onChange={(e) => handleProfileSelect(Number(e.target.value))}
          className="profile-dropdown"
        >
          <option value="">Select a profile</option>
          {sampleProfiles.map(profile => (
            <option key={profile.id} value={profile.id}>
              {profile.name} - {profile.course}
            </option>
          ))}
        </select>
      </div>

      <div className="profile-grid">
        {selectedProfiles.map((profile, index) => (
          <div key={index} className="profile-card">
            <h3 className="profile-name">{profile.name}</h3>
            <div className="profile-details">
              <p><span className="profile-field">Course:</span> {profile.course}</p>
              <p><span className="profile-field">CGPA:</span> {profile.cgpa}</p>
              <div>
                <span className="profile-field">Skills:</span>
                <ul className="profile-list">
                  {profile.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="profile-field">Certifications:</span>
                <ul className="profile-list">
                  {profile.certifications.map((cert, i) => (
                    <li key={i}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// CSS (inline for now - save as ProfileComparison.css)
const css = `
.profile-container {
  background-color: #f9f9f9 !important;
  padding: 20px !important;
  border-radius: 10px !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
  font-family: 'Arial', sans-serif !important;
  max-width: 800px !important;
  margin: 20px auto !important;
}

.profile-header {
  font-size: 24px !important;
  font-weight: bold !important;
  color: #2c3e50 !important;
  text-align: center !important;
  margin-bottom: 20px !important;
}

.profile-selector {
  margin-bottom: 20px !important;
}

.profile-label {
  display: block !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  margin-bottom: 8px !important;
  color: #34495e !important;
}

.profile-dropdown {
  width: 100% !important;
  padding: 10px !important;
  border: 1px solid #bdc3c7 !important;
  border-radius: 5px !important;
  font-size: 14px !important;
  color: #2c3e50 !important;
}

.profile-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
  gap: 20px !important;
}

.profile-card {
  background-color: #ffffff !important;
  padding: 20px !important;
  border: 1px solid #ecf0f1 !important;
  border-radius: 8px !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
}

.profile-name {
  font-size: 20px !important;
  font-weight: 600 !important;
  margin-bottom: 10px !important;
  color: #e74c3c !important;
}

.profile-details p {
  margin: 8px 0 !important;
  color: #34495e !important;
}

.profile-field {
  font-weight: bold !important;
  color: #2c3e50 !important;
}

.profile-list {
  list-style: disc !important;
  margin: 8px 0 0 20px !important;
  color: #7f8c8d !important;
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);
