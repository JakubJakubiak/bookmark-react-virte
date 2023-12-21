import illustration from "./images/illustration-hero.svg";
import './syles/Bookmark.sass';

const Bookmark = () => {
  return (
    <div>
    <div className="hero">
      <div className="boxText">
        <h1>A Simple Bookmark Manager</h1>
        <p>
        Aclean and simple interface to organize your favourite 
        websites. Open a new browser tab and see your sites load 
        instantly. Try it for free.
        </p>
        <a href="" className="buttonChrome">Get it on Chrome </a>
        <a href="" className="buttonFirefox ">Get it on Firefox </a>
      </div>
      <div className="together">
      <div className="background"/>
      <img src={illustration} className="illustration" alt="illustration" />
      </div>   
    </div>

    <div className="hero ">
    <div className="textCenter">
      <h1> Features </h1>
          <p>
          Our aim is to make it quick and easy for you to access your 
          favourite websites. Your bookmarks sync between your devices 
          ‘so you can access them on the go.
          </p>
          </div> 
      </div> 
    </div>


  );
};

export default Bookmark;