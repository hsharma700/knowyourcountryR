import React from "react";

const Filter = ({setRegion}) => {
  return (
    <div className="region-bar">
      <select onChange={(e)=>{setRegion(e.target.value.toLowerCase())}} className="region-select">
        <option hidden>Filter By Region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
