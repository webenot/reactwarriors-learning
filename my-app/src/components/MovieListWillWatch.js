import React from 'react';

class MovieListWillWatch extends React.Component {
  render() {
    const { selected } = this.props;
    return (
      <div>
        <h4>Will Watch: <span>{selected.length}</span> movies</h4>
        <ul className="list-group">
          {selected.map((movie, index) => {
            return (
              <li key={`selected-${index}`} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>{movie.title}</div>
                  <div>{movie.vote_average}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MovieListWillWatch;
