import React from "react";
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Movie from './Movie';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="movie" element={<Movie />} />
        </Routes>
      </Router>
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Films" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Films" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Films" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Films" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}
export default App;
