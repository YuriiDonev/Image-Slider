import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getVideosFromYouTube as _getVideosFromYouTube } from '../actions/video.js';

class Search extends Component {

  state = {
    searchInput: ''
  }

	setInputData = (e) => {
    if (e.target.name === 'youtube-search') {
      this.setState({searchInput: e.target.value});
    }
	}

	searchVideos = () => {
		this.props._getVideosFromYouTube(this.state.searchInput);
    this.setState({searchInput: ''});
	}

  render() {
    return (
      <div className="search">

          <div className='search-label'>Search on YouTube</div>
          <div className='input-container'>
            <input
              type="text"
              name='youtube-search'
              value={this.state.searchInput}
              onChange={this.setInputData}
              placeholder={'Search on YouTube...'}
             />
             <button onClick={this.searchVideos}>{'Search'}</button>
          </div>

      </div>
    );
  }
}

const actions = {
  _getVideosFromYouTube,
};

export default connect(null, actions)(Search);
