import { SET_CURRENT_USER, GET_USERS, GET_USER } from "../actions/types";

const initialState = {
  user: {},
  users: {},
  singleUser: {},
  data: [],
  userData:[], 
  validToken: false,
};

const booleanPayload = (payload) => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};

export default function setUser(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        validToken: booleanPayload(action.payload),
        user: action.payload,
      };
       case GET_USERS:
        return {
          ...state,
          users: action.payload,
          data: action.payload.data,
        };
        case GET_USER:
          return {
            ...state,
            singleUser: action.payload,
            userData: action.payload.data,
          }; 

    default:
      return state;
  }
}
