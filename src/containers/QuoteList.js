import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getQuoteList } from '../actions/quote';

import QuoteList from '../components/QuoteList';

class QuoteListContainer extends Component {
  static propTypes = {
    quoteList: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      link: PropTypes.string
    })),
    getQuoteList: PropTypes.func
  };

  render() {
    const { quoteList } = this.props;

    return (
      <QuoteList
        quoteList={quoteList}
      />
    );
  }

  componentDidMount() {
    const { getQuoteList } = this.props;

    getQuoteList({
      orderby: 'rand',
      postsPerPage: 1
    });
  }
}

const mapStateToProps = state => ({
  quoteList: state.quoteList
});

const mapDispatchToProps = dispatch => ({
  getQuoteList: options => {
    dispatch(getQuoteList(options))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteListContainer);
