import React, { Component } from 'react';
import './App.css';
import Cupboard from './components/Cupboard';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';



class App extends Component {
state = {
    data: [60, 80, 1],

  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">

       <Dashboard />
       {/* right now fake  data USING STATE data will come from backend */}
       {/* map that renders all ur cupboards */}
      {/* <Cupboard data={this.state.data} /> */}
      {/* wrap in container to apply styles liek a grid */}
      {this.state.data.map(c => {
      
        return <Cupboard data={c} />
      
      })}

        // Render the newly fetched data inside of this.state.data 
        <p className="App-intro">{this.state.data}</p>
      </div>

    );
  }
}

export default App;