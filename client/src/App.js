import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Cupboard from './components/Cupboard';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => {
        //console.log(res);
        this.setState({ data: res.express });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        // Render the newly fetched data inside of this.state.data
        { this.state && this.state.data &&
          this.state.data.map(sensor => {
            return(<Cupboard data={Math.round(sensor.reading)}/>);
          }) 
        }
        {/* <p className="App-intro">{this.state.data}</p> */}
      </div>
    );
  }
}

export default App;
