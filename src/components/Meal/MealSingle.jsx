import {Link} from 'react-router-dom';
import {AiFillHome, AiOutlineCheckCircle} from 'react-icons/ai';
import {BsChevronDoubleRight} from 'react-icons/bs';
import {FaUtensilSpoon} from 'react-icons/fa';
import './Meal.css';

const MealSingle = ({meals}) => {

  let tags = meals?.tags?.split(',');
  let instructions = meals?.instructions?.split('\r\n');
  instructions = instructions?.filter(instruction => instruction.length > 1);

  return (
    <>
      <div className="meal-single">
        <div className="meal-single-container">
          <ul className="meal-single-container-list">
            <li className="list-item">
              <Link to="/" className='home-icon'>
                <AiFillHome/>
              </Link>
            </li>
            <li>
              <BsChevronDoubleRight/>
            </li>
            <li className="list-item-info">
              <span to="">{meals?.title}</span>
            </li>
          </ul>
          <h2>Meal Details</h2>
          <section className="meal-details">
            <div className="meal-details-container">
              <div className="meal-details-img">
                <img src={meals?.thumbnail} alt={meals?.title} />
              </div>
              <div className="meal-details-intro">
                <span  className="meal-detail-intro-title" to="">{meals?.title}</span>
                <div className='meal-details-intro-category'>
                  <span >category: &nbsp;</span>
                  <h3>{meals?.category}</h3>
                </div>

              <div className="meal-source">
                <span >Source: &nbsp;</span>
                <a>{meals.source ? (meals?.source).substring(0,40) + "..." : "Not Found"}</a>
              </div>
              <div className="meal-tags">
                <h6>Tags:</h6>
                <ul className='meal-tags-list'>
                  {
                    tags?.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                    ))
                  }
                </ul>
              </div>
              <div className="meal-ingredients">
                <h6>Ingredientes:</h6>
                <ul className='meal-ingredients-list'>
                  {
                    meals?.ingredients?.map((ingredient, idx)=> (
                      <li key={idx}>
                        <span className='li-dot'>{idx + 1}</span>
                        <span className='li-ingredients'>{ingredient}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
              </div>
            </div>
              
              <div className="meal-measures">
                <h6>Measure: </h6>
                <ul>
                  {
                    meals?.measures?.map((measure, idx) => (
                      <li key={idx}>
                        <span className='spoon-list'>
                          <FaUtensilSpoon/>
                        </span>
                        <span>{measure}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="meal-instructions">
                <h6>Instructions: </h6>
                <ul>
                  {
                    instructions?.map((instruction, idx) => (
                      <li key={idx}>
                        <span className='check-instruction'>
                          <AiOutlineCheckCircle />
                        </span>
                        <span>{instruction}</span>
                      </li>
                    ))
                  }
                </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default MealSingle