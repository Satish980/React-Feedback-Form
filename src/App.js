import { useState, useEffect } from "react";
import "./App.css";
import { FGData, FGForm, ThankYouNote, EmptyList } from "./components";
import { reactLocalStorage } from "reactjs-localstorage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [customerFeedbackData, setCustomerFeedbackData] = useState([]);
  useEffect(() => {
    let feedbackData = reactLocalStorage.getObject("customerFeedbackData");
    setCustomerFeedbackData(feedbackData);
  }, []);

  useEffect(() => {
    if (Object.keys(customerFeedbackData).length)
      reactLocalStorage.setObject("customerFeedbackData", customerFeedbackData);
  }, [customerFeedbackData]);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <FGForm
                customerFeedbackData={customerFeedbackData}
                setCustomerFeedbackData={setCustomerFeedbackData}
              />
            }
          />

          <Route
            exact
            path="/feedback-data"
            element={
              <FGData
                customerFeedbackData={customerFeedbackData}
                setCustomerFeedbackData={setCustomerFeedbackData}
              />
            }
          />

          <Route exact path="/submit-feedback" element={<ThankYouNote />} />

          <Route exact path="/empty-list" element={<EmptyList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;