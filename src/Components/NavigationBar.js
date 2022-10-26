import { Link } from "react-router-dom";
import '../main.scss'
function NavigationBar(props) {
    return (
        <nav className='navbar is-black' role='navigation' aria-label='main navigation'>
        
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <div className='navbar-item is-size-4 '>
              <a href='/' className='navbar-item has-text-white'>
                Home
              </a>
              <p className="navbar-item has-text-white"><Link to="/Projects">
          PROJECTS
        </Link></p>
            </div>
          </div>
        </div>
      </nav>
    //     <nav>
    //         <h2>
    //     <Link to="/">
    //       Home
    //     </Link>
    //     </h2>
    //     <h2>
    //     <Link to="/Projects">
    //     Projects
    //   </Link>
    //   </h2>
    //   </nav>
    )
  }
  
  export default NavigationBar;