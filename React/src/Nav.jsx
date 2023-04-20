import fitbook from './assets/FITBOOK.png';
import './Nav.css';

const Navbar = () => {
    return (
        <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom customBackgroundColor">
          <a href={'/'} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src={fitbook} alt="fitbook" width="300" height="50" />
          </a>
    
          <ul className="nav">
            <li className="nav-item"><a href={'/'} className="nav-link text-white" aria-current="page">Main</a></li>
            <li className="nav-item"><a href={'/Login'} className="nav-link text-white">Log in</a></li>
            <li className="nav-item"><a href={'/Signup'} className="nav-link text-white">Sign up</a></li>
            <li className="nav-item"><a href={'/Create'} className="nav-link text-white">Create</a></li>
            <li className="nav-item"><a href={'/Update'} className="nav-link text-white">Update</a></li>
            <li className="nav-item"><a href={'/Profile'} className="nav-link text-white">Profile</a></li>
          </ul>
        </header>
    </div>

    )
}


export default Navbar
