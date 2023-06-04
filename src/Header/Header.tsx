import React from 'react';
import { ButtonMedium, LinkButton } from '../common/Buttons';


const tabs = [
  { id: 1, label: 'dashboard' , path: "/" },
  { id: 2, label: 'all doctors' , path: "/doctor" },
  { id: 3, label: 'all patients' , path: "/patient" },
];

const Header: React.FC = () => {
  return (
    <header className="bg-sky-600 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">My App</h1>
        <nav>
          {tabs.map(tab => (
            <LinkButton 
            key={tab.id}
             label={tab.label}
              bgColor='bg-blue-700'
               path={tab.path} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
