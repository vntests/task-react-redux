import { GET_QUOTE_LIST } from '../constants/quote';

const initialState = [];

export const quoteList = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE_LIST:
      return [
        ...state,
        ...action.quoteList
      ];
    default:
      return state;
  }
};
