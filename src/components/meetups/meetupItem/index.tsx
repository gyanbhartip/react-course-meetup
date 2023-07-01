import React from "react";
import { FavoritesContext } from "../../../store/favorites-context";
import Card from "../../ui/card";
import styles from "./MeetupItem.module.css";
type Props = {
  address: string;
  description: string;
  id: string;
  image: string;
  title: string;
};

const MeetupItem: React.FC<Props> = ({
  address,
  description,
  id,
  image,
  title,
}) => {
  const { addFavorite, itemIsFavorite, removeFavorite } =
    React.useContext(FavoritesContext);

  const _itemIsFavorite = itemIsFavorite(id);

  const toggleFavoriteStatusHandler = () => {
    if (_itemIsFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({
        address,
        description,
        id,
        image,
        title,
      });
    }
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {_itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
