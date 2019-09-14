import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Dashboard from './components/Dashboard';
import Cupboard from './components/Cupboard';





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
        <Grid container spacing={3}>
       {/* right now fake  data USING STATE data will come from backend */}
       {/* map that renders all ur cupboards */}
      {/* <Cupboard data={this.state.data} /> */}
      {/* wrap in container to apply styles liek a grid */}
      {this.state.data.map(c => {
      
        return (
         
            <Grid item xs={12} sm={6}>
              <Cupboard data={c} />
            </Grid>
          

        );
      })}
      </Grid>
        // Render the newly fetched data inside of this.state.data 
        <p className="App-intro">{this.state.data}</p>
      </div>

    );
  }
};

export default App;