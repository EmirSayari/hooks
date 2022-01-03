import React from 'react';
import Navbar from './components/Navbar';
import Filter from './components/filter';
import MovieList from './components/MovieList';
import Add from './components/Add';
import {movies} from './components/Movies';
import './App.css';
import {useState} from 'react';



function App() {

const [movieList, setmovieList]= useState(movies)

 console.log(movieList);
  return (



    <div className="App">
      <div>
       
        <Navbar />
         <Filter />
         <Add />
        <MovieList movieList={movieList} />
             
      </div>
    </div>
  );
}

export default App;