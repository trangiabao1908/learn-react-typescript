import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { TopMoviesContext } from "../context/TopMoviesProvider";
import { TopMoviesContextType } from "../context/TopMoviesProvider";
const TopMovies = () => {
  const { movies, getTopMovies, handleSetWatched } =
    useContext<TopMoviesContextType>(TopMoviesContext);

  useEffect(() => {
    getTopMovies();
  }, []);
  return (
    <Box mt={"20px"} my={5}>
      <Card raised>
        <CardHeader
          title="Top Movies Of The Year"
          titleTypographyProps={{
            variant: "h4",
            align: "center",
            color: "primary",
          }}
        ></CardHeader>
        <CardContent>
          <List>
            {movies.map((movie) => {
              return (
                <ListItem key={movie.imdbID} button>
                  <ListItemIcon>
                    <Checkbox
                      checked={movie.Watched}
                      onClick={handleSetWatched.bind(this, movie.imdbID)}
                    ></Checkbox>
                  </ListItemIcon>
                  <ListItemText primary={movie.Title} />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovies;
