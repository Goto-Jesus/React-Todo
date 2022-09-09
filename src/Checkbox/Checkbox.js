import React from "react";
import "./myCheckbox.css";

let Checkbox = (props) => {
  return (
    <label className="label">
      <input
        type="checkbox"
        className="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <span className="fake"></span>
      <span className="text"></span>
    </label>
  );
};

export default Checkbox;
