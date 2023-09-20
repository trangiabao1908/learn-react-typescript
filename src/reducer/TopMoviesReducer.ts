import { MovieActionType } from "./ActionType.ts";
export interface Movie {
  Title: string;
  imdbID: string;
  Watched: boolean;
}
export type MovieStateType = Movie[];
const { Toggle_Get_Movie, Toggle_Set_Watched } = MovieActionType;
export type MovieAction =
  | {
      type: typeof Toggle_Get_Movie;
      payload: Movie[];
    }
  | { type: typeof Toggle_Set_Watched; payload: string };

function TopMoviesReducer(state: MovieStateType, action: MovieAction) {
  switch (action.type) {
    case Toggle_Get_Movie:
      return action.payload;
    case Toggle_Set_Watched:
      return state.map((movie) =>
        movie.imdbID == action.payload
          ? { ...movie, Watched: !movie.Watched }
          : movie
      );
    default:
      return state;
  }
}

export default TopMoviesReducer;
