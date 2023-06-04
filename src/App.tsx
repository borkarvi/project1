import React, { useEffect } from 'react';
import './App.css';
import MainComponent from './MainComponent/MainComponent';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import DoctorList from './components/Admin/DoctorsList/DoctorsList';
import PatientList from './components/Admin/PatientsList/PatientsList';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './mainStore/user/user.action';

function App() {

  const dispatch: any = useDispatch()
  const { userData } = useSelector((state: any) => state.user);

  console.log('userData', userData)

  const router = createBrowserRouter([
    {
      path: '/',

      element: <MainComponent />,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/doctor',
          element: <DoctorList />
        },
        {
          path: '/patient',
          element: <PatientList />
        }
      ]
    }

  ]);

  useEffect(() => {
    dispatch(loginUser({
      "email": "admin@h.com",
      "password": "Pass@123"
    })
    )

  }, []);

  return (
    <div>
      <RouterProvider router={router} />

    </div>
  );
}
export default App;
