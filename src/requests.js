const api_Key = "40a2023ce90ce523afc203f0aedd62d9"


const requests = {
    fetchTrending : `/trending/all/week?api_key=${api_Key}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${api_Key}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${api_Key}&language=en-US`,
    fetchAnimationMovies : `/discover/movie?api_key=${api_Key}&with_genres=16`,
    fetchAdventureMovies : `/discover/movie?api_key=${api_Key}&with_genres=12`,
    fetchComedyMovies : `/discover/movie?api_key=${api_Key}&with_genres=35`,
    fetchRomanceMovies : `/discover/movie?api_key=${api_Key}&with_genres=10749`,
    fetchDocumentries : `/discover/movie?api_key=${api_Key}&with_genres=99`
}

export default requests;