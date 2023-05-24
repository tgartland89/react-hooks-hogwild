import React from "react";

function PigFilter({ onOptionSelect }) {
  const handleSelect = (e) => {
    onOptionSelect(e.target.value);
  };
  return (
    <div>
      <select onChange={handleSelect}>
        <option value="All">All</option>
        <option value="Not Greased">Not greased</option>
        <option value="Greased">Greased</option>
      </select>
    </div>
  );
}

export default PigFilter;