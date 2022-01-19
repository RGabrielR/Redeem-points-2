import * as t from '../types';

const initialState = {
  loading: false,
  user: {},
  error: ''
}

const userReducer = (state = initialState ,  action) => {
  
    switch(action.type) {
        case t.FETCH_USER_REQUEST:
        return {
          ...state,
          loading: false
        }
        case t.FETCH_USER_SUCCESS:
        return {
          loading: true,
          user: action.payload,
          error: ''
          }
        case t.FETCH_USER_ERROR:
        return {
          loading: true,
          user: [],
          error: action.payload
        }
        default:
        return state;
    }
}

export default userReducer;