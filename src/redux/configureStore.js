import { combineReducers, configureStore } from '@reduxjs/toolkit';
import skillsSlice from './skills';

const reducer = combineReducers({
  skillsSl: skillsSlice,
});

const store = configureStore({ reducer });

export default store;
