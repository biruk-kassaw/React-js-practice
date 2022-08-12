import React from 'react';

const Input = ({ value, name, type, onChange, label, error }) => {
  return (
    <>
      <div className="form-group m-3">
        <label htmlFor={name}>{label}</label>
        <input
          onChange={onChange}
          value={value}
          type={type}
          name={name}
          className="form-control"
          id={name}
          aria-describedby="emailHelp"
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default Input;
