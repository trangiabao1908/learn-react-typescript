import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import Movie from "./components/Movie";
import TopMovies from "./components/TopMovies";
import { Grid } from "@mui/material";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ToggleTheme></ToggleTheme>
      <Grid container>
        <Grid item xs={8}>
          <TopMovies></TopMovies>
        </Grid>
        <Grid item xs={4}>
          <Movie></Movie>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
