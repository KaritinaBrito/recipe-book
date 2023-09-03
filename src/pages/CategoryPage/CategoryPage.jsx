import { useParams } from 'react-router'
import './CategoryPage.css'
import { useContext, useEffect } from 'react';
import { MealContext } from '../../context/mealContext';
import { startFetchMealByCategory } from '../../actions/mealActions';
import MealList from '../../components/Meal/MealList';


const Category = () => {
  const {name} = useParams();
  const {categories, dispatch, categoryMeals } = useContext(MealContext);
  let catDescription = '';

  if(categories){
    categories.forEach(category => {
      if(category?.strCategory === name) catDescription = category?.strCategory;
    });
  }

  useEffect(() => {
    startFetchMealByCategory(dispatch, name)
  }, [name, dispatch]);

  console.log(categoryMeals);
  return (
    <>
      <div className='meals-category'>
        <h2>Meals with {name}: </h2>
        <div className="meals-category">
          {
            (categoryMeals?.length) ? <MealList meals={categoryMeals}/> : null
          }

        </div>

      </div>
    </>
  )
}

export default Category;