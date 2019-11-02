import { createStore } from 'redux';
import { combineReducers } from "redux";

import menu from './menu';

const state = {
  menu,
};

export default createStore(combineReducers(state));
