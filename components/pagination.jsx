import React from 'react';

export default class Pagination extends React.Component {
  render() {
    let noPages = Math.ceil(this.props.itemCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= noPages; i++) {
      pages.push(i);
    }
    if (noPages === 1) return null;
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {pages.map((page) => {
              return (
                <li
                  key={page}
                  className={
                    this.props.currentPage === page
                      ? 'page-item active'
                      : 'page-item'
                  }
                >
                  <a
                    className="page-link"
                    onClick={() => {
                      this.props.handlePageChange(page);
                    }}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}
