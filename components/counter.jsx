import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div>
        {this.props.counts.map((count) => {
          return (
            <React.Fragment>
              <button className="btn btn-sm btn-warning m-2">
                {count.value}
              </button>
              <button
                onClick={() => this.props.handleIncrement(count)}
                className="btn btn-primary btn-sm"
              >
                +
              </button>

              <button
                onClick={this.countDecreaser}
                className="btn btn-primary btn-sm m-1"
              >
                -
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  this.props.handleDelete(count.id);
                }}
              >
                delete
              </button>
              <br />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
export default Counter;
