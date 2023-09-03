import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryList from '../../components/Category/CategoryList';
import MealSingle from '../../components/Meal/MealSingle';
import { MealContext } from '../../context/mealContext';
import {startFetchSingleMeal} from '../../actions/mealActions';
import Loader from '../../components/Loader/Loader';

import './MealDetailsPage.css';

const MealDetails = () => {
  const {id} = useParams();
  const {categories, dispatch, meals, categoryLoading, mealsLoading } = useContext(MealContext);

  
  useEffect(() => {
    startFetchSingleMeal(dispatch, id);
  }, [id]);
  
  let ingredientsArr = [], measuresArr = [], singleMeal = {};
  if(meals && meals?.length > 0){
    for(let props in meals[0]){
      if(props.includes('strIngredient')){
        if(meals[0][props]) ingredientsArr.push(meals[0][props]);
      }

      if(props.includes('strMeasure')){
        if(meals[0][props]){
          if(meals[0][props].length > 1){
            measuresArr.push(meals[0][props]);
          }
        }
      }
    }
    singleMeal ={
      id: meals[0]?.idMeal,
      title: meals[0]?.strMeal,
      category: meals[0]?.strCategory,
      area: meals[0]?.strArea,
      thumbnail: meals[0]?.strMealThumb,
      instructions: meals[0]?.strInstructions,
      source: meals[0]?.strSource,
      tags: meals[0]?.strTags,
      youtube: meals[0]?.strYoutube,
      ingredients: ingredientsArr,
      measures: measuresArr,
    }
    console.log(ingredientsArr, measuresArr);
  }
  return (
    <>
      <main className='meal-single-page'>
        { (mealsLoading) ? <Loader/> : <MealSingle meals={singleMeal}/> }
        { (categoryLoading) ? <Loader/> : <CategoryList categories={categories}/>}
      </main>
    </>
  )
}

export default MealDetails;