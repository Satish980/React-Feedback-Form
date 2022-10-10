import "../App.css";

import { AiFillCheckCircle } from "react-icons/ai";

const ThankYouNote = () => {
  return (
    <div className="thankyou-note">
      <div className="thankyou-note__content">
        <AiFillCheckCircle size={77} color="#48A44C" />
        <h2 className="thankyou-heading">
          Thank you for providing the feedback
        </h2>
        <p className="thankyou-sub-heading">
          We will work towards improving your experience
        </p>
        <button className="thankyou-close-button">Close</button>
      </div>
    </div>
  );
};

export default ThankYouNote;
