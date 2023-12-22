// AppAndFaqItem.js

import  { useState } from "react";

import  ArrowIcon   from "./images/icon-arrow.svg";


import "./syles/AskedQuestions.sass"; 

const FaqItem = ({ question, answer }: { question:string, answer:string }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleQuestion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <div className="faq-question" onClick={toggleQuestion}>
        <p>{question}</p>
        {isActive ? (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
            className={`arrow ${isActive ? "up" : "down"}`}
          >
            <path fill="none" stroke="#FA5757" stroke-width="3" d="M1 1l8 8 8-8" />
          </svg>
        ) : (
          <img className={`arrow ${isActive ? "up" : "down"}`} src={ArrowIcon} alt="Arrow" />
        )}
      </div>
      <div className="faq-answer">{answer}</div>
    </div>
  
  )

};

const AskedQuestions = () => {
  const faqData = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Dictum varius duis at consectetur. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Lobortis scelerisque fermentum dui faucibus. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Sed blandit libero volutpat sed cras ornare. Nibh mauris cursus mattis molestie a iaculis at erat. Varius duis at consectetur lorem donec massa sapien faucibus et. Nec ultrices dui sapien eget mi proin sed libero enim. Eu tincidunt tortor aliquam nulla facilisi. Quisque sagittis purus sit amet volutpat consequat. Vel pretium lectus quam id leo in vitae.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Nulla facilisi cras fermentum odio eu feugiat. Nisl pretium fusce id velit ut tortor pretium viverra. Amet massa vitae tortor condimentum lacinia. Purus gravida quis blandit turpis cursus in hac. ",
    },
  ];

  return (
    <>
    <div>
        <div className="textCenter">
        <h1> Frequently Asked Questions</h1>
        <p>
        Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
        </p>
        </div>
            {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
            
  
    </div>
    <div className="textCenterButton">More Info</div>
    </>
  );
};

export default AskedQuestions;
