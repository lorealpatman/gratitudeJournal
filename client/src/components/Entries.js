import React from "react";

function Entries(props) {
  return props.users
    ? props.users.map(users => {
        return (
          <React.Fragment>
            <div className="container-fluid " key={users._id}>
              <div className="panelCorners">
                <div className="panel-body">
                  <div>
                    <label>Name: </label>
                    {`${users.firstName} ${users.lastName}`}
                  </div>
                  <div>
                    <label>Date: </label> {`${users.date}`}
                  </div>
                  <div>
                    <label>Entry: </label> <span>{`${users.entry}`}</span>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })
    : console.log("Entries Not showing");
}

export default Entries;
