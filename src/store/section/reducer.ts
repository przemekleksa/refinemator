import { createReducer } from '@reduxjs/toolkit';
import { addSection, getSections } from './actions';
import { Section } from './types';

export const initState: Section[] = [
  {
    name: 'continue',
    color: 'red',
    id: '1',
    icon: 'test',
    visibility: 'test',
  },
  {
    name: 'start',
    color: 'blue',
    id: '2',
    icon: 'test',
    visibility: 'test',
  },
  {
    name: 'continue',
    color: 'orange',
    id: '3',
    icon: 'test',
    visibility: 'test',
  },
  {
    name: 'start',
    color: 'yellow',
    id: '4',
    icon: 'test',
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
      state.push(payload);
    })
);
