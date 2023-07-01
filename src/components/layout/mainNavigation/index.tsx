import React from "react";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from "../../../store/favorites-context";
import styles from "./MainNavigation.module.css";

type Props = unknown;

const MainNavigation: React.FC<Props> = () => {
  const { totalFavorites } = React.useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">All Meetups</NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup">Add New Meetup</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              My Favorites{" "}
              <span className={styles.badge}>{totalFavorites}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
