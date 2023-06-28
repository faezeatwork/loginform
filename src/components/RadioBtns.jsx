import React from "react";

export const RadioBtns = (props) => {
  const { type, name, nameOfItem, label } = props;
  return (
    <div className="d-flex mt-3">
      <span className="me-4">{label}:</span>
      {nameOfItem.map((i) => (
        <div class="form-check me-2">
          <label class="form-check-label" for={i.id}>
            {i.name}
          </label>
          <input class="form-check-input" type={type} name={name} id={i.id} />
        </div>
      ))}
    </div>
  );
};
