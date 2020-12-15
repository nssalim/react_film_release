
import React, { Component } from 'react';
import ReleaseRow from '../components/ReleaseRow.js';

class ReleaseBox extends Component {
  render() {
    const releaseList = this.props.data.map(release => {
      return <ReleaseRow key={release.id} href={release.url}>{release.name}</ReleaseRow>;
    });
    return (
      <ul>
        {releaseList}
      </ul>
    )
  }

}

export default ReleaseBox;