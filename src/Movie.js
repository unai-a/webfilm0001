import React from "react";
import Iframe from 'react-iframe-click';
import {useNavigate, useParams} from "react-router-dom";


function Movie(){
    let {id} = useParams();
    return (
        <div>
            <h1>Movie</h1>
            
        </div>
    );
    
}
export default Movie;