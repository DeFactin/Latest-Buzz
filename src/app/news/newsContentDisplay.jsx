import React, { useState, useEffect } from 'react';

const NewsContentDisplay = ({ fileName }) => {
  const [newsContent, setNewsContent] = useState('');

  useEffect(() => {
    const fetchNewsContent = async () => {
      try {
        const response = await fetch(`/text_news/${fileName}`);
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
        <br></br>
        <div className="flex items-center justify-center mt-10">
          <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBYCvlDiLAQTqtteDpi9TsfeQHuOhu4jHS5ViC_fbAnYTSRi5FDj4a.41UY9xk6q.0tkZvERnL86ZnWcU71Sg8qc-&format=source" alt="News Emoji" className="w-20 h-20 mr-6" />
          <h1 className="font-mono text-3xl font-bold text-center text-gray-700">Stay Updated with the Latest News</h1>
        </div>
        <p className="p-10 text-left leading-loose font-sans text-gray-800">{newsContent}</p>
      </div>
      <div>
      </div>
    </div>
  );
};

export default NewsContentDisplay;
