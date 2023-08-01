import { combineReducers } from '@reduxjs/toolkit';
import { sectionsReducer } from './section/reducer';
import { cardsReducer } from './cards/reducer';

export const rootReducer = combineReducers({
  sections: sectionsReducer,
  cards: cardsReducer,
});
