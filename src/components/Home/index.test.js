import React from 'react';
import renderer from 'react-test-renderer';

import Home from './';

jest.mock('react-i18next', () => ({
  translate: () => Component => {
    Component.defaultProps = { ...Component.defaultProps, t: () => '' };
    return Component;
  }
}));

jest.mock('../../containers/QuoteList', () => 'QuoteList');

test('<Home /> should render', () => {
  const component = renderer.create(
    <Home />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
