import './Header.css';
import SearchForm from './SearchForm';

import Navbar from './Navbar';
const Header = () => {
  return (
    <>
      <header>
        <Navbar/>
        <div className='header-content'>
          <SearchForm/>
          <h1>What are your favorite cuisines ?</h1>
          <p>personalize your experience</p>
        </div>
      </header>
    </>
  )
}

export default Header