import React from 'react';
import renderer from 'react-test-renderer';

import Quote from './';

test('<Quote /> should render', () => {
  const component = renderer.create(
    <Quote />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('<Quote /> should render quote with title "Title", content "Content", link "Link"', () => {
  const component = renderer.create(
    <Quote
      title="Title"
      content="Content"
      link="Link"
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
