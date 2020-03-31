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
    const selected = !this.state.selected;
    this.setState({
      selected,
    });
    this.props.selectMovie(this.props.movie, selected);
  };

  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          <img
            className="card-img-top"
            src={`${imageLink}${movie.backdrop_path ||
            movie.poster_path}`}
            alt=""
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
              >
                Will Watch
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => this.props.deleteMovie(movie.id)}
              >Delete movie</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
