import React, { Component } from "react";
// import Landing from "../src/components/Landing";
import AddEntryForm from "../src/components/AddEntryForm";
// import Register from "../src/components/Register";
import Footer from "../src/components/Footer";
import EntriesContainer from "../src/components/EntriesContainer";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";
import * as scrape from "../src/services/quotes.service";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quotes: [], activeQuote: "" };
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    scrape
      .getAll()
      .then(json => {
        this.setState({ quotes: JSON.parse(json) }, () => {
          let randomIndex = Math.floor(
            Math.random() * this.state.quotes.length
          );
          // console.log(data[quoteArr]);
          this.setState({ activeQuote: randomIndex });
        });

        // console.log("Quotes Displayed", data);
      })
      .catch(() => {
        console.log("Error Loading Quotes");
      });

    Events.scrollEvent.register("begin", function() {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      // console.log("end", arguments);
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
                      onClick={() => scroll.scrollTo(2600)}
                    >
                      Add Entry
                    </Link>
                  </li>
                  {/* <li>
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
                  </li> */}
                  {/* <li className="pull-right" style={{ float: "right" }}>
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
                  </li> */}
                </ul>
              </nav>
            </div>

            <div className="landing-text">
              <h1>Thanks</h1>
              <p className="pLanding" style={{ marginBottom: "70px" }}>
                {this.state.activeQuote &&
                  this.state.quotes[this.state.activeQuote].quote}
                {this.state.activeQuote && console.log(this.state)}
              </p>
              <br />

              <button
                className="button btn btn-success btn-lg"
                title="Add Entry"
              >
                {" "}
                <Link
                  type="button"
                  activeClass="active"
                  className="gratitude"
                  to="Add"
                  onClick={() => scroll.scrollTo(2600)}
                >
                  Gratitude
                </Link>
              </button>
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

          {/* <Element
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
          </Element> */}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
