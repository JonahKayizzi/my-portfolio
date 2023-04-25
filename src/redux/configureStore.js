import { combineReducers, configureStore } from '@reduxjs/toolkit';
import skillsSlice from './skills';
import projectsSlice from './projects';
import employmentsSlice from './employment';

const reducer = combineReducers({
  skillsSl: skillsSlice,
  projectsSli: projectsSlice,
  employmentsSl: employmentsSlice,
});

const store = configureStore({ reducer });

export default store;
