import { useState } from "react"
import { Container } from "react-bootstrap"
import "./App.css"
import MovieList from "./components/MovieList"
import SearchForm from "./components/SearchForm"
import Title from "./components/Title"

function App() {
  const [movieList, setMovieList] = useState([])

  const addMovie = (movie) => {
    const filteredMovies = movieList.filter(
      (item) => item.imdbID !== movie.imdbID
    )
    setMovieList([...filteredMovies, movie])
  }

  const deleteMovie = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this movie from your list?"
      )
    ) {
      setMovieList(movieList.filter((movie) => movie.imdbID !== id))
    }
  }
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm addMovieFunc={addMovie} />
        <MovieList movieList={movieList} deleteMovie={deleteMovie} />
      </Container>
    </div>
  )
}

export default App
