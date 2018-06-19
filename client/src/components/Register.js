import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <form>
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your First Name*"
                      name="firstName"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Last Name*"
                      name="lastName"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email*"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Password*"
                      name="password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Your Password*"
                      name="confirmPassword"
                    />
                  </div>

                  <button
                    type="submit"
                    className="button btn btn-warning btn-lg"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
