import React from 'react';

class MovieListWillWatch extends React.Component {
  render() {
    const { selected } = this.props;
    const selectedCount = selected.length;
    return (
      <div>
        <h4>Will Watch: <span>{selectedCount}</span> movie{selectedCount === 1 ? '' : 's'}</h4>
        <ul className="list-group">
          {selected.map(movie => {
            return (
              <li key={`selected-${movie.id}`} className="list-group-item">
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
