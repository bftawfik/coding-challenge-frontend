import React from "react";

const FormControl = ({ type, label, alias, value, onDataChange, classes }) => {
  switch (type) {
    case "input":
      return (
        <div className={classes.FormControl}>
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
        <div className={classes.FormControl}>
          <label for={label}>{alias || label}:</label>
          <textarea
            id={label}
            value={value}
            onChange={(e) => {
              onDataChange({ label, value: e.target.value });
            }}
            required
          />
        </div>
      );
    case "submit":
      return (
        <div className={classes.FormControl}>
          <button type="submit">{label}</button>
        </div>
      );
    default:
      return (
        <div className={classes.FormControl}>
          <button>{label}</button>
        </div>
      );
  }
};

export default FormControl;
