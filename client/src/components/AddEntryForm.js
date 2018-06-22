import React from "react";
import * as ajaxcalls from "../services/users.service";

class AddEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      date: new Date(), //      {this.state.date.toLocaleTimeString()}
      entry: ""
    };

    this.onChange = this.onChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleAdd(event) {
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      date: this.state.date,
      entry: this.state.entry
    };

    ajaxcalls
      .post(user)
      .then(data => {
        console.log(data);
        this.setState({ user: data });
        alert("Entry Added");
        this.setState({
          firstName: "",
          lastName: "",
          date: "",
          entry: ""
        })((window.location.href = "#"));
      })
      .catch(() => {
        console.log("error");
      });
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
                    <form id="entryForm">
                      <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="firstName"
                              type="text"
                              value={this.state.firstName}
                              onChange={this.onChange}
                              placeholder="Your First Name *"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="lastName"
                              type="text"
                              value={this.state.lastName}
                              onChange={this.onChange}
                              placeholder="Your Last Name *"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              value={this.state.date}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-md-offset-4">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="entry"
                              value={this.state.entry}
                              onChange={this.onChange}
                              placeholder="I am grateful for... *"
                              rows="6"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 text-center">
                          <button
                            className="button btn btn-success btn-lg "
                            onClick={this.handleAdd}
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
