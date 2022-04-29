import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/"
const film_url = "https://www.2embed.ru/embed/tmdb/movie?id="

    function Row({ title, fetchUrl, isLargeRow }) {
        const [movies, setMovies] = useState([]);
        // A snippet of code which runs based on a specific condition
        useEffect(() => {
            // if [], run once the row loads, and dont run again
            async function fetchData() {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                return request;

            }
            fetchData();
        }, [fetchUrl]);

        console.log(movies);

        return (
            <div className="row">
                <h2>{title}</h2>
                
                <div className="row__posters">
                
                {movies.map((movie) => (
                    <a href={`${film_url}${movie.id}`}>
                    <img 
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterlogo"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                     }`} 
                    alt={movie.id}/>
                    </a>
                ))}
                
                </div>
                
                
            </div>
            
        )
    }

    export default Row;