import { useContext, useState } from 'react';
import { MealContext } from '../../context/mealContext';
import  { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { startFetchMealBySearch } from '../../actions/mealActions';

const SearchForm = () => {    
    const navigate = useNavigate();
    const { dispatch, meals } = useContext(MealContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSearchTerm = (e) => {
        e.preventDefault();
        if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
            setSearchTerm(e.target.value);
            setErrorMsg("");
        } else {
            setErrorMsg("Invalid search term ...")
        }
    }

    const handleSearchResult = (e) => {
        e.preventDefault();
        navigate("/");
        startFetchMealBySearch(dispatch, searchTerm);
        console.log(meals)
    }

    return (
        <>
            <form className="search-form" onSubmit={(e) => handleSearchResult(e)}>
                <input type="text" className="form-control-input" placeholder="Search recipes here..." onChange={(e) => handleSearchTerm(e)}/>
                <button type="submit" className="form-submit-btn">
                    <BsSearch className='btn-icon'/>
                </button>
            </form>
        </>
    )
}

export default SearchForm