import { DELETE_USER, EDIT_USER, KEYWORD, SUBMIT } from "./constants";

export const actDeleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};

export const actEditUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

export const actSearch = (keyword) => {
  return {
    type: KEYWORD,
    payload: keyword,
  };
};

export const actSubmit = (user) => {
  return {
    type: SUBMIT,
    payload: user,
  };
};
