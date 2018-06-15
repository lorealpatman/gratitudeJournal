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
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jane"
                      name="firstName"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Doe"
                      name="lastName"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      name="password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="conPwd">Confirm Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm password"
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
