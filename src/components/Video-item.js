import React from 'react';
import moment from 'moment';

  const Video = (props) => {

    const play = () => {
      props.playVideo(props.id);
    }

    return (
      <div className='video-item' onClick={play}>
        <div className='video-title-container'><div className='video-title'>{props.description}</div></div>
        <div className='img-container'><img src={props.url} alt='' /></div>
        <div className='video-published-date'>{moment(props.publishDate).format('YYYY-MM-DD')}</div>
      </div>
    );
  };

  export default Video;
