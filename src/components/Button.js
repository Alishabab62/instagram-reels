import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    console.log(this.props.fun)
    return (
      <>
       <button onClick={this.props.fun}>{this.props.title}</button>
      </>
    )
  }
}
