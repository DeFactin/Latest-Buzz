"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LoginWindow from './loginpop';
import SignupWindow from './signuppop';
import './styles/vanilla.css';

function Navigation() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
  }

  const closeLogin = () => {
    setIsLoginOpen(false);
  }

  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openSignup = () => {
    setIsSignupOpen(true);
  }

  const closeSignup = () => {
    setIsSignupOpen(false);
  }


  const newLocal = "text-3xl text-white font-mono font-bold";
  return (
    <div>
      <nav id="navigations" className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-between items-center px-4 sm:px-8 z-10 mb-8">
        <div className="logo ml-16">
          <Image src="/images/poro-poro.png" alt="Logo" width={95} height={95} />
        </div>
        <div>
          <p className={newLocal}>Latest Buzz</p>
        </div>
        <div className="w-2/5">
          <ul className="flex justify-around">
          <li>
            <Link href="/" className="text-xl text-white font-mono font-bold"><p>Home</p></Link>
          </li>
          <li>
            <Link href="/news" className="text-xl text-white font-mono font-bold"><p>News</p></Link>
          </li>
          <li>
            <Link href="/reviews" className="text-xl text-white font-mono font-bold"><p>Reviews</p></Link>
          </li>
          <li>
            <button onClick={openLogin} style={{ cursor: 'pointer' }} className="font-bold text-xl text-white font-mono">
              <p>Log In</p>
            </button>
          </li>
          <li>
            <button onClick={openSignup} style={{ cursor: 'pointer' }} className="text-xl text-white font-mono font-bold">
              <p>Sign Up</p>
            </button>
          </li>
        </ul>
        </div>
        
      </nav>
      {isLoginOpen && <LoginWindow closeLogin={closeLogin} />}
      {isSignupOpen && <SignupWindow closeSignup={closeSignup} />}
    </div>
  );
}

export default Navigation;
