import { QUOTE_LIST_API_URL, GET_QUOTE_LIST } from '../constants/quote';

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
