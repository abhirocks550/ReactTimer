import React from 'react';
import { Link, IndexLink } from 'react-router';

var Nav = React.createClass({
  render: function () {
    return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Time App</li>
              <li>
                <IndexLink to="/">Timer</IndexLink>
              </li>
              <li>
                <Link to="/">Countdown</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">Created by <a href="#">Abhijit Kulkarni</a></li>
            </ul>
          </div>
        </div>
      );
  },
});

module.exports = Nav;
