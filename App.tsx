import * as React from 'react';
import './style.css';
import Nav from './components/nav';
import Counter from './components/counter';
import Table from './components/movieTable';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
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
