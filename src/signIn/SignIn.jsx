import React, { useState } from 'react';

function SignIn() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
      // Check if the email and password match
      if (userData.email === loginInfo.email && userData.password === loginInfo.password) {
        setMessage('Sign-in successful!');
      } else {
        setMessage('Invalid email or password. Please try again.');
      }
    } else {
      setMessage('No user data found. Please sign up first.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <input
          type="email"
          value={loginInfo.email}
          onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="password"
          value={loginInfo.password}
          onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300"
        >
          Sign In
        </button>
        <p className="text-blue-500">{message}</p>
      </form>
    </div>
  );
}

export default SignIn;
