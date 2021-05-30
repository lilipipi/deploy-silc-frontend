import axios from "axios";
import setToken from "../securityUtils/setToken";
import { GET_ERRORS, SET_CURRENT_USER, GET_USERS, GET_USER } from "./types";

export const createNewUser = (newUser, history) => async (dispatch) => {
  try {
    await axios.post(
      "https://immense-refuge-04404.herokuapp.com/api/register",
      newUser
    );
    history.push("/SignIn");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const login = (LoginRequest) => async (dispatch) => {
  try {
    //post => login request
    const res = await axios.post(
      "https://immense-refuge-04404.herokuapp.com/api/login",
      LoginRequest
    );
    //extract token from data
    const token = res.data.data.token;
    console.log(res);
    //store token in local storage
    localStorage.setItem("token", token);
    //set token in header
    setToken(token);
    //get data from response
    const decoded = {
      name: res.data.data.name,
      id: res.data.data.id,
    };
    localStorage.setItem("id", decoded.id);
    //dispatch to securityReducer
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error,
    });
  }
};

export const adminLogin = (LoginRequest) => async (dispatch) => {
  try {
    //post => login request
    const res = await axios.post(
      "https://immense-refuge-04404.herokuapp.com/api/adminLogin",
      LoginRequest
    );
    //extract token from data
    const token = res.data.data.token;
    console.log(res);
    //store token in local storage
    localStorage.setItem("token", token);
    //set token in header
    setToken(token);
    //get data from response
    const decoded = {
      name: res.data.data.name,
      id: res.data.data.id,
    };
    localStorage.setItem("id", decoded.id);
    //dispatch to securityReducer
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  setToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: null,
  });
};

export const adminLogout = () => (dispatch) => {
  localStorage.removeItem("token");
  setToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: null,
  });
};

export const getUsers = () => async (dispatch) => {
  const res = await axios.get(
    `https://immense-refuge-04404.herokuapp.com/api/users`
  );
  dispatch({
    type: GET_USERS,
    payload: res.data,
  });
};

export const getUser = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://immense-refuge-04404.herokuapp.com/api/user/${id}`
  );
  dispatch({
    type: GET_USER,
    payload: res.data,
  });
};

export const updateUser = (id, updateUser) => async (dispatch) => {
  try {
    await axios.put(
      `https://immense-refuge-04404.herokuapp.com/api/user/${id}`,
      updateUser
    );
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
