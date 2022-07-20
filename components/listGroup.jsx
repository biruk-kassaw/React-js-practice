import React from 'react';

export default class ListGroup extends React.Component {
  render() {
    return (
      <div className="list-group">
        <a
          onClick={() => {
            this.props.changeGenre('All');
          }}
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          All
        </a>
        {this.props.genres.map((genre) => {
          return (
            <a
              onClick={() => {
                this.props.changeGenre(genre.name);
              }}
              key={genre.name}
              className="list-group-item list-group-item-action"
            >
              {genre.name}
            </a>
          );
        })}
      </div>
    );
  }
}
