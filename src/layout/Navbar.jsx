import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout, selectToken } from '../features/auth/authSlice';

/**
 * A simple navigation bar that displays "Log In" if the user is not logged in,
 * and "Log Out" if the user is logged in.
 */
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  //
  return (
    <nav>
      <h1>RTK Query JWT Authentication Example</h1>
      <menu>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {token ? (
          <li>
            <a onClick={handleLogout}>Log Out</a>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        )}
      </menu>
    </nav>
  );
}
