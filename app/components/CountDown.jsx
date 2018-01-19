import React from 'react';
import Clock from 'Clock';
import CountDownForm from 'CountDownForm';

var CountDown = React.createClass({
  getInitialState: function () {
    return {count: 0};
  },
  handleSetCountDown(seconds) {
    this.setState({
        count: seconds
      });
  },
  render() {
    let { count } = this.state;
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountDownForm onSetCountDown={this.handleSetCountDown} />
      </div>
    );
  },
});

module.exports = CountDown;
