import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2">Contact Me</button>

      <div className="mt-4 flex justify-center">

        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white mx-2 flex items-center">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png" alt="Facebook Icon" className="w-10 h-10 mr-1" />
        </a>



        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png" alt="Instagram Icon" className="w-10 h-10 mr-1" />
        </a>

        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174863.png" alt="Pinterest Icon" className="w-10 h-10 mr-1" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
