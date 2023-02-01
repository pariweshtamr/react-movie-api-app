import React from "react"
import { Button, Card } from "react-bootstrap"

const CustomCard = ({
  movie,
  addMovieFunc,
  removeDisplay,
  deleteMovie,
  isDelete,
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={movie?.Poster} />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Text>
          Rating: {movie?.imdbRating}
          <br />
          Year: {movie?.Year}
        </Card.Text>

        {isDelete ? (
          <div className="d-grid">
            <Button onClick={() => deleteMovie(movie.imdbID)} variant="danger">
              Delete
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            <Button
              onClick={() => addMovieFunc({ ...movie, type: "happy" })}
              variant="danger"
            >
              Happy
            </Button>
            <i className="fa-solid fa-circle-xmark" onClick={removeDisplay}></i>
            <Button
              onClick={() => addMovieFunc({ ...movie, type: "lazy" })}
              variant="warning"
            >
              Lazy
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

export default CustomCard
