import React, { Component } from "react";
import ListGroup from "../common/listGroup";
import Popup from "../common/popup";
class BrandY extends Component {
  state = {};
  state = {
    brandY: ["opt A", "opt D", "opt E", "opt G"]
  };
  render() {
    const { brandY } = this.state;
    return (
      <div className="row">
        <div className="col-sm-5">
          <ListGroup brand={brandY} />
        </div>
        <div className="col-sm-6">
          <Popup label="Component B" message=" Hello my name is component B " />
        </div>
      </div>
    );
  }
}

export default BrandY;
