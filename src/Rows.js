import React,{useEffect, useState} from 'react';
import axios from './axios';
import './Rows.css';

const baseURL = 'https://image.tmdb.org/t/p/original'

function Rows({title,fetchURL,isLarge}) {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)            
            return request;
        }
        fetchData()
    },[fetchURL])
    console.log(movies)
  

    return (
        <div className='row'>
           <h2>{title}</h2>


           <div className='row__posters'>
               {movies.map((movie)=>(
                   <img className={`row__poster ${isLarge && "row__posterLarge"}`} src={`${baseURL}${isLarge?movie.poster_path:movie.backdrop_path}`} alt={movie.name} key={movie.id}/>
               ))}
           </div>
        </div>
    )
}

export default Rows;
