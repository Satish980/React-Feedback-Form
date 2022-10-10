import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import { IoMdRefresh } from "react-icons/io";

import "../App.css";

const FGData = ({ customerFeedbackData, setCustomerFeedbackData }) => {
  console.log("customerFeedbackData", customerFeedbackData);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  let data = customerFeedbackData;
  // const [data, setData] = useState(customerFeedbackData);
  console.log("data", data);
  const [searchTerm, setSearchTerm] = useState("");
  const handleDeleteData = e => {
    let filteredData = data.filter(
      (_, index) => !selectedIndexes.includes(index)
    );
    setCustomerFeedbackData(filteredData);
    setSelectedIndexes([]);
  };

  // const filterByName = () => {
  //   if (searchTerm === "") {
  //     setData(customerFeedbackData);
  //   } else {
  //     let filteredData = customerFeedbackData.filter(
  //       item => item.data.name === searchTerm
  //     );
  //     console.log("filteredData", filteredData);
  //     setData(filteredData);
  //   }
  // };

  useEffect(() => {
    console.log("selectedIndexes", selectedIndexes);
  }, [selectedIndexes, customerFeedbackData]);
  return (
    <div className="fg-data-body">
      <div className="fg-data-header">
        <div>
          <p className="fg-data-header-heading">Aromatic bar</p>
          <p className="fg-data-header-sub-heading">
            112 records found. 3 filters applied
          </p>
        </div>
        <div className="fg-data-functions">
          <div>
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              // value={searchTerm}
              // onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="refresh-icon">
            <IoMdRefresh size={20} />
          </div>
          <div>
            <button className="add-new-button">Add New</button>
          </div>
        </div>
      </div>
      <div className="fg-data-table">
        <table>
          <thead className="fg-table-header">
            <tr style={{ minHeight: "35px" }}>
              <th style={{ minWidth: "100px" }}>
                <input type="checkbox" indeterminate="true" />
              </th>
              <th style={{ minWidth: "125px" }}>Form details</th>
              <th style={{ minWidth: "189px" }}>Customer Name</th>
              <th style={{ minWidth: "172px" }}>Email</th>
              <th style={{ minWidth: "199px" }}>Phone</th>
              <th style={{ minWidth: "419px" }}>
                Please rate the quality of service you received from your host
              </th>
              <th style={{ minWidth: "350px" }}>
                Please rate the quality of your beverage.
              </th>
              <th style={{ minWidth: "300px" }}>Was our restaurant clean</th>
              <th style={{ minWidth: "419px" }}>
                Please rate your overall dining experience.
              </th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIndexes.includes(index)}
                    onChange={e => {
                      if (e.target.checked) {
                        setSelectedIndexes([...selectedIndexes, index]);
                      } else {
                        setSelectedIndexes(
                          selectedIndexes.filter(i => i !== index)
                        );
                      }
                    }}
                  />
                </td>
                <td style={{ color: "#3D84DB" }}>View Details</td>
                <td>{item.data.name}</td>
                <td style={{ padding: "5px" }}>{item.data.email}</td>
                <td>{item.data.phoneNumber}</td>
                <td>{item.data.qualityOfService}</td>
                <td>{item.data.qualityOfBeverage}</td>
                <td>{item.data.qualityOfCleanliness}</td>
                <td>{item.data.diningExperience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="aromatic-footer">
        <div className="btnWrapper">
          <button
            type="submit"
            className="btnDanger"
            onClick={() => handleDeleteData()}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FGData;
