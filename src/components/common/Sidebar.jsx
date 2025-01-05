// import { Link } from 'react-router-dom';
// import React from 'react'; 
// import { 
//   FaUserGraduate, 
//   FaBuilding, 
//   FaBriefcase,
//   FaUserCheck,
//   FaCalendarAlt,
//   FaClipboardList,
//   FaChartBar,
//   FaComments
// } from 'react-icons/fa';

// const menuItems = [
//   { path: '/student-registration', icon: FaUserGraduate, label: 'Student Registration' },
//   { path: '/profile-comparison', icon: FaUserCheck, label: 'Profile Comparison' },
//   { path: '/company-registration', icon: FaBuilding, label: 'Company Registration' },
//   { path: '/job-posting', icon: FaBriefcase, label: 'Job Posting' },
//   { path: '/screening', icon: FaClipboardList, label: 'Screening' },
//   { path: '/interview-management', icon: FaCalendarAlt, label: 'Interviews' },
//   { path: '/mock-tests', icon: FaClipboardList, label: 'Mock Tests' },
//   { path: '/analytics', icon: FaChartBar, label: 'Analytics' },
//   { path: '/feedback', icon: FaComments, label: 'Feedback' },
// ];

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-red-50 min-h-screen p-4">
//       <nav>
//         <ul className="space-y-2">
//           {menuItems.map((item) => (
//             <li key={item.path}>
//               <Link
//                 to={item.path}
//                 className="flex items-center space-x-3 p-3 rounded-lg text-red-800 hover:bg-red-100 transition-colors"
//               >
//                 <item.icon className="w-5 h-5" />
//                 <span>{item.label}</span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// }
import { Link } from 'react-router-dom';
import React from 'react'; 
import { 
  FaUserGraduate, 
  FaBuilding, 
  FaBriefcase,
  FaUserCheck,
  FaCalendarAlt,
  FaClipboardList,
  FaChartBar,
  FaComments
} from 'react-icons/fa';

const menuItems = [
  { path: '/student-registration', icon: FaUserGraduate, label: 'Student Registration' },
  { path: '/profile-comparison', icon: FaUserCheck, label: 'Profile Comparison' },
  { path: '/company-registration', icon: FaBuilding, label: 'Company Registration' },
  { path: '/job-posting', icon: FaBriefcase, label: 'Job Posting' },
  { path: '/screening', icon: FaClipboardList, label: 'Screening' },
  { path: '/interview-management', icon: FaCalendarAlt, label: 'Interviews' },
  { path: '/mock-tests', icon: FaClipboardList, label: 'Mock Tests' },
  { path: '/analytics', icon: FaChartBar, label: 'Analytics' },
  { path: '/feedback', icon: FaComments, label: 'Feedback' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="menu">
          {menuItems.map((item) => (
            <li key={item.path} className="menu-item">
              <Link to={item.path} className="menu-link">
                <item.icon className="icon" />
                <span className="menu-text">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
