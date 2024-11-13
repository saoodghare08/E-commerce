// src/redux/actions.js
export const ADD_TO_CART = "ADD_TO_CART";
export const SET_FILTER = "SET_FILTER";
export const SET_SORT = "SET_SORT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGOUT = "LOGOUT";
export const AUTH_ERROR = "AUTH_ERROR";

// Action to handle login success
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// Action to handle register success
export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

// Action to handle logout
export const logout = () => ({
  type: LOGOUT,
});

// Action to handle authentication errors
export const authError = (error) => ({
  type: AUTH_ERROR,
  payload: error,
});

// Action for login request (to be used with API call)
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token); // Save JWT token in localStorage
      dispatch(loginSuccess(data.user));
    } else {
      const error = await response.json();
      dispatch(authError(error.message));
    }
  } catch (error) {
    dispatch(authError(error.message));
  }
};

// Action for register request
export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token); // Save JWT token in localStorage
      dispatch(registerSuccess(data.user));
    } else {
      const error = await response.json();
      dispatch(authError(error.message));
    }
  } catch (error) {
    dispatch(authError(error.message));
  }
};

// Action for logout (clear localStorage)
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logout());
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

export const setSort = (sortOption) => {
  return {
    type: SET_SORT,
    payload: sortOption,
  };
};
