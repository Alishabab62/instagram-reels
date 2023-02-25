import React, { Component } from 'react'

export default class Input extends Component {
  constructor(){
    super()
    this.state = {
      name:"",
    }
  }
  render() {
    return (
      <>
       <input type="text" placeholder={this.props.placeholder} onChange={this.props.handleInputs} name={this.props.name}></input> 
      </>
    )
  }
}
