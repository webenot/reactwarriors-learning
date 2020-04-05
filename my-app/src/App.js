import React from 'react';

import MovieCard from './components/MovieCard';
import MovieListWillWatch from './components/MovieListWillWatch';
import './App.css';
import { API_KEY3, API_URL, LANG } from './config';
import MovieTabs from './components/MovieTabsComponent/MovieTabs';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selected: [],
      sort_by: 'popularity.desc'
    };
  }

  componentDidMount() {
    this.getMoviesData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMoviesData();
    }
  }

  getMoviesData() {
    fetch(`${API_URL}discover/movie?api_key=${API_KEY3}&language=${LANG}&sort_by=${this.state.sort_by}`)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results,
        });
      });
  };

  selectMovie = (data, selected) => {
    const { selected: selectedMovies } = this.state;
    let newSelected;
    if (selected) {
      newSelected = [ ...selectedMovies, data ];
    } else {
      newSelected = selectedMovies.filter(item => {
        return item.id !== data.id;
      });
    }
    this.setState({
      selected: newSelected,
    });
  };

  deleteMovie = (id) => {
    const { movies, selected } = this.state;

    let newMovies = movies.filter(item => {
      return item.id !== id;
    });
    let newSelected = selected.filter(item => {
      return item.id !== id;
    });
    this.setState({
      movies: newMovies,
      selected: newSelected,
    });
  };

  selectSortBy = (value) => {
    this.setState({
      sort_by: value,
    });
  };

  render() {
    const { movies, selected, sort_by } = this.state;
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3 justify-content-between align-items-center mb-4">
            <MovieListWillWatch selected={selected}/>
          </div>
          <div className="col-lg-9 justify-content-between align-items-center order-lg-first">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sort_by={sort_by}
                  selectSortBy={this.selectSortBy}
                />
              </div>
            </div>
            <div className="row">
              {movies.map(movie => {
                return (
                  <MovieCard
                    key={`movie-${movie.id}`}
                    movie={movie}
                    selectMovie={this.selectMovie}
                    deleteMovie={this.deleteMovie}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
