import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom'

function NavBar() {

  return (
    <div data-theme="forest" className='border-double border-b-2'>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-primary btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/category/sport">Sport</Link>
              </li>
              <li>
                <Link to="/category/onoff">On-Off</Link>
              </li>
              <li>
                <Link to="">Proximamente...</Link>
              </li>
              <li>
                <Link to="">Proximamente...</Link>
              </li>
              <li>
                <Link to="">Proximamente...</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <Link to="/" class="btn btn-primary normal-case text-xl">NaKed World</Link>
        </div>
        <div class="navbar-end">
          <Link to="/cart" class="btn btn-primary btn-circle">
            <CartWidget/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
