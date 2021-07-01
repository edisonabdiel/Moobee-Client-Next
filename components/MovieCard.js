//Modules
import React from 'react';
// Next.js Components
import Link from 'next/link';
import { useRouter } from 'next/router'
// React-Bootstrap Components
import { Button, Card } from 'react-bootstrap';
// Styles
import styles from '../styles/MovieCard.module.css';

const MovieCard = ({ movie }) => {

    const router = useRouter();

    return (
        <>
            <Card className={styles.card}>
                <Card.Img className="card-img" variant="top" src={movie.ImgUrl} />
                <Card.Body className={styles.cardBody}>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Button type="button" onClick={() => router.push({
                        pathname: `movies/:${movie._id}`
                    })} variant="info">View</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieCard;