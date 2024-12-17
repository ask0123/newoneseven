import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import StudentRegistration from './pages/StudentRegistration';
import ProfileComparison from './pages/ProfileComparison';
import CompanyRegistration from './pages/CompanyRegistration';
import JobPosting from './pages/JobPosting';
import Screening from './pages/Screening';
import InterviewManagement from './pages/InterviewManagement';
import MockTests from './pages/MockTests';
import Analytics from './pages/Analytics';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-orange-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/student-registration" element={<StudentRegistration />} />
              <Route path="/profile-comparison" element={<ProfileComparison />} />
              <Route path="/company-registration" element={<CompanyRegistration />} />
              <Route path="/job-posting" element={<JobPosting />} />
              <Route path="/screening" element={<Screening />} />
              <Route path="/interview-management" element={<InterviewManagement />} />
              <Route path="/mock-tests" element={<MockTests />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}