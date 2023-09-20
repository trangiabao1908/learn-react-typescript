import React, { createContext, useState } from "react";
interface Props {
  children: React.ReactNode;
}
export interface MovieType {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}
export interface Movie {
  name: string;
  id: string;
}
export const MovieContext = createContext<MovieType>(null!);
const MovieProvider: React.FC<Props> = (props) => {
  const { children } = props;

  const [movies, setMovies] = useState<Movie[]>([]);
  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
