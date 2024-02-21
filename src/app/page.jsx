"use client"
import gridData from './contents/gridData';
import './styles/vanilla.css';
import React, { useState, useEffect } from 'react';
import fanartData from './contents/fanartData';

export default function Home() {
  const [fanartContent, setFanartContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/text_news/fanartHome.txt');
        const content = await response.text();
        setFanartContent(content);
      } catch (error) {
        console.error('Error fetching fanart content:', error);
      }
    };

    fetchData();
  }, []);

  const [likeCounts, setLikeCounts] = useState(fanartData.map(() => 0));

  const handleLikeButtonClick = (index) => {
    setLikeCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  return (


    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>

        <p className="text-xl text-center font-bold text-gray-500 my-8 font-mono">
          Level up your dreams!
        </p>

        <div className="grid-container">
          {gridData.map(item => (
            <div key={item.id} className="grid-item">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={item.text} />
                <div className="my-9 border border-gray-300 rounded-lg p-4 shadow-md">
                  <p className="my-4 text-left leading-loose font-sans">
                    {item.text}
                  </p></div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="fanart-content-container my-6">
          <p className="font-bold text-l text-white font-mono">{fanartContent}</p>
        </div>
        <br></br>
        <div className="grid-container">
          {fanartData.map((item, index) => (
            <div key={item.id} className="border border-gray-300 rounded-lg p-4 shadow-md bg-gray-100 mb-4">
              <img src={item.image} alt={item.text} className="mt-2" />
              <br></br>
              <p className="font-sans mt-2">{item.text}</p>
              <br></br>
              <br></br>
              <div className="flex items-center">
                <button className="ml-1 px-4 rounded-full" onClick={() => handleLikeButtonClick(index)}>
                  <img className="w-10 h-10" src="https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865_1280.png" alt="Heart Icon" />
                </button>
                <p className="font-mono ml-2">{likeCounts[index]} {likeCounts[index] === 1 ? 'user liked this!' : 'users liked this!'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main >
  )
}
