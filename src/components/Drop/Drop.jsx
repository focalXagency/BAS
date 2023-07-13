import React, { useState } from "react";
import Select from "react-select";
import '../Drop/Drop.css';


function Dropdown() {
  const options = [
    { value: "option1", label: "ALL" },
    { value: "option2", label: "Technology" },
    { value: "option3", label: "Commercial" },
    { value: "option4", label: "Industrial" }
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  function handleChange(selected) {
    setSelectedOption(selected);
  }
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      border: "none",
      backgroundColor: state.isSelected ? "BLACK" : "white",
    })
  };
  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={handleChange}
      placeholder="Order By : "
      styles={customStyles}
    />
  );
}

export default Dropdown;