import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };
  countIncreaser() {
    this.state.count += 1;
  }
  render() {
    return (
      <div>
        <h1 className=""> number of counts {this.state.count}</h1>
        <button onClick={this.countIncreaser} className="btn btn-primary">
          increase count
        </button>
      </div>
    );
  }
}
export default Counter;
