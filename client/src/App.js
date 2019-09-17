import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Dashboard from './components/Dashboard';
import Cupboard from './components/Cupboard';
import NewItemButton from "./components/NewItem";






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
           {/* Render the newly fetched data inside of this.state.data */}
          { this.state && this.state.data &&
            this.state.data.map(sensor => {
              return(<Cupboard data={Math.round(sensor.reading)}/>);
            }) 
          }
{/* 
      <Dashboard />
        <Grid container spacing={3}>
          {this.state.data.map(c => {
            return (
              <Grid item xs={12} sm={6}>
                <Cupboard data={c} />
              </Grid>
            );
          })}
        </Grid>
*/}
      </div>

    );
  }
};

export default App;