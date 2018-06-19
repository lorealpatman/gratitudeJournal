import React, { Component } from "react";
// import Landing from "../src/components/Landing";
import AddEntryForm from "../src/components/AddEntryForm";
import Register from "../src/components/Register";
import Footer from "../src/components/Footer";
import EntriesContainer from "../src/components/EntriesContainer";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";
// import * as scrape from "../app/services/QuoteScraper.js";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quotes: "" };
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    // scrape
    //   .getAll()
    //   .then(data => {
    //     this.setState({ quotes: data });
    //     console.log("Quotes Displayed", data);
    //   })
    //   .catch(() => {
    //     console.log("Error Loading Entries");
    //   });

    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  // componentWillUnmount() {
  //   Events.scrollEvent.remove("begin");
  //   Events.scrollEvent.remove("end");
  // }

  render() {
    return (
      <React.Fragment>
        <Element className="element" name="Home">
          <div className="landing-image" style={{ marginBottom: "50px" }}>
            <div className="topnav">
              <div id="overlay" />
              <nav className="navbar">
                <ul>
                  <li>
                    {" "}
                    <Link
                      activeClass="active"
                      className="activeNav"
                      to="Home"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      activeClass="active"
                      className="entries"
                      to="Entries"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Entries
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      activeClass="active"
                      className="add"
                      to="Add"
                      onClick={() => scroll.scrollTo(2400)}
                    >
                      Add Entry
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      activeClass="active"
                      className="register"
                      to="Register"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Register
                    </Link>
                  </li>
                  <li className="pull-right" style={{ float: "right" }}>
                    <Link
                      activeClass="active"
                      className="logout"
                      to="Logout"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Logout
                    </Link>
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
        </Element>

        <div>
          <Element
            className="element"
            name="Entries"
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
          </Element>

          <Element
            className="element"
            name="Add"
            style={{ paddingTop: "50px" }}
          >
            <div>
              <AddEntryForm />
            </div>
          </Element>

          <Element
            className="element"
            name="Register"
            style={{
              paddingTop: "50px",
              height: "100vh"
            }}
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
          </Element>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
