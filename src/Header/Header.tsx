import React from 'react';
import { ButtonMedium, LinkButton } from '../common/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../mainStore/user/user.store';
import { useNavigate } from 'react-router-dom';

const adminTabs = [
  { id: 1, label: 'dashboard' , path: "/admin" },
  { id: 2, label: 'all doctors' , path: "/admin/doctor" },
  { id: 3, label: 'all patients' , path: "/admin/patient" },
];


const userTabs = [
  { id: 1, label: 'Profile' , path: "/user" },
  { id: 2, label: 'My Appointment' , path: "/user/myappointment" },
  { id: 3, label: 'Book Appointment' , path: "/user/bookAppointment" },
];


const doctorTabs = [
  { id: 1, label: 'Profile' , path: "/doctor" },
  { id: 2, label: 'My Appointment' , path: "/doctor/myappointment" },
  { id: 3, label: 'Set Appointment' , path: "/doctor/setappointment" },
];

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData } = useSelector((state: any) => state.user);

  const logout = () => {
      dispatch(saveUser({}))
      navigate('/')
  }

 const mainTabs = userData.type === 'user' 
 ? userTabs
  : userData.type === 'admin' 
  ? adminTabs
   : doctorTabs;

  console.log('userData', userData);
  return (
    <header className="bg-sky-600 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">My App</h1>
        <nav>
          {mainTabs.map(tab => (
            <LinkButton 
            key={tab.id}
             label={tab.label}
              bgColor='bg-blue-700'
               path={tab.path} />
          ))}
        </nav>
        <ButtonMedium label='logout' bgColor='bg-red-500' btFun={logout}/>
      </div>
    </header>
  );
};

export default Header;
