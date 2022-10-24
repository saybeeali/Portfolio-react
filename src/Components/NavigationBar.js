import { Link } from "react-router-dom";
function NavigationBar(props) {
    return (
        <nav>
            <h2>
        <Link to="/">
          Home
        </Link>
        </h2>
        <h2>
        <Link to="/Projects">
        Projects
      </Link>
      </h2>
      </nav>
    )
  }
  
  export default NavigationBar;