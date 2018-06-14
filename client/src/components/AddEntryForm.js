import React from "react";

class AddEntryForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <section id="entries">
              <div className="container-fluid">
                <div id="overlay" />
                <div className="row">
                  <div className="container-fluid col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">
                      <img
                        src="favicon.ico"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                      />{" "}
                      What Are You Grateful For?{" "}
                      <img
                        src="favicon.ico"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                      />
                    </h2>

                    <h3 className="section-subheading text-muted">
                      Add an entry for today...
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="container-fluid">
                    <form id="entryForm" novalidate="novalidate">
                      <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                          <div className="form-group">
                            <input
                              className="form-control"
                              id="firstName"
                              type="text"
                              placeholder="Your First Name *"
                              required="required"
                              data-validation-required-message="Please enter your first name."
                            />
                            <p className="help-block text-danger" />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              id="lastName"
                              type="email"
                              placeholder="Your Last Name *"
                              required="required"
                              data-validation-required-message="Please enter your Last Name."
                            />
                            <p className="help-block text-danger" />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              id="date"
                              type="text"
                              placeholder="Today's Date i.e 06/13/2018 *"
                              required="required"
                              data-validation-required-message="Please enter today's date."
                            />
                            <p className="help-block text-danger" />
                          </div>
                        </div>
                        <div className="col-md-4 col-md-offset-4">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              id="message"
                              placeholder="What you're grateful for *"
                              required="required"
                              data-validation-required-message="Please enter an entry."
                              rows="6"
                            />
                            <p className="help-block text-danger" />
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="col-lg-12 text-center">
                          <div id="success" />
                          <button
                            id="addEntry"
                            className="button btn btn-success btn-lg "
                            type="submit"
                          >
                            Add Entry
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddEntryForm;
