import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../mainStore/user/user-action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const Navigate = useNavigate()
 const dispatch: any = useDispatch()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Perform login logic here
        console.log(email, password)
        const userInfo = {
            email,
            password

        }
        dispatch(
            loginUser( userInfo ,Navigate  )
          )
      
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-1/3 p-8 bg-white rounded shadow-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded py-2 px-3 	focus:outline-none focus:border-blue-500"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;