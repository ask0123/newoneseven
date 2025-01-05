import { Link } from 'react-router-dom';
import React from 'react'; 

export default function Navbar() {
  return (
    <nav className="bg-red-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-red-800">
              Placepro 
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}