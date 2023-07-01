import React from "react";
import MeetupList from "../components/meetups/meetupList";
import { FavoritesContext } from "../store/favorites-context";

type Props = unknown;

const FavoritesPage: React.FC<Props> = () => {
  const { favorites, totalFavorites } = React.useContext(FavoritesContext);

  return (
    <section>
      <h1>FavoritesPage</h1>
      {totalFavorites === 0 ? (
        <p>You got no favorites. Start adding some?</p>
      ) : (
        <MeetupList meetups={favorites} />
      )}
    </section>
  );
};

export default FavoritesPage;
