import React, { Component } from "react";
import ListGroup from "../common/listGroup";
import Popup from "../common/popup";
class BrandX extends Component {
  state = {
    brandX: ["opt A", "opt B", "opt C", "opt D"]
  };
  render() {
    const { brandX } = this.state;
    return (
      <div className="row">
        <div className="col-sm-5">
          <ListGroup brand={brandX} />
        </div>
        <div className="col-sm-6">
          <Popup label="Component A" message=" Hello my name is component A "/>
        </div>
      </div>
    );
  }
}

export default BrandX;
