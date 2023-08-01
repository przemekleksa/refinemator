import { createAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

export const getCards = createAction('cards/getCards', () => {
  return {
    payload: [],
  };
});

export const addCard = createAction('cards/addCard', (sectionId: string) => {
  return {
    payload: {
      name: 'Enter a title',
      id: v4(),
      pros: 0,
      cons: 0,
      visibility: true,
      sectionId: sectionId,
    },
  };
});

export const incrementPros = createAction('cards/incrementPros', (id: string) => ({
  payload: { id },
}));

export const incrementCons = createAction('cards/incrementCons', (id: string) => ({
  payload: { id },
}));

export const changeTitle = createAction('cards/changeTitle', (id: string, name: string) => ({
  payload: { id, name },
}));

export const deleteCard = createAction('cards/deleteCard', (id: string) => ({
  payload: { id },
}));
