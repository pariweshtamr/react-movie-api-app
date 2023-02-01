import React, { useEffect, useState } from "react"
import { Button, ButtonGroup, Col, Row } from "react-bootstrap"
import CustomCard from "./CustomCard"

const MovieList = ({ movieList, deleteMovie }) => {
  const [displayMovie, setDisplayMovie] = useState([])

  useEffect(() => {
    setDisplayMovie(movieList)
  }, [movieList])

  const selectCategory = (cat) => {
    cat === "all" && setDisplayMovie(movieList)

    cat === "happy" &&
      setDisplayMovie(movieList.filter((movie) => movie.type === "happy"))

    cat === "lazy" &&
      setDisplayMovie(movieList.filter((movie) => movie.type === "lazy"))
  }
  return (
    <div className="bg-dark py-3 rounded p-3 mt-5">
      <Row>
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={() => selectCategory("all")}>
              All
            </Button>
            <Button variant="danger" onClick={() => selectCategory("happy")}>
              Happy
            </Button>
            <Button variant="warning" onClick={() => selectCategory("lazy")}>
              Lazy
            </Button>
          </ButtonGroup>

          <p className="mt-3">{displayMovie.length} Movies Found!</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-wrap justify-content-around gap-3">
          {displayMovie.map((movie) => (
            <CustomCard
              key={movie.imdbID}
              movie={movie}
              deleteMovie={deleteMovie}
              isDelete={true}
            />
          ))}
        </Col>
      </Row>
    </div>
  )
}

export default MovieList
