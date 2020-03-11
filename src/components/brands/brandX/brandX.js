import React, { Component } from "react";

class BrandX extends Component {
  state = {
    brandX: ["opt A", "opt B", "opt C", "opt D"]
  };
  render() {
    const { brandX } = this.state;
    return (
      <div className="row">
        <div className="col-sm-5">
          <ul className="list-group mt-5 ml-5">
            {brandX.map(x => {
              return (
                <li className="list-group-item" id={x}>
                  {x}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-sm-6">
          <div className="card mt-5 ml-3">
            <div className="card-body row">
              <h5 className="card-title col">Component A</h5>
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
                        Component A
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
                      Hello from the other side of the world !
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
            <h5 className="card-title col">Component A</h5>
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

export default BrandX;
