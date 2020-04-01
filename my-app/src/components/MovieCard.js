import React from 'react';

const imageLink = 'https://image.tmdb.org/t/p/w500';

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false,
    };
  }

  selectMovie = () => {
    const { movie, selectMovie } = this.props;
    const selected = !this.state.selected;
    this.setState({
      selected,
    });
    selectMovie(movie, selected);
  };

  render() {
    const { movie, deleteMovie } = this.props;
    return (
      <div className="col-md-6 mb-4 col-xl-4">
        <div className="card">
          <img
            className="card-img-top"
            src={`${imageLink}${movie.backdrop_path ||
            movie.poster_path}`}
            alt={movie.title}
          />
          <div className="card-header">{movie.title}</div>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Rating: {movie.vote_average}</p>
            </div>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <button
                type="button"
                className={`btn-sm btn btn-${this.state.selected ? 'success': 'secondary'}`}
                onClick={this.selectMovie}
              >Will Watch</button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={deleteMovie.bind(null, movie.id)}
              >Delete movie</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
