//Modules
import React from 'react';
// Next.js Components
import { Link } from 'next';
// React-Bootstrap Components
import { Button, Card } from 'react-bootstrap';

const MovieCard = ({ movie }) => {

    console.log(movie.title) 
    return (
        <>
            <Card>
                <Card.Img className="card-img" variant="top" src={movie.imgUrl} />
                <Card.Body className="card-body">
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.description}</Card.Text>
                    <Button href={`movies:${movie._id}`} variant="info">View</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieCard;