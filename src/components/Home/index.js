import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Home extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  render() {
    const { title } = this.props;

    return (
      <div>
        {title}
      </div>
    );
  }
};
