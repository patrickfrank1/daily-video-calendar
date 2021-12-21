/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../css/App.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Hello World'
    };
  }

  render() {
    return (
      <div>
        <div className='box'>{this.state.content}</div>
        <div className='footer'>
          <span>&copy; 2020, Patrick Frank</span>
          <span>Github: <a href="https://github.com/patrickfrank1/ui-city-api">https://github.com/patrickfrank1/ui-city-api</a></span>
          <span>License: MIT</span>
        </div>
      </div>
    );
  }
}

export default App;
