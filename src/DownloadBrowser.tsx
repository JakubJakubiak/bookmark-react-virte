import chrome from "./images/logo-chrome.svg";
import firefox from "./images/logo-firefox.svg";
import opera from "./images/logo-opera.svg";
import BrowserDots from "./images/bg-dots.svg";

import './syles/DownloadBrowser.sass';
// 
const DownloadBrowser = () => {
  const buttonsData = [
    {
      illustration: chrome,
      text: "Add to Chrome",
      title: " Minimum version 62",
      textBooton: "Add & Install Extension",
    },
    {
      illustration: firefox,
      text: "Add to Firefox",
      title: " Minimum version 55",
      textBooton: "Add & Install Extension",
    },
    {
      illustration: opera,
      text: "Add to Opera",
      title: " Minimum version 46",
      textBooton: "Add & Install Extension",
    }
  ];


  return (
    <div>
      <div className="textCenter">
    <h1> Download the extension 
    </h1>
        <p>
        We've got more browsers in the pipeline. Please do let us know if 
        you've got a favourite you'd like us to prioritize.
        </p>
        </div> 
      <div className="boxBrowseAll">
        {buttonsData.map((data, index) => (
          <div key={index} className="boxBrowse">
            <div className="">
              <div className="background" />
              <img
                src={data.illustration}
                className="BrowserImage"
                alt="illustration"
              />
              <div className="boxTextAndImages">
              <h1>{data.text}</h1>
              <p>{data.title}</p>
            </div>
              <img
                src={BrowserDots}
                className="dotsIllustration"
                alt="dots illustration"
              />
                <a href="#" className="buttonBlueBrowser"> 
                {data.textBooton}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadBrowser;
