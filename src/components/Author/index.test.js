import React from 'react';
import renderer from 'react-test-renderer';

import Author from './';

jest.mock('react-i18next', () => ({
  translate: () => Component => {
    Component.defaultProps = { ...Component.defaultProps, t: () => '' };
    return Component;
  }
}));

test('<Author /> should render', () => {
  const component = renderer.create(
    <Author />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
