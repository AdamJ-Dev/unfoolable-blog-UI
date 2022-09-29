import { createContext, Dispatch } from 'react';
import { CategoryAction } from './reducer';

export type CategoryState = {
  categories: string[];
  currentCategory: string | null;
};

export type CategoryContext = CategoryState & {
  dispatch: Dispatch<CategoryAction>;
};

export const INITIAL_STATE = {
  currentCategory: null,
  categories: [],
};

const DEFAULT_CONTEXT = {
  ...INITIAL_STATE,
  dispatch: () => null,
};

const CategoryContext = createContext<CategoryContext>(DEFAULT_CONTEXT);
export default CategoryContext;
