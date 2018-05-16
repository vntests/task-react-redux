import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';

import Quote from '../Quote';

import './index.css';

const QuoteList = ({ quoteList, getQuote, removeQuote }) => (
  <div>
    {quoteList && quoteList.map(quote => (
      <Quote
        key={quote.ID}
        title={quote.title}
        content={quote.content}
        link={quote.link}
        remove={() => { removeQuote(quote) }}
      />
    ))}
    <Button
      type="button"
      block
      color="primary"
      onClick={getQuote}
    >
      Get one more quote
    </Button>
  </div>
);

QuoteList.propTypes = {
  quoteList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string
  })),
  getQuote: PropTypes.func,
  removeQuote: PropTypes.func
};

export default QuoteList;
