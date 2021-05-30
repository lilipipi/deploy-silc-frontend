import axios from "axios";
import {
  GET_ERRORS,
  GET_ASSETS,
  GET_ASSET,
  GET_ASSETS_ADMIN,
  GET_ASSET_ADMIN,
  GET_USER_ASSETS,
} from "./types";

export const createAsset = (asset, history) => async (dispatch) => {
  try {
    await axios.post(
      "https://immense-refuge-04404.herokuapp.com/api/asset/create",
      asset
    );
    history.push("/AMDashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};

export const getAssets = () => async (dispatch) => {
  const res = await axios.get(
    "https://immense-refuge-04404.herokuapp.com/api/asset"
  );
  dispatch({
    type: GET_ASSETS,
    payload: res.data,
  });
};

export const getAsset = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://immense-refuge-04404.herokuapp.com/api/asset/${id}`
  );
  dispatch({
    type: GET_ASSET,
    payload: res.data,
  });
};

export const getAdminAssets = () => async (dispatch) => {
  const res = await axios.get(
    "https://immense-refuge-04404.herokuapp.com/api/admin/asset"
  );
  dispatch({
    type: GET_ASSETS_ADMIN,
    payload: res.data,
  });
};

export const getAdminAsset = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://immense-refuge-04404.herokuapp.com/api/admin/asset/${id}`
  );
  dispatch({
    type: GET_ASSET_ADMIN,
    payload: res.data,
  });
};

export const getUserAssets = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://immense-refuge-04404.herokuapp.com/api/user/assets/${id}`
  );
  dispatch({
    type: GET_USER_ASSETS,
    payload: res.data,
  });
};
