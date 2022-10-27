import { Link } from "react-router-dom";
import '../main.scss'
function NavigationBar(props) {
    return (
        <nav className='navbar is-black' role='navigation' aria-label='main navigation'>
        
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <div className='navbar-item is-size-4 '>
            <Link to="/">
          Home
        </Link>
              <p className="navbar-item has-text-white"><Link to="/Projects">
          Projects
        </Link></p>
            </div>
          </div>
        </div>
      </nav>

    )
  }
  
  export default NavigationBar;