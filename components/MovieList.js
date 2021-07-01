//Custom Components
import MovieCard from '../components/MovieCard';
// Styles
import styles from '../styles/MovieList.module.css';
// React-Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';

const MovieList = ({ movies }) => {
    return (
        <>
            <Container fluid>
                <Row className="main-view justify-content-md-center">
                    {movies.map(movie =>
                        <Col key={movie._id} md="4">
                            <MovieCard movie={movie} />
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default MovieList;
