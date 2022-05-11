import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom'
import useCartContext from "../store/CartContext";

function NavBar() {
  return (
    <div className='border-double border-b-2'>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
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
                <Link to="">Homepage</Link>
              </li>
              <li>
                <Link to="/category/Ford">Ford</Link>
              </li>
              <li>
                <Link to="/category/BMW">BMW</Link>
              </li>
              <li>
                <Link to="/category/Pontiac">Pontiac</Link>
              </li>
              <li>
                <Link to="/category/Lexus">Lexus</Link>
              </li>
              <li>
                <Link to="/category/Mercedes-Benz">Mercedes-Benz</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <Link to="" class="btn btn-ghost normal-case text-xl">The Classic Cars</Link>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <Link to="/cart" class="btn btn-ghost btn-circle">
            <CartWidget/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
