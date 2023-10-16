import React from "react";
import Search from "./components/Search";
import Movies from "./components/Movies";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: ''
    };

    this.onInput = this.onInput.bind(this);
  }

  onInput(query) {
    this.setState({
      query
    });

    this.searchMovie(query);
  }

  getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;

    axios.get(url)
      .then(response => {
        this.setState({
          movies: response.data.results
        });
      })
      .catch(error => {
        console.error('Error fetching popular movies:', error);
      });
  }

  searchMovie(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;

    axios.get(url)
      .then(response => {
        this.setState({
          movies: response.data.results
        });
      })
      .catch(error => {
        console.error('Error searching movies:', error);
      });
  }

  componentDidMount() {
    this.getPopularMovies();
  }

  render() {
    const { movies, query } = this.state;
    const isSearched = item => !query || item.title.toLowerCase().includes(query.toLowerCase());

    return (
      <div className="app">
        <Search query={query} onInput={this.onInput} placeholder="Search for Movie Title …" />
        <Movies movies={movies.filter(isSearched)} />
      </div>
    );
  }
}

export default App;
