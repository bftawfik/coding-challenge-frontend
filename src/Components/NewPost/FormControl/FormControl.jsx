import React from "react";

const FormControl = ({ type, label, alias, value, onDataChange }) => {
  switch (type) {
    case "input":
      return (
        <div>
          <label for={label}>{alias || label}:</label>
          <input
            id={label}
            type="text"
            onChange={(e) => {
              onDataChange({ label, value: e.target.value });
            }}
            value={value}
            required
          />
        </div>
      );
    case "textarea":
      return (
        <div>
          <label for={label}>{alias || label}:</label>
          <textarea
            id={label}
            onChange={(e) => {
              onDataChange({ label, value: e.target.value });
            }}
            required
          >
            {value}
          </textarea>
        </div>
      );
    case "submit":
      return <button type="submit">{label}</button>;
    default:
      return <button>{label}</button>;
  }
};

export default FormControl;
