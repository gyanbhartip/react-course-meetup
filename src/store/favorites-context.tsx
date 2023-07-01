import React from "react";
import { Meetup, MeetupsArray } from "../utils/types";

const FavoritesContext = React.createContext({
  favorites: [] as MeetupsArray,
  totalFavorites: 0,
  addFavorite: (favoriteMeetup: Meetup) => {
    console.log("addFavorite", favoriteMeetup);
  },
  removeFavorite: (meetupId: string) => {
    console.log("removeFavorite", meetupId);
  },
  itemIsFavorite: (meetupId: string): boolean => {
    console.log("itemIsFavorite", meetupId);
    return false;
  },
});

const FavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userFavorites, setUserFavorites] = React.useState<MeetupsArray>([]);

  const addFavoriteHandler = (favoriteMeetup: Meetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetupId: string) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId: string) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesContextProvider };
