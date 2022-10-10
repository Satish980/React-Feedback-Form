import { useState } from "react";
import "../App.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { AiOutlineInfoCircle } from "react-icons/ai";

const FGForm = ({ customerFeedbackData, setCustomerFeedbackData }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    qualityOfService: "",
    qualityOfBeverage: "",
    qualityOfCleanliness: "",
    diningExperience: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    qualityOfService: "",
    qualityOfBeverage: "",
    qualityOfCleanliness: "",
    diningExperience: "",
  });
  const onValidate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = "Please enter the value for the above field";
    } else if (values.name.length > 15 && values.name.length < 3) {
      errors.name = "Must be 15 characters or 4 characters";
    }
    if (!values.email) {
      errors.email = "Please enter the value for the above field";
    }
    if (
      values.email &&
      !values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Please enter the value for the above field";
    }
    if (!values.qualityOfService) {
      errors.qualityOfService = "Please choose the value for the above field";
    }
    if (!values.qualityOfBeverage) {
      errors.qualityOfBeverage = "Please choose the value for the above field";
    }
    if (!values.qualityOfCleanliness) {
      errors.qualityOfCleanliness =
        "Please choose the value for the above field";
    }
    if (!values.diningExperience) {
      errors.diningExperience = "Please choose the value for the above field";
    }
    return errors;
  };
  const handleSubmit = event => {
    setFormErrors(onValidate(formValues));
    event.preventDefault();
    console.log(formErrors);
    if (!Object.keys(formErrors).length && Object.keys(formValues).length) {
      let uniqueId =
        new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
      let newCustomerFeedbackData = {
        id: uniqueId,
        data: formValues,
      };
      setCustomerFeedbackData([
        ...customerFeedbackData,
        newCustomerFeedbackData,
      ]);
      // setFormValues({
      //   name: "",
      //   email: "",
      //   phoneNumber: "",
      //   qualityOfService: "",
      //   qualityOfBeverage: "",
      //   qualityOfCleanliness: "",
      //   diningExperience: "",
      // });
    }
  };
  const formBodyStyle =
    Object.keys(formErrors).length > 0 && formErrors.constructor === Object
      ? { paddingBottom: "40px" }
      : { paddingBottom: "21px" };

  return (
    <div className="feedback-body">
      <div className="aromatic-header">
        <p className="aromatic-header-text">Aromatic bar</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="aromatic-form-body" style={formBodyStyle}>
          <div className="input-form">
            <div className="form-group">
              <label htmlFor="name">
                Customer Name<span className="mandatory-field">*</span>
              </label>
              <input
                id="name"
                name="name"
                placeholder="E.g. jon snow"
                className="form-control"
                value={formValues.name}
                onChange={event => {
                  setFormValues({
                    ...formValues,
                    name: event.target.value,
                  });
                  setFormErrors({
                    ...formErrors,
                    name: "",
                  });
                }}
              />
              {formErrors.name ? (
                <span className="error">
                  <p>
                    <AiOutlineInfoCircle size={13} /> {formErrors.name}
                  </p>
                </span>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email<span className="mandatory-field">*</span>
              </label>
              <input
                id="email"
                name="email"
                placeholder="E.g. abc@gmail.com"
                className="form-control"
                value={formValues.email}
                onChange={event => {
                  setFormValues({
                    ...formValues,
                    email: event.target.value,
                  });
                  setFormErrors({
                    ...formErrors,
                    email: "",
                  });
                }}
              />
              {formErrors.email ? (
                <span className="error">
                  <p>
                    <AiOutlineInfoCircle size={13} /> {formErrors.email}
                  </p>
                </span>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="feedback">
                Phone<span className="mandatory-field">*</span>
              </label>
              <PhoneInput
                placeholder="9999999999"
                value={formValues.phoneNumber}
                onChange={event => {
                  setFormValues({
                    ...formValues,
                    phoneNumber: event,
                  });
                  setFormErrors({
                    ...formErrors,
                    phoneNumber: "",
                  });
                }}
                className="phone-input"
                defaultCountry="IN"
                name="phoneNumber"
              />
              {formErrors.phoneNumber ? (
                <span className="error">
                  <p>
                    <AiOutlineInfoCircle size={13} /> {formErrors.phoneNumber}
                  </p>
                </span>
              ) : null}
            </div>
          </div>
          <div className="options-class">
            <div className="form-group-checkbox">
              <label>
                Please rate the quality of the service you received from your
                host.<span className="mandatory-field">*</span>
              </label>
              <div className="radio-group">
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Excellent"
                      checked={formValues.qualityOfService === "Excellent"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          qualityOfService: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          qualityOfService: "",
                        });
                      }}
                      name="qualityOfService"
                    />{" "}
                    Excellent
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      name="qualityOfService"
                      value="Good"
                      checked={formValues.qualityOfService === "Good"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          qualityOfService: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          qualityOfService: "",
                        });
                      }}
                    />{" "}
                    Good
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Fair"
                      name="qualityOfService"
                      checked={formValues.qualityOfService === "Fair"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          qualityOfService: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          qualityOfService: "",
                        });
                      }}
                    />{" "}
                    Fair
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Bad"
                      name="qualityOfService"
                      checked={formValues.qualityOfService === "Bad"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          qualityOfService: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          qualityOfService: "",
                        });
                      }}
                    />{" "}
                    Bad
                  </label>
                </div>
              </div>
              {formErrors.qualityOfService ? (
                <span className="error">
                  <p>
                    <AiOutlineInfoCircle size={13} />{" "}
                    {formErrors.qualityOfService}
                  </p>
                </span>
              ) : null}
            </div>
            <div className="form-group-checkbox">
              <label>
                Please rate the quality of your beverage.
                <span className="mandatory-field">*</span>
              </label>
              <div className="radio-group">
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Excellent"
                      name="qualityOfBeverage"
                      checked={formValues.qualityOfBeverage === "Excellent"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          qualityOfBeverage: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          qualityOfBeverage: "",
                        });
                      }}
                    />{" "}
                    Excellent
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Good"
                      name="qualityOfBeverage"
                      checked={formValues.qualityOfBeverage === "Good"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          qualityOfBeverage: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          qualityOfBeverage: "",
                        });
                      }}
                    />{" "}
                    Good
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Fair"
                      name="qualityOfBeverage"
                      checked={formValues.qualityOfBeverage === "Fair"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          qualityOfBeverage: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          qualityOfBeverage: "",
                        });
                      }}
                    />{" "}
                    Fair
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Bad"
                      name="qualityOfBeverage"
                      checked={formValues.qualityOfBeverage === "Bad"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          qualityOfBeverage: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          qualityOfBeverage: "",
                        });
                      }}
                    />{" "}
                    Bad
                  </label>
                </div>
              </div>
              {formErrors.qualityOfBeverage ? (
                <span className="error">
                  <p>
                    <AiOutlineInfoCircle size={13} />{" "}
                    {formErrors.qualityOfBeverage}
                  </p>
                </span>
              ) : null}
            </div>
            <div className="form-group-checkbox">
              <label>
                Was our restaurant clean?
                <span className="mandatory-field">*</span>
              </label>
              <div className="radio-group">
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Excellent"
                      name="qualityOfCleanliness"
                      checked={formValues.qualityOfCleanliness === "Excellent"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          qualityOfCleanliness: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          qualityOfCleanliness: "",
                        });
                      }}
                    />{" "}
                    Excellent
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Good"
                      name="qualityOfCleanliness"
                      checked={formValues.qualityOfCleanliness === "Good"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          qualityOfCleanliness: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          qualityOfCleanliness: "",
                        });
                      }}
                    />{" "}
                    Good
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Fair"
                      name="qualityOfCleanliness"
                      checked={formValues.qualityOfCleanliness === "Fair"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          qualityOfCleanliness: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          qualityOfCleanliness: "",
                        });
                      }}
                    />{" "}
                    Fair
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Bad"
                      name="qualityOfCleanliness"
                      checked={formValues.qualityOfCleanliness === "Bad"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          qualityOfCleanliness: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          qualityOfCleanliness: "",
                        });
                      }}
                    />{" "}
                    Bad
                  </label>
                </div>
              </div>
              {formErrors.qualityOfCleanliness ? (
                <span className="error">
                  <p>
                    <AiOutlineInfoCircle size={13} />{" "}
                    {formErrors.qualityOfCleanliness}
                  </p>
                </span>
              ) : null}
            </div>
            <div className="form-group-checkbox">
              <label>
                Please rate your overall dining experience.
                <span className="mandatory-field">*</span>
              </label>
              <div className="radio-group">
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Excellent"
                      name="diningExperience"
                      checked={formValues.diningExperience === "Excellent"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          diningExperience: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          diningExperience: "",
                        });
                      }}
                    />{" "}
                    Excellent
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Good"
                      name="diningExperience"
                      checked={formValues.diningExperience === "Good"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          diningExperience: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          diningExperience: "",
                        });
                      }}
                    />{" "}
                    Good
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Fair"
                      name="diningExperience"
                      checked={formValues.diningExperience === "Fair"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          diningExperience: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          diningExperience: "",
                        });
                      }}
                    />{" "}
                    Fair
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="checkbox"
                      value="Bad"
                      name="diningExperience"
                      checked={formValues.diningExperience === "Bad"}
                      onChange={e => {
                        setFormValues({
                          ...formValues,
                          diningExperience: e.target.value,
                        });
                        setFormErrors({
                          ...formErrors,
                          diningExperience: "",
                        });
                      }}
                    />{" "}
                    Bad
                  </label>
                </div>
              </div>
              {formErrors.diningExperience ? (
                <span className="error">
                  <p>
                    <AiOutlineInfoCircle size={13} />{" "}
                    {formErrors.diningExperience}
                  </p>
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="aromatic-footer">
          <div className="btnWrapper">
            <button type="submit" className="btnPrimary" onClick={handleSubmit}>
              Submit Review
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FGForm;
