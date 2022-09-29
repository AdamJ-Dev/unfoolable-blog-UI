import { useContext } from 'react';
import { getProviderError } from '../../utility/get-provider-error';
import CategoryContext from './setup';

const useCategoryContext = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw Error(getProviderError('category'));
  }

  return context;
};

export default useCategoryContext;
