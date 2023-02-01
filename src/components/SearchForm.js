import React, { useState } from "react"
import { Alert, Button, Col, Form, Row } from "react-bootstrap"
import { fetchData } from "../helpers/axiosHelper"
import CustomCard from "./CustomCard"

const SearchForm = ({ addMovieFunc }) => {
  const [movieName, setMovieName] = useState("")
  const [movie, setMovie] = useState({})
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { value } = e.target
    setMovieName(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMovie({})
    setError(false)

    const result = await fetchData(movieName)
    if (result.Response === "True") {
      setMovie(result)
    } else {
      setError(true)
    }
  }

  const handleAddToList = (movie) => {
    // send movie to parent component
    addMovieFunc(movie)

    // reset the movie state so that the card is not showing after movie is added to the list
    setMovie({})

    // reset input field
    setMovieName("")
  }

  const removeDisplay = () => {
    setMovie({})
    setMovieName("")
  }

  return (
    <div className="bg-dark py-5 rounded p-2">
      <Form onSubmit={handleSubmit}>
        <Row className="g-2">
          <Col className="d-flex justify-content-center">
            <div className="d-flex gap-3" style={{ width: "50%" }}>
              <Form.Control
                placeholder="Movie Name..."
                required
                onChange={handleChange}
                value={movieName}
              />
              <div className="d-grid">
                <Button variant="warning" type="submit">
                  Search
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Form>

      <div className="mt-3 d-flex justify-content-center">
        {movie?.imdbID && (
          <CustomCard
            movie={movie}
            removeDisplay={removeDisplay}
            addMovieFunc={handleAddToList}
          />
        )}
      </div>

      {error && (
        <Alert variant="danger">
          No movie found. Try searching for some other movie!
        </Alert>
      )}
    </div>
  )
}

export default SearchForm
