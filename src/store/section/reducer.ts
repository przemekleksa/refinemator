import { Action } from '../types';
import { SectionState } from './types';

export const initState: SectionState = {
  sections: [],
};

export const sectionsReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case 'ADD_SECTION':
      return {
        ...state,
        sections: [...state.sections, action.payload],
      };
    default:
      return state;
  }
};
