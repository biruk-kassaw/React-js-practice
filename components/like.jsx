import React from 'react';

export default class Like extends React.Component {
  render() {
    let likeClass = 'fa fa-heart-o';
    if (this.props.liked == true) {
      likeClass = 'fa fa-heart';
    }
    return (
      <div>
        <i
          className={likeClass}
          aria-hidden="true"
          onClick={this.props.onClick}
          style={{ cursor: 'pointer' }}
        ></i>
      </div>
    );
  }
}
