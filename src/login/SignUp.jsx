import React, { useState } from 'react';

function SignUp() {
  const [userInfo, setUserInfo] = useState({ username: '', email: '', password: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Save user info to localStorage
    localStorage.setItem('userData', JSON.stringify(userInfo));
  
    // Clear the form fields
    setUserInfo({ username: '', email: '', password: '' });
  
    // Display a success message
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={userInfo.username}
              onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
              placeholder="Username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={userInfo.password}
              onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-green-100 p-4 rounded-md mt-4">
          <p className="text-green-600 font-bold">Confirmation:</p>
          <p>You have successfully signed up.</p>
          <p className="mt-4 text-blue-600">Thank you for joining!</p>
          <p className="mt-4 text-blue-600">We've sent a confirmation email to the address you provided. Please check your inbox to complete the sign-up process. </p>
        </div>
      )}
    </div>
  );
}

export default SignUp;
