import React from 'react'
import { Router } from 'react-router-dom';
import history from './history';
import Header from './components/Header/Header.js'
import Main from './components/Main.js'
import './App.css'

const App = () => (
  <Router history={history}>
    <div>
      <Header />
      <Main />

    </div>
  </Router>
)

export default App