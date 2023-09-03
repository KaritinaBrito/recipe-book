import './Meal.css';
import {Link} from 'react-router-dom';

const MealList = ({meals}) => {
  return (
    <>
      <div className="mealList-wrapper">
        <div className="mealList-title">Meals</div>
        <section className='mealList-section'>
          {
            meals?.map(mealItem =>{
              const { idMeal: id, strArea: area, strCategory: category, strMeal: meal, strMealThumb:  thumbnail} = mealItem;
              return (
                <Link to={`/meal/${id}`} key={id} className='meal-item'>
                  <div className='meal-item-img'>
                    <img src={thumbnail} alt={meal} />
                    <div className="meal-item-cat">{category}</div>
                  </div>

                  <div className="meal-item-body-info">
                    <div className="meal-item-area">{area}</div>
                    <div className="meal-item-meal">{meal}</div>
                  </div>
                </Link>
              )
            })
          }
        </section>
      </div>
    </>
  )
}

export default MealList;