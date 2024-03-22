import React, { Component } from 'react'
import Tenor from './Tenor.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-4" >

        <img src={Tenor} alt="Tenor"  style={{height:"200px",width:"200px"}} />
      </div>

     
    )
  }
}

export default Spinner