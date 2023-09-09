import './App.css';
import React from 'react';
import { useEffect,useState } from 'react';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?'
// s=Lord+of+the+rings&apikey=85b2f05d'

const App=()=>{

    const [movies, setMovies]= useState([])
    const [searchTerm, setSearchTerm]=useState('Lord of the rings')

    const searchMovies = async ()=>{
        const response = await fetch(`${API_URL}s=${searchTerm}&apikey=85b2f05d`);
        const data = await response.json() 
        setMovies(data.Search)
    }

    useEffect(()=>{
        searchMovies()
    },[])

    return(
        <div  className='app'>
            <h1>Movies Catelog</h1>
            <div className='search'>
                <input type='text' 
                        placeholder='Search movie title'
                        value={searchTerm} 
                        onChange={(e)=>setSearchTerm(e.target.value)
                    // searchMovies('')
                }/>
                <img src={SearchIcon} alt="search" onClick={()=>{
                        searchMovies(searchTerm)
                }}/>
            </div>
            {

                 movies?.length > 0 ?
                                     (
                                        <div className='container'>
                                            {movies.map((movie)=>(
                                                <MovieCard movie={movie}/>    
                                            ))}
                                        </div>
                ):(<div className='empty'> <h2>No movies found </h2></div>)

            }

        </div>
    );
}

export default App;