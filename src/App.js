
import React, { Component } from 'react'
import Navbar from './Components/Navbar';

import News from './Components/News';
// import Animation  from './Components/Animation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  // c="Himanshu"
  pageSize= 12;
  
  render() {

    return (
      // <div>hello My class based Component {this.c}</div>
      <>
     

      <div>
      <Router>
        {/* <Animation /> */}
        <Navbar />
        {/* <News pageSize={6} country="in" category="general"/> */}
        <Routes>


          <Route path="/" element={<News key="home" pageSize={this.pageSize} country="in" category="general"/>}></Route>

          <Route path="/business" element={<News key="business"  pageSize={this.pageSize} country="in" category="business"/>}>
          </Route>
          <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"/>} >
          </Route>
          <Route path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science"/>}>
          </Route>
          <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology"/>}>
          </Route>
          <Route path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health"/>}>
          </Route>
          <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}>
          </Route>
        </Routes>
        </Router>
      </div>
      </>
    )
  }
}
