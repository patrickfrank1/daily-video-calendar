/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../css/App.scss';
import VIDEO_LINKS from '../data/links.js';
import daysIntoYear from './util.js';

const TODAY = new Date();
const DAY_OF_YEAR = daysIntoYear(TODAY);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoIndex: DAY_OF_YEAR
    };
  }

  countUp = () => {
    let new_index = Math.min(this.state.videoIndex + 1, DAY_OF_YEAR);
    this.setState({videoIndex: new_index});
  }

  countDown = () => {
    let new_index = Math.max(this.state.videoIndex - 1, 0);
    this.setState({videoIndex: new_index});
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='left' onClick={this.countDown}>Previous</div>
          <div className='right' onClick={this.countUp}>Next</div>
          <iframe width="654" height="368" src={VIDEO_LINKS[this.state.videoIndex]} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className='footer'>
          <span>Today is {TODAY.toLocaleString('de-DE')}.</span>
          <span>&copy; 2021, Patrick Frank</span>
          <span>Github: <a href="https://github.com/patrickfrank1/daily-video-calendar">https://github.com/patrickfrank1/daily-video-calendar</a></span>
        </div>
      </div>
    );
  }
}

export default App;

