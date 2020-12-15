import React, { Component } from 'react';

class ReleaseRow extends Component {
  render(){
    return(
          <li><a href={this.props.href} target="_blank">{this.props.children}</a></li>
    )
  }
}

export default ReleaseRow;