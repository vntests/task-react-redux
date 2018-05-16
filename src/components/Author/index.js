import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { Container, Row, Col } from 'reactstrap';

import './index.css';

const Author = ({ t }) => (
  <div>
    <Container>
      <h1>{t('author.title')}</h1>
      <Row>
        <Col>
          <article>
            <h2>John Doe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tincidunt nisi sit amet commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu metus et felis vulputate luctus. Curabitur ullamcorper pulvinar quam, vel condimentum mi fermentum at. Mauris pharetra tincidunt sem, sit amet luctus elit iaculis at. Phasellus consectetur est ex, sed dignissim tortor feugiat ac. Aliquam ipsum lorem, efficitur eleifend pellentesque rhoncus, blandit sed augue. In vel massa pellentesque, imperdiet purus vel, auctor tellus. Donec vitae facilisis ligula. Phasellus suscipit libero viverra mauris scelerisque, a blandit nisi faucibus. Nam lorem orci, hendrerit non libero nec, accumsan sollicitudin enim. Praesent posuere dignissim libero, varius rhoncus ligula scelerisque ut.</p>
          </article>
        </Col>
      </Row>
    </Container>
  </div>
);

Author.propTypes = {
  t: PropTypes.func
};

export default translate('translations')(Author);
