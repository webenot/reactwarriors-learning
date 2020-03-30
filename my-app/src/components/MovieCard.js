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
    this.setState({
      selected: !this.state.selected,
    });
    this.props.selectMovie(this.props.data, !this.state.selected);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          <img
            className="card-img-top"
            src={`${imageLink}${data.backdrop_path ||
            data.poster_path}`}
            alt=""
          />
          <div className="card-body">
            <h6 className="card-title">{data.title}</h6>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Rating: {data.vote_average}</p>
              <button
                type="button"
                className={this.state.selected ? 'btn btn-success': 'btn btn-secondary'}
                onClick={this.selectMovie}
              >
                Will Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
