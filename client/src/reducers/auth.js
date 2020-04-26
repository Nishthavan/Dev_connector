import {REGISTER_SUCCESS,REGISTER_FAIL,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT } from "../actions/constants";

const intitialState = {
  token : localStorage.getItem("token"),
  isAuth: null,
  loading: true,
  user: null
}

export default function(state = intitialState, action){
  const {type,payload} = action;
  switch(type){
    case USER_LOADED:
      return {
        ...state,
        isAuth:true,
        loading: false,
        user:payload
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
     localStorage.setItem("token",payload.token);
     return{
       ...state,
       ...payload,
       isAuth: true,
       loading: false
     }
     case REGISTER_FAIL:
     case LOGOUT:
     case AUTH_ERROR:
     case LOGIN_FAIL:
       localStorage.removeItem("token");
       return{
         ...state,
         ...payload,
         isAuth: false,
         loading: false
       }
       default:
         return state;
  }
}
