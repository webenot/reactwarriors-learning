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
    let newSelected;
    if (selected) {
      newSelected = this.state.selected.slice();
      newSelected.push(data);
    } else {
      newSelected = this.state.selected.filter(item => {
        return item.id !== data.id;
      });
    }
    this.setState({
      selected: newSelected,
    });
  };

  deleteMovie = (id) => {
    let newMovies = this.state.movies.filter(item => {
      return item.id !== id;
    });
    let newSelected = this.state.selected.filter(item => {
      return item.id !== id;
    });
    this.setState({
      movies: newMovies,
      selected: newSelected,
    });
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className='col-md-3 justify-content-between align-items-center'>
            <MovieListWillWatch selected={this.state.selected}/>
          </div>
          <div className='col-md-9 justify-content-between align-items-center order-md-first'>
            <div className="row">
              {this.state.movies.map(movie => {
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
