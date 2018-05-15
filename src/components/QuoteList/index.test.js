import React from 'react';
import renderer from 'react-test-renderer';

import QuoteList from './';

jest.mock('../Quote', () => 'Quote');

test('<QuoteList /> should render', () => {
  const component = renderer.create(
    <QuoteList />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('<QuoteList /> should render quote list with N quotes', () => {
  const component = renderer.create(
    <QuoteList
      quoteList={[
        {
          ID: 1,
          title: 'Title',
          content: 'Content',
          link: 'Link'
        }
      ]}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
