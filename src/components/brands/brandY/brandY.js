import React, { Component } from "react";

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
          <ul className="list-group mt-5 ml-5">
            {brandY.map((x,indx )=> {
              return (
                <li className="list-group-item" id={indx}>
                  {x}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-sm-6">
          <div className="card mt-5 ml-3">
            <div className="card-body row">
              <h5 className="card-title col">Component B</h5>
              <button
                type="button"
                className="btn btn-primary mr-5"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Button
              </button>

              <div
                className="modal fade"
                id="exampleModalCenter"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Component B
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      Hello Brand "Y" is waving !
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-5 ml-3">
            <div className="card-body row">
              <h5 className="card-title col">Component B</h5>
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
        </div>
      </div>
    );
  }
}

export default BrandY;
