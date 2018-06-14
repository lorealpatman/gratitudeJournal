import React from "react";

const Entries = () => (
  <React.Fragment>
    <div className="container-fluid">
      <div className="panelCorners">
        <div className="panel-body">
          <div>
            <label>Name:</label> Jane Doe
          </div>
          <div>
            <label>Date:</label> 06/13/2018
          </div>
          <div>
            <label>Entry: </label>{" "}
            <span>
              I'm grateful for so many things. Like so so so so so so sososososo
              soso soso sosososo vsoso many many many many many many many many
              many many many many many many many many many many many many many
              many many many things so many
            </span>
          </div>
        </div>
      </div>
      <br />
      <div className="panelCorners">
        <div className="panel-body">
          <div>
            <label>Name:</label> Tim Smith
          </div>
          <div>
            <label>Date:</label> 06/14/2018
          </div>
          <div>
            <label>Entry: </label>{" "}
            <span>
              I'm grateful for food and more food, food food food food food food
              food food, This is better than loren ipsum
            </span>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Entries;
