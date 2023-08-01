import { createReducer } from '@reduxjs/toolkit';
import { Card } from './type';
import {
  addCard,
  changeTitle,
  deleteCard,
  getCards,
  incrementCons,
  incrementPros,
} from './actions';

export const initState: Card[] = [
  {
    name: 'continue',
    id: '1',
    pros: 0,
    cons: 0,
    visibility: true,
    sectionId: '1',
  },
  {
    name: 'test',
    id: '2',
    pros: 0,
    cons: 0,
    visibility: true,
    sectionId: '1',
  },
  {
    name: 'test',
    id: '3',
    pros: 0,
    cons: 0,
    visibility: true,
    sectionId: '2',
  },
  {
    name: 'test',
    id: '4',
    pros: 0,
    cons: 0,
    visibility: true,
    sectionId: '1',
  },
];

export const cardsReducer = createReducer(initState, builder =>
  builder
    .addCase(getCards, (state, { payload }) => {
      state = payload;
      return state;
    })
    .addCase(addCard, (state, { payload }) => {
      state.push(payload);
    })
    .addCase(incrementPros, (state, { payload }) => {
      const card = state.find(card => card.id === payload.id);
      if (card) {
        card.pros++;
      }
    })
    .addCase(incrementCons, (state, { payload }) => {
      const card = state.find(card => card.id === payload.id);
      if (card) {
        card.cons++;
      }
    })
    .addCase(deleteCard, (state, { payload }) => {
      const card = state.find(card => card.id === payload.id);
      if (card) {
        card.visibility = false;
      }
    })
    .addCase(changeTitle, (state, { payload }) => {
      const card = state.find(card => card.id === payload.id);
      if (card) {
        card.name = payload.name;
      }
    })
);
