import { createAction } from '@reduxjs/toolkit';
import { Section } from './types';

export const getSections = createAction('sections/getSections', () => {
  return {
    payload: [],
  };
});

export const addSection = createAction('sections/addSection', (section: Section) => {
  return {
    payload: section,
  };
});
