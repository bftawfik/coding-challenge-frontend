import React from "react";

const FormControl = ({ type, label, alias, value, onDataChange }) => {
  switch (type) {
    case "input":
      return (
        <div>
          <label>{alias || label}:</label>
          <input
            type="text"
            onChange={(e) => {
              onDataChange({ label, value: e.target.value });
            }}
            value={value}
          />
        </div>
      );
    case "submit":
      return <button type="submit">{label}</button>;
    default:
      return <button>default</button>;
  }
};

export default FormControl;
