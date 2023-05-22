import fitbook from './assets/FITBOOK.png';
import './Nav.css';
import { userData } from './api/Session';


const Navbar = () => {
  
  
  return (

  <div  className='header1'>
    <a href={'/'}> <img className='fit' src={fitbook} alt='fitbook'/> </a>
        
      <div className='nav-ul'>
      <div className='nav'>
        <ul>
          <li className='nav-item'>
            <a href={'/'} className='nav-link' aria-current='page'>
              Main
            </a>
          </li>
          <li className='nav-item'>
            <a href={'/Community'} className='nav-link' aria-current='page'>
              Community
            </a>
          </li>
          {userData && (
          <li className='nav-item'>
            <a href='/Dashboard' className='nav-link'>
              Dashboard
            </a>
          </li> )}
       {/* <li className='nav-item'>
            <a href={'/Profile'} className='nav-link'>
              Profile
            </a>
          </li>
          <li className='nav-item'>
            <a href={'/Create'} className='nav-link'>
              Create
            </a>
          </li>
          <li className='nav-item'>
            <a href={'/Edit'} className='nav-link'>
              Edit
            </a>
          </li>
          <li className='nav-item'>
            <a href={'/Card'} className='nav-link'>
              Card
            </a>
          </li> */}
        </ul>
      </div>

        <div className='nav-sign'>
        <ul>
        {!userData && (
          <li className='nav-item'>
            <a href={'/Login'} className='nav-link'>
              Sign in 
            </a>
          </li>)}
          {!userData && (
          <li className='nav-item'>
            <a href={'/Signup'} className='nav-link'>
              Register 
            </a>
          </li>)}
        </ul>
        </div>
    </div>
  </div>
  );
};

export default Navbar;
