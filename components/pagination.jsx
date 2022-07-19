import React from 'react';

export default class Pagination extends React.Component {
  render() {
    let noPages = this.props.itemCount / this.props.pageSize;
    let pages = [];
    for (let i = 1; i <= noPages; i++) {
      pages.push(i);
    }
    console.log(pages);
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {pages.map((page) => {
              return (
                <li className="page-item">
                  <a className="page-link">{page}</a>
                </li>
              );
            })}
            {/* <li className="page-item">
              <button className="page-link">Previous</button>
            </li>
            <li className="page-item">
              <a className="page-link" href="">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">
                Next
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}
