import React, { Component } from "react";
// import Landing from "../src/components/Landing";
import AddEntryForm from "../src/components/AddEntryForm";
import Register from "../src/components/Register";
import Footer from "../src/components/Footer";
import EntriesContainer from "../src/components/EntriesContainer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App" id="Home">
          <div className="landing-image" style={{ marginBottom: "50px" }}>
            <div className="topnav">
              <div id="overlay" />
              <nav className="navbar">
                <ul>
                  <li>
                    {" "}
                    <a className="activeNav" href="#Home">
                      Home
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#Entries">Entries</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#Add">Add</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#Register">Register</a>
                  </li>
                  <li className="pull-right" style={{ float: "right" }}>
                    <a href="#logout">Logout</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="landing-text">
              <h1>Thanks</h1>
              <p className="pLanding" style={{ marginBottom: "70px" }}>
                “Feeling gratitude and not expressing it is like wrapping a
                present and not giving it.” —William Arthur Ward
              </p>
              <br />
              <button className="button btn btn-success btn-lg">Login</button>
            </div>
          </div>
        </div>

        <div>
          <div
            id="Entries"
            style={{
              marginBottom: "70px",
              paddingTop: "50px",
              paddingBotom: "95px"
            }}
          >
            <h2 className="section-heading text-uppercase">
              <img
                src="favicon.ico"
                alt=""
                style={{ width: "45px", height: "45px" }}
              />{" "}
              Gratitude Entries{" "}
              <img
                src="favicon.ico"
                alt=""
                style={{ width: "45px", height: "45px" }}
              />
            </h2>

            <div>
              <EntriesContainer />
            </div>
          </div>

          <div id="Add" style={{ paddingBottom: "80px", paddingTop: "50px" }}>
            <div>
              <AddEntryForm />
            </div>
          </div>

          <div
            id="Register"
            style={{ paddingBottom: "50px", paddingTop: "50px" }}
          >
            <h2 className="section-heading text-uppercase">
              <img
                src="favicon.ico"
                alt=""
                style={{ width: "45px", height: "45px" }}
              />{" "}
              Register{" "}
              <img
                src="favicon.ico"
                alt=""
                style={{ width: "45px", height: "45px" }}
              />
            </h2>
            <div>
              <Register />
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
