import { Link } from "react-router-dom";
import './Category.css';

const CategoryList = ({categories}) => {
    return (
        <div className="section-wrapper">
            <div className="categoriesList-container">
                <div className="categoriesList-title">Categories</div>
                <section className="category-section">
                    {
                        categories.map(category =>{
                            console.log(categories)
                            const {idCategory: id, strCategory: title, strCategoryThumb: thumbnail} = category;

                            return(
                                <Link to={`/meal/category/${title}`} className="category-item" key={id}>
                                    <div className="category-item-img">
                                        <img src={thumbnail} alt={title} />
                                        <div className="category-item-title">
                                            <h3>{title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </section>
            </div>
        </div>
    )
}

export default CategoryList