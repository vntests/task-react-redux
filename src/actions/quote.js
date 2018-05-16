import { QUOTE_LIST_API_URL, GET_QUOTE_LIST, UPDATE_QUOTE, REMOVE_QUOTE } from '../constants/quote';

export const getQuoteList = ({
  orderby  = 'rand',
  postsPerPage = 1
}) => dispatch => {
  const URL = `${QUOTE_LIST_API_URL}?filter[orderby]=${orderby}&filter[posts_per_page]=${postsPerPage}`;

  return fetch(URL, { cache: 'no-store' })
    .then(response => response.json())
    .then(quoteList => {
      dispatch({
        type: GET_QUOTE_LIST,
        quoteList
      })
    })
    .catch(err => { console.error(err) });
};

export const updateQuote = quote => ({
  type: UPDATE_QUOTE,
  quote
})

export const removeQuote = quote => ({
  type: REMOVE_QUOTE,
  quote
});
