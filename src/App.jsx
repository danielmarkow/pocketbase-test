import {Route} from "wouter";

import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";

import './App.css'

function App() {

  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </>
  )
}

export default App
