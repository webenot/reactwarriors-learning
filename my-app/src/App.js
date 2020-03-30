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
      newSelected = [...this.state.selected, data];
    } else {
      const idx = this.state.selected.findIndex(item => {
        return item.id === data.id;
      });
      newSelected = [...this.state.selected];
      newSelected.splice(idx, 1);
    }
    this.setState({
      selected: newSelected,
    });
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className='col-md-3 justify-content-between align-items-center'>
            <MovieListWillWatch selected={this.state.selected} />
          </div>
          <div className='col-md-9 justify-content-between align-items-center order-md-first'>
            <div className="row">
              {this.state.movies.map((movie, index) => {
                return <MovieCard key={`movie-${index}`} data={movie} selectMovie={this.selectMovie}>{movie.title}</MovieCard>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
