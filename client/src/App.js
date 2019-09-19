import React from 'react'
import Header from './components/Header/Header.js'
import Main from './components/Main.js'
import './App.css'
import {Route} from "react-router-dom"

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App