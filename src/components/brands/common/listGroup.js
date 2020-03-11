import React from "react";

const ListGroup = ({ brand }) => {
  return (
    <ul className="list-group mt-5 ml-5">
      {brand.map(x => {
        return (
          <li className="list-group-item" id={x}>
            {x}
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;
