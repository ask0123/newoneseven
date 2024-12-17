import { useState } from 'react';

const sampleProfiles = [
  {
    id: 1,
    name: 'John Doe',
    course: 'Computer Science',
    cgpa: 3.8,
    skills: ['JavaScript', 'React', 'Python'],
    certifications: ['AWS Certified', 'React Developer']
  },
  {
    id: 2,
    name: 'Jane Smith',
    course: 'Information Technology',
    cgpa: 3.9,
    skills: ['Java', 'Spring Boot', 'SQL'],
    certifications: ['Java Developer', 'Database Admin']
  }
];

export default function ProfileComparison() {
  const [selectedProfiles, setSelectedProfiles] = useState([]);

  const handleProfileSelect = (profileId) => {
    const profile = sampleProfiles.find(p => p.id === profileId);
    if (selectedProfiles.length < 2) {
      setSelectedProfiles([...selectedProfiles, profile]);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-red-800 mb-6">Profile Comparison</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Profiles to Compare (max 2):
        </label>
        <select
          onChange={(e) => handleProfileSelect(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select a profile</option>
          {sampleProfiles.map(profile => (
            <option key={profile.id} value={profile.id}>
              {profile.name} - {profile.course}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {selectedProfiles.map((profile, index) => (
          <div key={index} className="border p-4 rounded-lg bg-orange-50">
            <h3 className="text-lg font-semibold mb-4">{profile.name}</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Course:</span> {profile.course}</p>
              <p><span className="font-medium">CGPA:</span> {profile.cgpa}</p>
              <div>
                <span className="font-medium">Skills:</span>
                <ul className="list-disc list-inside ml-4">
                  {profile.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-medium">Certifications:</span>
                <ul className="list-disc list-inside ml-4">
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