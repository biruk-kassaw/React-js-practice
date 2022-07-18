import * as React from 'react';
import './style.css';
import Nav from './components/nav';
import Counter from './components/counter';
import Table from './components/movieTable';
console.log(Nav);
console.log(Counter);

export default class App extends React.Component {
  state = {
    counts: [
      { id: 1, value: 1 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
      { id: 4, value: 1 },
      { id: 5, value: 1 },
    ],
  };
  handleDelete = (id) => {
    const counts = this.state.counts.filter((count) => count.id !== id);
    this.setState({ counts });
  };
  handleIncrement = (count) => {
    const counts = [...this.state.counts];
    const id = counts.indexOf(count);
    let newCount = { ...count };
    newCount.value++;
    counts[id] = newCount;
    this.setState({ counts });
  };
  handleReset = () => {};
  render() {
    return (
      <div>
        <Nav counts={this.state.counts.length} />
        {/* <button className="btn btn-secondary m-2">Reset</button> */}
        <Table />
        {/* <Counter
          counts={this.state.counts}
          handleDelete={this.handleDelete}
          handleIncrement={this.handleIncrement}
        /> */}
      </div>
    );
  }
}
