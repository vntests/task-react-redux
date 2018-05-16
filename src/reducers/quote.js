import { GET_QUOTE_LIST, GET_QUOTE, UPDATE_QUOTE, REMOVE_QUOTE } from '../constants/quote';

const initialState = [];

export const quoteList = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE_LIST:
      return [
        ...state,
        ...action.quoteList
      ];
    case GET_QUOTE:
      return [
        ...state,
        ...action.quote[0]
      ];
    case UPDATE_QUOTE:
      return state.map(quote => {
        return (quote.ID === action.quote.id)
          ? {...quote, ...action.quote}
          : quote;
      });
    case REMOVE_QUOTE:
      return state.filter(item => item !== action.quote);
    default:
      return state;
  }
};
