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
                    <label for="firstName">First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Jane"
                      name="first name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="lastName">Last Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Doe"
                      name="last name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      placeholder="Enter password"
                      name="pwd"
                    />
                  </div>
                  <div className="form-group">
                    <label for="conPwd">Confirm Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="conPwd"
                      placeholder="Confirm password"
                      name="conPwd"
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
