import React from 'react';
import moviesData from './moviesData';
import MovieCard from './components/MovieCard';
import MovieListWillWatch from './components/MovieListWillWatch';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
      selected: [],
    };
  }

  selectMovie = (data, selected) => {
    const { selected: selectedMovies } = this.state;
    let newSelected;
    if (selected) {
      newSelected = [...selectedMovies, data];
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

  render() {
    const { movies, selected } = this.state;
    return (
      <div className="container mt-4">
        <div className="row">
          <div className='col-lg-3 justify-content-between align-items-center mb-4'>
            <MovieListWillWatch selected={selected}/>
          </div>
          <div className='col-lg-9 justify-content-between align-items-center order-lg-first'>
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
