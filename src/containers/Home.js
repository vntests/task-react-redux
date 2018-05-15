import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import Home from '../components/Home';

class HomeContainer extends Component {
  render() {
    const { t } = this.props;

    return (
      <Home
        title={t('home.title')}
      />
    );
  }
}

export default connect()(translate('translations')(HomeContainer));
