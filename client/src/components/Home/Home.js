import React from "react";
import {Component} from "react";
import Cupboard from "../Cupboard/Cupboard.js"
import Typography from '@material-ui/core/Typography';
import NewItemButton from "../NewItem/NewItem.js"
import Wrapper from '../Wrapper/Wrapper.js';


class Home extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    setInterval(async () => {
      //console.log("requesting...");
      this.callBackendAPI()
      .then(res => {
        this.setState({ data: res.express });
        //console.log(this.state);
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
        <Typography paragraph>
          Welcome to Cupboard Companion. Register a new product by clicking register new item on the sidebar. Once your hardware is installed then fill up your container with product until full and set that reading as your full weight. Fill out the registration and let Cupboard Companion keep watch over your inventory. 
        </Typography>
        <NewItemButton />
        <Wrapper>
          <div className="gauge-container">
            {this.state &&
              this.state.data &&
              this.state.data.map(sensor => {
                return (
                  <Cupboard
                    data={Math.round(sensor.reading)}
                    product={sensor.product}
                    link={sensor.reorderLink}
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
