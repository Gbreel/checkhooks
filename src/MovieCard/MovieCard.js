import React from 'react'
import './MovieCard.css'
import {Card } from'react-bootstrap';
import Rating from '../Rating/Rating';
import ModalMovie from '../Rating/Modal'


const MovieCard = ({isMovieCard, movie,addMovie}) => {
    return (
        <div>
            {isMovieCard ?
            <Card className="movieCard">
             <Card.Img variant="top" src={movie.img} className="img" />
              <Card.Body>
               <Card.Title className="title">{movie.title}</Card.Title>
                <Card.Text>
                  <Rating filterRating={false} movieRating={movie.rating}/>
                </Card.Text>            
               </Card.Body>
            </Card>
            :
            <Card className="movieCard">
             <Card.Body>
              
               <Card.Text>
               <ModalMovie addMovie={addMovie}/>
               </Card.Text>            
              </Card.Body>
           </Card>
           }
        </div>
    )
}

export default MovieCard
