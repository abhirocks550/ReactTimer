import React from 'react';

var CountDownForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountDown(parseInt(strSeconds, 10));
    }
  },
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onFormSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds" />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  },
});

module.exports = CountDownForm;
