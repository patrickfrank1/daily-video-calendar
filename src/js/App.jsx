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

  printSelectedDate = () => {
    let selectedDate = new Date()
    selectedDate.setDate((TODAY.getDate() + this.state.videoIndex - DAY_OF_YEAR));
    return selectedDate.toLocaleDateString('de-DE');
  }

  render() {
    let renderMainElement;
    if (TODAY.getFullYear() < 2022) {
      renderMainElement = <div className='main'><span>Nice to see you here. This calendar is dedicated to the year 2022. Please check back on January 1st 2022.</span></div>;
    } else if (TODAY.getFullYear() === 2022) {
      renderMainElement = <iframe className='main' width="654" height="368" src={VIDEO_LINKS[this.state.videoIndex]} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>;
    } else {
      renderMainElement = <div className='main'><span>Oh snap, you just missed 2022! This calendar is dedicated to the year 2022. Please travel back in time.</span></div>
    }

    return (
      <div>
        <div className='container'>
          <div className='left' onClick={this.countDown}>Previous</div>
          <div className='middle'>{this.printSelectedDate()}</div>
          <div className='right' onClick={this.countUp}>Next</div>
          {renderMainElement}
        </div>
        <div className='footer'>
          <span><a href="#" onClick={(e) => {e.preventDefault();this.setState({videoIndex: DAY_OF_YEAR});}}>Today is {TODAY.toLocaleString('de-DE')}.</a></span>
          <span>&copy; 2021, Patrick Frank</span>
          <span>Github: <a href="https://github.com/patrickfrank1/daily-video-calendar">https://github.com/patrickfrank1/daily-video-calendar</a></span>
        </div>
      </div>
    );
  }
}

export default App;

