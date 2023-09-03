import './Loader.css';
import { loader } from '../../utils/images';

const Loader = () => {
  return (
    <>
      <div className='loader'>
        <div className='loader-container'>
          <img src={loader} alt="" />
        </div>
      </div>
    </>
  )
}

export default Loader