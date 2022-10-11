import "../App.css";
import { Link } from "react-router-dom";
import { AiOutlineFileSearch } from "react-icons/ai";

const EmptyList = () => {
  return (
    <div className="thankyou-note">
      <div className="thankyou-note__content">
        <AiOutlineFileSearch size={77} color="#48A44C" />
        <h2 className="thankyou-heading">No data found</h2>
        <p className="thankyou-sub-heading">
          Please give feedback by clicking below button
        </p>
        <Link to="/">
          <button className="add-feedback-button">Add Feedback</button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyList;
