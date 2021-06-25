import { Link } from 'react-router-dom';


const Navbar = () => {
  return(
    <ul className="navbar">
      <li>
        <Link to="/">Main logo</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  );
}

export default Navbar;
