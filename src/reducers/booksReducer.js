
export const SET_IS_READY = "SET_IS_READY"
export const SET_BOOKS = "SET_BOOKS"

const initialState = {
    isReady: false,
    items: null
  };
  
export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_BOOKS:
        return {
          ...state,
          items: action.payload,
          isReady: true
        };
      default:
        return state;
    }
  };
