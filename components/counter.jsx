import React from 'react';

class Counter extends React.Component {
  countIncreaser = (num) => {
    this.setState({ count: this.state.count + 1 });
    console.log(num);
  };
  countDecreaser = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        {this.props.counts.map((count) => {
          return (
            <React.Fragment>
              <button className="btn btn-sm btn-warning m-2">1</button>
              <button
                onClick={() => this.countIncreaser(1)}
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
