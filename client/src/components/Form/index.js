import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input {...props} onChange={props.handleInputChange} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea rows="20" {...props} onChange={props.handleInputChange} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} onClick={props.onSubmit}>
      {props.children}
    </button>
  );
}
