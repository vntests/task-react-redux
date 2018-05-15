import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Quote = ({
  title,
  content,
  link
}) => (
  <blockquote className="blockquote quote">
    <div dangerouslySetInnerHTML={{__html: content}} />
    <footer className="blockquote-footer">
      {title} (<a href={link}>{link}</a>)
    </footer>
  </blockquote>
);

Quote.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string
};

export default Quote;
