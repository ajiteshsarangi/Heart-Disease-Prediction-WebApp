import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Input from "./Input";

function App() {
  const [present, setPresent] = useState();
  const [formValues, setFormValues] = useState({
    Age: "",
    Sex: "",
    ChestPainType: "",
    BP: "",
    Cholesterol: "",
    FBS: "",
    EKGResults: "",
    MaxHR: "",
    ExerciseAngina: "",
    STDepression: "",
    SlopeOfST: "",
    NumVessels: "",
    Thallium: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    };

    axios
      .post("http://127.0.0.1:5000/predict", formValues, config)
      .then((response) => {
        const res = response.data;
        setPresent(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="heading">Heart Disease Prediction</h1>

      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="col">
            <div className="col1">
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="Age"
                  value={formValues.Age}
                  onChange={handleChange}
                  placeholder="Age"
                />
              </div>
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="Sex"
                  value={formValues.Sex}
                  onChange={handleChange}
                  placeholder="Sex"
                />
              </div>

              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="ChestPainType"
                  value={formValues.ChestPainType}
                  onChange={handleChange}
                  placeholder="Chest Pain Type"
                />
              </div>
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="BP"
                  value={formValues.BP}
                  onChange={handleChange}
                  placeholder="Blood Pressure"
                />
              </div>
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="Cholesterol"
                  value={formValues.Cholesterol}
                  onChange={handleChange}
                  placeholder="Cholesterol"
                />
              </div>
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="FBS"
                  value={formValues.FBS}
                  onChange={handleChange}
                  placeholder="Fasting blood sugar"
                />
              </div>
            </div>
            <div className="col2">
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="EKGResults"
                  value={formValues.EKGResults}
                  onChange={handleChange}
                  placeholder="EKG Results"
                />
              </div>
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="MaxHR"
                  value={formValues.MaxHR}
                  onChange={handleChange}
                  placeholder="Max HR"
                />
              </div>
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="ExerciseAngina"
                  value={formValues.ExerciseAngina}
                  onChange={handleChange}
                  placeholder="Exercise Angina"
                />
              </div>
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="STDepression"
                  value={formValues.STDepression}
                  onChange={handleChange}
                  placeholder="ST Depression"
                />
              </div>
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="SlopeOfST"
                  value={formValues.SlopeOfST}
                  onChange={handleChange}
                  placeholder="Slope of ST"
                />
              </div>
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="NumVessels"
                  value={formValues.NumVessels}
                  onChange={handleChange}
                  placeholder="Number of Vessels"
                />
              </div>
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  name="Thallium"
                  value={formValues.Thallium}
                  onChange={handleChange}
                  placeholder="Number of Thallium"
                />
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>

        <div className="display">Heart Disease is : {present}</div>
      </div>
    </div>
  );
}

export default App;
