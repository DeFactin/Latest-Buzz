import React from 'react';

function Loginpop({ closeLogin }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <form className="space-y-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="psw" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Log In</button>
          <button type="button" onClick={closeLogin} className="w-full bg-gray-300 text-gray-700 p-2 rounded-md">Close</button>
        </form>
      </div>
    </div>
  );
}

export default Loginpop;
