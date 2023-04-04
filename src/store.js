import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
