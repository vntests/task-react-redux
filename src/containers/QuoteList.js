import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getQuoteList, updateQuote, removeQuote } from '../actions/quote';

import QuoteList from '../components/QuoteList';

class QuoteListContainer extends Component {
  static propTypes = {
    quoteList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      link: PropTypes.string
    })),
    getQuoteList: PropTypes.func,
    getQuote: PropTypes.func,
    updateQuote: PropTypes.func,
    removeQuote: PropTypes.func
  };

  componentDidMount() {
    const { getQuoteList } = this.props;

    getQuoteList({
      orderby: 'rand',
      postsPerPage: 1
    });
  }

  render() {
    const { quoteList, getQuote, updateQuote, removeQuote } = this.props;

    return (
      <QuoteList
        quoteList={quoteList}
        getQuote={getQuote}
        updateQuote={updateQuote}
        removeQuote={removeQuote}
      />
    );
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
  updateQuote: quote => {
    dispatch(updateQuote(quote));
  },
  removeQuote: quote => {
    dispatch(removeQuote(quote));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteListContainer);
