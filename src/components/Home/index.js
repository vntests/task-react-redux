import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import QuoteList from '../../containers/QuoteList';

import { Container, Row, Col } from 'reactstrap';

import './index.css';

const Home = ({ t }) => (
  <div>
    <h1>{t('home.title')}</h1>

    <Container>
      <Row>
        <Col>
          <QuoteList />
        </Col>
      </Row>
    </Container>
  </div>
);

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate('translations')(Home);
