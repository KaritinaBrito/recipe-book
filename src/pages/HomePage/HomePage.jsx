import { useContext } from 'react';
import { MealContext } from '../../context/mealContext';
import './HomePage.css';
import Loader from '../../components/Loader/Loader';
import CategoryList from '../../components/Category/CategoryList';
import NotFound from '../../components/NotFound/NotFound';
import MealList from '../../components/Meal/MealList';
const Home = () => {
  const {meals, categories, categoryLoading, mealsLoading } = useContext(MealContext);
  console.log(meals);
  return (
    <>
      <main className='main-content'>
        {(mealsLoading) ? <Loader/> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals={meals}/> : ""}
        { (categoryLoading) ? <Loader/> : <CategoryList categories = {categories}/> }
      </main>
    </>
  )
}

export default Home;