import React from 'react';

class Counter extends React.Component {
  state = {
    count: 1,
    chores: ['study', 'eat', 'exercise'],
  };
  countIncreaser = (num) => {
    this.setState({ count: this.state.count + 1 });
    console.log(num);
  };
  countDecreaser = () => {
    this.setState({ count: this.state.count - 1 });
  };
  hcolor() {
    if (this.state.count > 0) {
      return 'bg-black';
    } else {
      return 'bg-primary';
    }
  }
  numberOfChores() {
    if (this.state.chores.length < 1) {
      return <p>no chore</p>;
    } else {
      return (
        <ul>
          {this.state.chores.map((chor) => {
            return <li key={chor}>{chor}</li>;
          })}
        </ul>
      );
    }
  }
  render() {
    return (
      <div>
        <h1 className={this.hcolor()}> number of counts {this.state.count}</h1>
        <button
          onClick={() => this.countIncreaser(1)}
          className="btn btn-primary"
        >
          increase count
        </button>

        <button onClick={this.countDecreaser} className="btn btn-primary m-5">
          decrease count
        </button>
        {this.numberOfChores()}
      </div>
    );
  }
}
export default Counter;
