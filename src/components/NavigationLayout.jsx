import { Outlet, NavLink } from "react-router-dom";
import './NavigationLayout.css';

function NavigationLayout() {

  const baseURL = import.meta.env.BASE_URL;

  return (
    <div>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink
              to={baseURL + 'dummyTable'}
              className={({ isActive }) =>
                isActive ? "active nav-list-item-link" : "nav-list-item-link"
              }
            >
              dummyTable
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              to={baseURL + 'dummyChart'}
              className={({ isActive }) =>
                isActive ? "active nav-list-item-link" : "nav-list-item-link"
              }
            >
              dummyChart
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              to={baseURL + 'dummyList'}
              className={({ isActive }) =>
                isActive ? "active nav-list-item-link" : "nav-list-item-link"
              }
            >
              dummyList
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet className="router-outlet" />
    </div>
  );
}

export default NavigationLayout;
