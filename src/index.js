import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const movie = {
  title: 'Avengers: Infinity War',
  vote_average: 8.5,
  image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Avengers_Infinity_War_poster.jpg/204px-Avengers_Infinity_War_poster.jpg',
  overview: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
};

class Image extends React.Component {
  render() {
    console.log('Image props', this.props);
    const { src, alt } = this.props;
    return (
      <img width="100%" src={src} alt={alt}/>
    )
  }
}

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      like: false,
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like,
    });
  };

  render() {
    console.log('MovieItem props', this.props);
    console.log('state', this.state);
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    return (
      <div style={{
        width: '300px',
      }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <button
            type="button"
            onClick={this.toggleOverview}
          >
            {this.state.show ? 'hide': 'show'}
          </button>
          <button
            type="button"
            className={this.state.like ? 'btn--like' : null}
            onClick={this.handleLike}
          >Like</button>
        </div>
        {this.state.show ? <p>{overview}</p>: null}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <MovieItem data={movie}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
