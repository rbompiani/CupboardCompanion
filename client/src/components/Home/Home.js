import React from "react";
import {Component} from "react";
import Cupboard from "../Cupboard/Cupboard"
import Dashboard from "../Dashboard"
import Wrapper from '../Wrapper/index';


class Home extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    setInterval(async () => {
      console.log("requesting...");
      this.callBackendAPI()
      .then(res => {
        this.setState({ data: res.express });
        console.log(this.state);
      })
      .catch(err => console.log(err));
    }, 5000)  
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <Dashboard />
        <Wrapper>
          <div className="gauge-container">
            {this.state &&
              this.state.data &&
              this.state.data.map(sensor => {
                return (
                  <Cupboard
                    data={Math.round(sensor.reading)}
                    product={sensor.product}
                  />
                );
              })}
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Home;
