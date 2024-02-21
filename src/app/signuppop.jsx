import React from 'react';

function Signuppop({ closeSignup }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <form className="space-y-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700"><b>Pseudonym: </b></label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label htmlFor="email" className="block text-sm font-medium text-gray-700"><b>Email</b></label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label htmlFor="psw" className="block text-sm font-medium text-gray-700"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <div className="mb-2 flex items-center">
                        <label className="mr-2" htmlFor="gender">Gender:</label>
                        <select className="border p-2 w-80" name="gender"> {/* Adjusted width to 2/3 of the container */}
                            <option>Choose a gender</option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other</option>
                        </select>
                    </div>


                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Sign Up</button>
                    <button type="button" onClick={closeSignup} className="w-full bg-gray-300 text-gray-700 p-2 rounded-md">Close</button>
                </form>
            </div>
        </div>
    );
}

export default Signuppop;
