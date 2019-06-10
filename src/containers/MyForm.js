import React, { useState } from "react";

const MyForm = props => {
  const [value, onChange] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.onSubmit(value);
        onChange("");
      }}
    >
      <input
        type="text"
        className=""
        value={value}
        onChange={e => onChange(e.target.value)}
      />

      <button type="submit" className="btn btn-primary" disabled={!value}>
        Add Item
      </button>
    </form>
  );
};

export default MyForm;
