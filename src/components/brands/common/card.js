import React from "react";

const Card = ({label}) => {
  return (
    <div className="card mt-5 ml-3">
      <div className="card-body row">
        <h5 className="card-title col">{label}</h5>
        <button
          type="button"
          className="btn btn-primary mr-5"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default Card;
