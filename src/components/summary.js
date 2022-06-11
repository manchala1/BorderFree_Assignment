import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Get ID from URL

function Summary() {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/1`)
      .then((res) => {
        console.log("summary", res.data);
        setSummary(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <h1>Summary</h1>
      <div className="row">
        <div className=" col-lg-6 mt-3">
          <img
            className="card-img-top image-main"
            src={summary.image}
            alt="Card cap"
          />
          <p>{summary.description}</p>
        </div>
        <div className="col-lg-6">
          <div className="card-body">
            <h5 className="card-title">{summary.title}</h5>
            <p className="card-text">{summary.price}</p>
            <p className="card-text">{summary.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
