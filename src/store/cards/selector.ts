import { Card } from './type';

export const getCards = (state: { cards: Card[] }) => state.cards;

export const getCardById = (state: { cards: Card[] }, id: string) =>
  state.cards.find(card => card.id === id);

export const getCardsBySectionId = (sectionId: string) => (state: { cards: Card[] }) =>
  state.cards.filter(card => card.sectionId === sectionId);
