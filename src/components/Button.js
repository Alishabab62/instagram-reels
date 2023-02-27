import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <>
       <button onClick={this.props.fun} style={this.props.style}>{this.props.title}</button>
      </>
    )
  }
}
