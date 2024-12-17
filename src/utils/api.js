import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchStudents = () => api.get('/students/');
export const createStudent = (data) => api.post('/students/', data);
export const updateStudent = (id, data) => api.put(`/students/${id}/`, data);
export const deleteStudent = (id) => api.delete(`/students/${id}/`);

export const fetchCompanies = () => api.get('/companies/');
export const createCompany = (data) => api.post('/companies/', data);
export const updateCompany = (id, data) => api.put(`/companies/${id}/`, data);
export const deleteCompany = (id) => api.delete(`/companies/${id}/`);

export const fetchJobs = () => api.get('/jobs/');
export const createJob = (data) => api.post('/jobs/', data);
export const updateJob = (id, data) => api.put(`/jobs/${id}/`, data);
export const deleteJob = (id) => api.delete(`/jobs/${id}/`);

export const fetchInterviews = () => api.get('/interviews/');
export const createInterview = (data) => api.post('/interviews/', data);
export const updateInterview = (id, data) => api.put(`/interviews/${id}/`, data);
export const deleteInterview = (id) => api.delete(`/interviews/${id}/`);

export const fetchMockTests = () => api.get('/mock-tests/');
export const createMockTest = (data) => api.post('/mock-tests/', data);
export const updateMockTest = (id, data) => api.put(`/mock-tests/${id}/`, data);
export const deleteMockTest = (id) => api.delete(`/mock-tests/${id}/`);

export const fetchFeedback = () => api.get('/feedback/');
export const createFeedback = (data) => api.post('/feedback/', data);
export const updateFeedback = (id, data) => api.put(`/feedback/${id}/`, data);
export const deleteFeedback = (id) => api.delete(`/feedback/${id}/`);