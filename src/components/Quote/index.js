import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';

import './index.css';

const Quote = ({
  title,
  content,
  link,
  remove
}) => (
  <blockquote className="blockquote quote">
    <Button
      type="button"
      size="sm"
      color="danger"
      onClick={remove}
    >
      Remove
    </Button>
    <div dangerouslySetInnerHTML={{__html: content}} />
    <footer className="blockquote-footer">
      {title} (<a href={link}>{link}</a>)
    </footer>
  </blockquote>
);

Quote.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
  remove: PropTypes.func
};

export default Quote;
