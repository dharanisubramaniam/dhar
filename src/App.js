import React from 'react';
import './App.css';
import Rows from './Rows';
import requests from './requests';
import Banner from './Banner';
import NavBar from './NavBar';


class App extends React.Component {
  render() { 
    return ( 
      <div className="app">
        <NavBar/>
        <Banner/>
      <Rows title="Netflix-Originals" fetchURL={requests.fetchNetflixOriginals} isLarge/>
      <Rows title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Rows title="Top Rated Movies" fetchURL={requests.fetchTopRated}/>
      <Rows title="Animation movies" fetchURL={requests.fetchAnimationMovies}/>
      <Rows title="Adventure movies" fetchURL={requests.fetchAdventureMovies}/>
      <Rows title="Comedy movies" fetchURL={requests.fetchComedyMovies}/>
      <Rows title="Romance movies" fetchURL={requests.fetchRomanceMovies}/>
      <Rows title="Documentries" fetchURL={requests.fetchDocumentries}/>
    </div>
     );
  }
}
 
export default App;



