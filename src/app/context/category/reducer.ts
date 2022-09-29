import { ActionMap } from '../../types/action-map';
import type { CategoryState } from './setup';

export enum ActionTypes {
  SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY',
  SET_CATEGORIES = 'SET_CATEGORIES',
}

type PayloadMap = {
  [ActionTypes.SET_CURRENT_CATEGORY]: string | null;
  [ActionTypes.SET_CATEGORIES]: string[];
};

export type CategoryAction = ActionMap<PayloadMap>[keyof PayloadMap];

const categoryReducer = (state: CategoryState, action: CategoryAction): CategoryState => {
  switch (action.type) {
    case ActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case ActionTypes.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
  }
};

export default categoryReducer;
