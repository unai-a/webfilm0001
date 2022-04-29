/* to do ...
import React, { useState } from 'react';
import './../App.css';

const film_url = "https://www.2embed.ru/embed/tmdb/movie?id="


    const Vplayer = () => {
    const [movies] = useState('');
    return (
        <div className="film">
                {movies.map((movie) => (
                <iframe 
                    id="bestIframeEver" 
                    title='video' 
                    src={`${film_url}${movie.id}`} 
                    width="25%" height="160">
                </iframe>
                ))}
        </div>
        
    );
                }

  
  export default Vplayer;