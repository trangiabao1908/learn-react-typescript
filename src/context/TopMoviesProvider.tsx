import React, { createContext, useReducer } from "react";
import TopMoviesReducer, { MovieStateType } from "../reducer/TopMoviesReducer";
import { MovieActionType } from "../reducer/ActionType";
import getTopMoviesInfo from "../api/getInfoMovies";
interface Props {
  children: React.ReactNode;
}
export interface TopMoviesContextType {
  movies: MovieStateType;
  getTopMovies: () => Promise<void>;
  handleSetWatched: (imbID: string) => void;
}

const TopMovieStateDefaults: MovieStateType = [];
export const TopMoviesContext = createContext<TopMoviesContextType>({
  movies: TopMovieStateDefaults,
  getTopMovies: () => Promise.resolve(void 0),
  handleSetWatched: () => {},
});

const TopMoviesProvider = ({ children }: Props) => {
  const { Toggle_Get_Movie, Toggle_Set_Watched } = MovieActionType;
  const [movies, dispatch] = useReducer(
    TopMoviesReducer,
    TopMovieStateDefaults
  );
  const getTopMovies = async () => {
    const res = await Promise.all(getTopMoviesInfo);
    dispatch({
      type: Toggle_Get_Movie,
      payload: res.map((movie) => ({ ...movie, Watched: false })),
    });
  };
  const handleSetWatched = (imbID: string) => {
    dispatch({ type: Toggle_Set_Watched, payload: imbID });
  };
  return (
    <TopMoviesContext.Provider
      value={{ movies, getTopMovies, handleSetWatched }}
    >
      {children}
    </TopMoviesContext.Provider>
  );
};

export default TopMoviesProvider;
