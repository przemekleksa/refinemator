import { createReducer } from '@reduxjs/toolkit';
import { addSection, getSections } from './actions';
import { Section } from './types';

export const initState: Section[] = [
  {
    name: 'continue',
    color: 'red',
    id: '1',
    icon: 'test',
    // pros: 'test',
    // cons: 'test',
    visibility: 'test',
  },
  {
    name: 'start',
    color: 'blue',
    id: '2',
    icon: 'test',
    // pros: 'test',
    // cons: 'test',
    visibility: 'test',
  },
];

export const sectionsReducer = createReducer(initState, builder =>
  builder
    .addCase(getSections, (state, { payload }) => {
      state = payload;
      return state;
    })
    .addCase(addSection, (state, { payload }) => {
      // state = [...state, payload];
      // return state;
      state.push(payload); // czy odswierza sie dokumenty?
    })
);
