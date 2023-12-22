import React, { useState, useEffect } from "react";
import illustration1 from "./images/illustration-features-tab-1.svg";
import illustration2 from "./images/illustration-features-tab-2.svg";
import illustration3 from "./images/illustration-features-tab-3.svg";
import closeIcon from './images/icon-close.svg';
import './syles/BookmarkClick.sass';

const BookmarkClick = () => {
  const buttonsData = [
    {
      textBooton: "Simple Bookmarking",
      illustration: illustration1,
      title: "Bookmark in one click ",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites",
    },
    {
      textBooton: "Speedy Searching",
      illustration: illustration2,
      title: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks",
    },
    {
      textBooton: "Easy Sharing",
      illustration: illustration3,
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayPopup, setDisplayPopup] = useState(false);

  useEffect(() => {

    const delayTime = 30000; 

    const timerId = setTimeout(() => {
      setDisplayPopup(true);
    }, delayTime);

    return () => clearTimeout(timerId);
  }, []);

  const handleButtonClick = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const currentButtonData = buttonsData[currentIndex];


  const handleCloseButtonClick = () => {
    setDisplayPopup(false);
  };

  return (
    <div>
      <div className="boxTexts">
        {buttonsData.map((_data, index) => (
          <div
            key={index}
            className={currentIndex === index ? "buttonMenuClick_active" : "buttonMenuClick"}
            onClick={() => handleButtonClick(index)}
          >
            {_data.textBooton}
          </div>
        ))}
      </div>
      <div className="heros" >
        <div className="togetherimageBox">
          <div className="backgroundImageBox" />
          <img
            src={currentButtonData.illustration}
            className="imageIllustration"
            alt="illustration"
          />
        </div>
        <div className="boxTextAndButton">
          <h1>{currentButtonData.title}</h1>
          <p>{currentButtonData.text}</p>
          <a href="" className="buttonBlue">
            More Info
          </a>
        </div>
      </div>

      <div className={`popup ${displayPopup ? 'active' : ''}`}>
        
        <img
          src={buttonsData[1].illustration}
          className="popupImage"
          alt="illustration"
        />
        <div>
        <button className="closeButton" onClick={handleCloseButtonClick}>
          <img src={closeIcon} alt="Close" />
      
        <h2>{buttonsData[1].title}</h2>
        <p>{buttonsData[1].text}</p>
        </button>
        </div>
      </div>
    </div>

  );
};

export default BookmarkClick;
