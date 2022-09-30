import { ChangeEvent } from 'react';
import { CATEGORY_FILTER_DEFAULT } from '../../../../constants/category';
import { ActionTypes } from '../../../../context/category/reducer';
import useCategoryContext from '../../../../context/category/use-category';
import { capitilize } from '../../../../utility/format/to-title-case';

const CategoryFilter: React.FC = () => {
  const { dispatch, currentCategory, categories } = useCategoryContext();

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const newCategory = e.currentTarget.value;
    dispatch({
      type: ActionTypes.SET_CURRENT_CATEGORY,
      payload: newCategory !== CATEGORY_FILTER_DEFAULT ? newCategory : null,
    });
  };

  return (
    <div>
      <label htmlFor="select-category">
        <strong>Category:</strong>
      </label>{' '}
      <select
        id="select-category"
        title="category"
        defaultValue={currentCategory || CATEGORY_FILTER_DEFAULT}
        onChange={handleCategoryChange}
      >
        <option value={CATEGORY_FILTER_DEFAULT}>{CATEGORY_FILTER_DEFAULT}</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {capitilize(category)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
