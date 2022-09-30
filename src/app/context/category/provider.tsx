import { useReducer } from 'react';
import CategoryContext, { INITIAL_STATE } from './setup';
import categoryReducer from './reducer';

type CategoryContextProviderProps = {
  children: React.ReactNode;
};

const CategoryContextProvider: React.FC<CategoryContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, INITIAL_STATE);

  return <CategoryContext.Provider value={{ ...state, dispatch }}>{children}</CategoryContext.Provider>;
};

export default CategoryContextProvider;
