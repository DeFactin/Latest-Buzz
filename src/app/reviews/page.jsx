"use client"
import React, { useState } from 'react';
import reviewsData from '../contents/reviewsData';
import ReviewsContentDisplay from './reviewsContentDisplay';

export default function Reviews() {
  const [likeCounts, setLikeCounts] = useState(reviewsData.map(() => 0));
  const [visibleIndex, setVisibleIndex] = useState(null);

  const handleLikeButtonClick = (index) => {
    setLikeCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const handleContinueReadingClick = (index) => {
    setVisibleIndex(index);
    const element = document.getElementById("Start");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="Start" className="flex min-h-screen flex-col items-center justify-between p-24 mt-10">
      {visibleIndex !== null && (
        <ReviewsContentDisplay fileName={`${visibleIndex}.txt`} />
      )}

      <div className="grid-container">
        {reviewsData.map((item, index) => (
          <div key={item.id} className="grid-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img className='w-full' src={item.image} alt={item.text} />
              <div className="my-9 border border-gray-300 rounded-lg p-4 shadow-md">
                <p className="my-4 text-left leading-loose font-sans">
                  {item.text}
                </p>
                <button onClick={() => handleContinueReadingClick(index)} className="cursor-pointer hover:underline hover:text-blue-500">
                  Continue reading...
                </button>
              </div>
            </a>
            <br></br>
            <div className="flex items-center">
              <button className="ml-1 px-4 rounded-full" onClick={() => handleLikeButtonClick(index)}>
                <img className="w-10 h-10" src="https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865_1280.png" alt="Heart Icon" />
              </button>
              <p className="font-mono ml-2">{likeCounts[index]} {likeCounts[index] === 1 ? 'user liked this!' : 'users liked this!'}</p>
            </div>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}
