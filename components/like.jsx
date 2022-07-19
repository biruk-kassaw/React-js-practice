import React from 'react';

export default class Like extends React.Component {
  state = {
    likeClass: 'fa fa-heart-o',
  };
  handleLike = (id) => {
    if (this.state.likeClass == 'fa fa-heart') {
      this.setState({ likeClass: 'fa fa-heart-o' });
      // implement like functionality
      console.log('disliking movie', id);
    } else {
      this.setState({ likeClass: 'fa fa-heart' });
      console.log('liking movie id', id);
      // implement api call to like here
    }
  };
  render() {
    return (
      <div>
        <button
          className="btn p-0"
          onClick={() => {
            this.handleLike(this.props.movieId);
          }}
        >
          <i class={this.state.likeClass} aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
