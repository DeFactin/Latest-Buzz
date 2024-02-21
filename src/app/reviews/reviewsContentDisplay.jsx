import React, { useState, useEffect } from 'react';

const ReviewsContentDisplay = ({ fileName }) => {
  const [newsContent, setNewsContent] = useState('');
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim() !== '') {
      setComments((prevComments) => ({
        ...prevComments,
        [fileName]: [...(prevComments[fileName] || []), newComment],
      }));
      setNewComment('');
    }
  };

  useEffect(() => {
    const fetchNewsContent = async () => {
      try {
        const response = await fetch(`/text_reviews/${fileName}`);
        const content = await response.text();
        setNewsContent(content);
      } catch (error) {
        console.error(`Error fetching news content for ${fileName}:`, error);
        setNewsContent('Error fetching content');
      }
    };

    fetchNewsContent();
  }, [fileName]);

  return (
    <div >
      <div className="border border-blue-500 rounded-lg p-15 shadow-md bg-gradient-to-r from-blue-200 to-blue-200 my-20">
        <div className="flex items-center justify-center mt-10">
          <img src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-mono/512/Thinking-Face-icon.png" alt="Thinking Emoji" className="w-10 h-10 mr-6" />
          <h1 className="font-mono text-3xl font-bold text-center text-gray-700">Discover What Others Are Saying</h1>
        </div>
        <p className="p-10 text-left leading-loose font-sans text-gray-800">{newsContent}</p>
        <div className="mt-4 mx-8 flex items-center">
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder=" Add a comment..."
            className="flex-grow border p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handlePostComment}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Post
          </button>
        </div>
        <div className="mt-4 mx-8">
          {(comments[fileName] || []).map((comment, index) => (
            <div key={index} className="flex items-center text-gray-800 bg-gray-100 p-2 mb-6 rounded-md">
              <img src="/images/comment_icon.png" alt="Icon" className="mr-5" />
              <p>{comment}</p>
            </div>
          ))}
          <div className="flex items-center text-gray-800 bg-gray-100 p-2 mb-6 rounded-md">
            <img src="/images/comment_icon.png" alt="Icon" className="mr-5" />
            <p>Intresting review, hmmmmmm</p>
          </div>
          <div className="flex items-center text-gray-800 bg-gray-100 p-2 mb-6 rounded-md">
            <img src="/images/comment_icon.png" alt="Icon" className="mr-5" />
            <p>henlo frens</p>
          </div>
        </div>



      </div>
      <div>
      </div>
    </div>
  );
};

export default ReviewsContentDisplay;
