import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getQuoteList, removeQuote } from '../actions/quote';

import QuoteList from '../components/QuoteList';

class QuoteListContainer extends Component {
  static propTypes = {
    quoteList: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      link: PropTypes.string
    })),
    getQuoteList: PropTypes.func,
    getQuote: PropTypes.func
  };

  render() {
    const { quoteList, getQuote, removeQuote } = this.props;

    return (
      <QuoteList
        quoteList={quoteList}
        getQuote={getQuote}
        removeQuote={removeQuote}
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
  },
  getQuote: () => {
    dispatch(getQuoteList({}));
  },
  removeQuote: quote => {
    dispatch(removeQuote(quote))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteListContainer);
