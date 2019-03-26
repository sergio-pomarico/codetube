import React, { Component } from 'react'
import { connect } from 'react-redux'

import Media from '../components/playlist/media'

class MediaContainer extends Component {
  render() {
    return(
      <Media {...this.props.data}/>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    data: state.data.entities.media[props.id]
  }
}

export default connect(mapStateToProps)(MediaContainer);
