import React from "react";
import * as scrape from "../app/services/QuoteScraper";

class Landing extends React.Component {
constructor(props){
  super(props)
this.state = {quotes=""}

}

componentDidMount(){
  
  scrape.getAll()
  .then(data => {
    this.setState({ quotes: data });
    console.log("Quotes Displayed", data);
  })
  .catch(() => {
    console.log("Error Loading Entries");
  });


}
  
  render() {
    return (
      <React.Fragment>
        <div class="landing-image">
          <div class="landing-text">
            <h1>Gratitude Journal</h1>
            <p>"Being grateful brings you more things to be grateful for."</p>
            <button>Login</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
