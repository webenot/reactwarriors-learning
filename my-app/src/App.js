import React from 'react';

import MovieCard from './components/MovieCard';
import MovieListWillWatch from './components/MovieListWillWatch';
import './App.css';
import { API_KEY3, API_URL, LANG } from './config';
import MovieTabs from './components/MovieTabsComponent/MovieTabs';
import Pagination from './components/Pagination';

class App extends React.Component {
  constructor () {
    super();
    window.history.pushState({}, '', '/');
    this.state = {
      movies: [],
      selected: [],
      sort_by: 'popularity.desc',
      pages: 0,
      page: 1,
    };
  }

  componentDidMount () {
    this.getMoviesData();
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevState.page !== this.state.page) {
      if (this.state.page !== 1) {
        window.history.pushState({ page: this.state.page }, '', `/?page=${this.state.page}`);
      } else {
        window.history.pushState({}, '', '/');
      }
    }
    if (prevState.sort_by !== this.state.sort_by || prevState.page !== this.state.page) {
      this.getMoviesData();
    }
  }

  getMoviesData () {
    fetch(`${API_URL}discover/movie?api_key=${API_KEY3}&language=${LANG}&sort_by=${this.state.sort_by}&page=${this.state.page}`)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results,
          pages: data.total_pages,
        });
        window.scrollTo(0, 0);
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
      page: 1
    });
  };

  selectPage = (selectedPage) => {
    this.setState({
      page: selectedPage,
    });
  };

  render () {
    const { movies, selected, sort_by, page, pages } = this.state;
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
            <div className="row justify-content-center">
              <Pagination
                page={page}
                pages={pages}
                selectPage={this.selectPage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
