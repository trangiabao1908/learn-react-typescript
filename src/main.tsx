import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeProvider from "./context/ThemeProvider.tsx";
import ProgressProvider from "./context/ProgressProvider.tsx";
import MovieProvider from "./context/MovieProvider.tsx";
import AuthProvider from "./context/AuthProvider.tsx";
import TopMoviesProvider from "./context/TopMoviesProvider.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <TopMoviesProvider>
    <AuthProvider>
      <MovieProvider>
        <ThemeProvider>
          <ProgressProvider>
            <App />
          </ProgressProvider>
        </ThemeProvider>
      </MovieProvider>
    </AuthProvider>
  </TopMoviesProvider>
);
