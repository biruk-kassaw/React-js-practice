import * as React from 'react';
import './style.css';
import Nav from './components/nav';
import Counter from './components/counter';
console.log(Nav);
console.log(Counter);

export default function App() {
  return (
    <div>
      <Nav />
      <Counter />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
