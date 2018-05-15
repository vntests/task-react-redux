import React from 'react';
import PropTypes from 'prop-types';

import Quote from '../Quote';

import './index.css';

const QuoteList = ({ quoteList }) => (
  <div>
    {quoteList && quoteList.map(quote => (
      <Quote
        key={quote.ID}
        title={quote.title}
        content={quote.content}
        link={quote.link}
      />
    ))}
  </div>
);

QuoteList.propTypes = {
  quoteList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string
  }))
};

export default QuoteList;
