import { combineReducers, configureStore } from '@reduxjs/toolkit';
import skillsSlice from './skills';
import projectsSlice from './projects';

const reducer = combineReducers({
  skillsSl: skillsSlice,
  projectsSli: projectsSlice,
});

const store = configureStore({ reducer });

export default store;
