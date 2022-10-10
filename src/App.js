import { useState, useEffect } from "react";
import "./App.css";
import { FGData, FGForm, ThankYouNote } from "./components";
import { reactLocalStorage } from "reactjs-localstorage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [showThankYouNote, setShowThankYouNote] = useState(false);
  const [customerFeedbackData, setCustomerFeedbackData] = useState([]);
  useEffect(() => {
    let feedbackData = reactLocalStorage.getObject("customerFeedbackData");
    setCustomerFeedbackData(feedbackData);
  }, []);

  useEffect(() => {
    if (customerFeedbackData.length > 1)
      reactLocalStorage.setObject("customerFeedbackData", customerFeedbackData);
  }, [customerFeedbackData]);

  return (
    <div className="app">
      <FGForm
        customerFeedbackData={customerFeedbackData}
        setCustomerFeedbackData={setCustomerFeedbackData}
      />
      {/* <ThankYouNote /> */}
      <FGData
        customerFeedbackData={customerFeedbackData}
        setCustomerFeedbackData={setCustomerFeedbackData}
      />
    </div>
  );
}

export default App;
