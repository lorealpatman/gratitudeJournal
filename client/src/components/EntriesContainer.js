import React, { Component } from "react";
import * as ajaxcalls from "../services/users.service";
import Entries from "../components/Entries";

class EntriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    ajaxcalls
      .getAll()
      .then(data => {
        this.setState({ users: data });
        console.log("Entries Displayed", data);
      })
      .catch(() => {
        console.log("Error Loading Entries");
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-4 col-md-offset-4">
          <Entries users={this.state.users} />
        </div>
      </React.Fragment>
    );
  }
}
export default EntriesContainer;
