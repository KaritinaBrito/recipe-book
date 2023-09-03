import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SidebarContext } from '../../context/sidebarContatext';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import './Sidebar.css';
import { MealContext } from '../../context/mealContext';

const Sidebar = () => {
  const {closeSidebar, isSidebarOpen} = useContext(SidebarContext);
  const {categories } = useContext(MealContext)
  
  return (
    <>
      <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ''}`}>
        <button type='button' className='sidebar-hide-btn' onClick={()=> closeSidebar()}>
          <AiOutlineCloseCircle/>
        </button>

        <div className="sidebar-content">
          <ul className='sidebar-nav'>
            {
              categories.map(category => (
                <li className='sidebar-item' key={category.idCategory}>
                  <Link to={`/meal/category/${category.strCategory}`} className='sidebar-link' onClick={()=> closeSidebar()}>
                    {category.strCategory}
                  </Link>
                </li>

              ))
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Sidebar