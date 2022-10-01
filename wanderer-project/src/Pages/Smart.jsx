import React from "react";
import "./smart.css";
export default function Smart() {
  const [smartData, setSmartData] = React.useState({
    sname: "",
    destinationType: "",
    residenceType: "",
    description: "",
  });
  console.log(smartData);
  function handleChange(e) {
    e.persist();
    setSmartData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <div className="smart">
      <form className="smart--form">
        <h4>Smart Tour Recomendation</h4>
        <input
          type="text"
          placeholder="Name"
          name="sname"
          value={smartData.sname}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Destination Type"
          name="destinationType"
          value={smartData.destinationType}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Residence Type"
          name="residenceType"
          value={smartData.residenceType}
          onChange={handleChange}
        />
        <br />
        <textarea
          type="text"
          placeholder="Description"
          name="description"
          value={smartData.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <button>Recomend Tour</button>
      </form>
    </div>
  );
}
