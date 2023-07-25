import { combineReducers } from '@reduxjs/toolkit';
import { sectionsReducer } from './section/reducer';

export const rootReducer = combineReducers({
  sections: sectionsReducer,
});
