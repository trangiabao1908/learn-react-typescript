import React, { useContext, useState } from "react";
import { Box, Button, TextField, Chip } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { MovieContext, MovieType } from "../context/MovieProvider";

const Movie: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { movies, setMovies } = useContext<MovieType>(MovieContext);
  const [movie, setMovie] = useState<string>("");
  const handleSetMovie = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMovie(e.target.value);
  };
  // console.log(uuid());
  const handleAddMovie = (name: string) => {
    setMovies([...movies, { id: uuidv4(), name }]);
    setMovie("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleDeleteMovie = (id: string) => {
    const newMovies = movies.filter((m) => m.id != id);
    setMovies(newMovies);
  };

  return (
    <React.Fragment>
      <Box
        justifyContent={"center"}
        display={"flex"}
        mt={"20px"}
        my={5}
        alignItems={"center"}
        sx={{ userSelect: "none", height: "60px" }}
      >
        <TextField
          ref={inputRef}
          variant="outlined"
          id="outlined-basic"
          label="Input Movie"
          value={movie}
          onChange={(e) => handleSetMovie(e)}
        ></TextField>
        <Button
          variant="contained"
          sx={{ ml: "10px", height: "56px" }}
          color="primary"
          onClick={() => handleAddMovie(movie)}
        >
          Add Movie
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        mx={5}
      >
        {movies.map((movie) => {
          return (
            <Chip
              key={movie.id}
              label={movie.name}
              clickable
              color="primary"
              sx={{ margin: "5px" }}
              onDelete={() => handleDeleteMovie(movie.id)}
            ></Chip>
          );
        })}
      </Box>
    </React.Fragment>
  ); //
};

export default Movie;
