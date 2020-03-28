import React from 'react';
import ReactDOM from 'react-dom';

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
      <img src={src} alt={alt}/>
    )
  }
}

class MovieItem extends React.Component {
  render() {
    console.log('MovieItem props', this.props);
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <p>{overview}</p>
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
