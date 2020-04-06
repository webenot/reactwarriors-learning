import classNames from 'classnames';
import React from 'react';

class Pagination extends React.Component {

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    const { page, pages } = this.props;
    return nextProps.page !== page || nextProps.pages !== pages;
  }

  makePaginationArray () {
    const { page, pages } = this.props;
    const pagesArr = [1];
    for (let i = 2; i <= pages; i++) {
      if (pages > 7) {
        if ((i < page - 2 || i > page + 2) && i < pages) {
          if (pagesArr[pagesArr.length - 1] !== '...') {
            pagesArr.push('...');
          }
        } else {
          pagesArr.push(i);
        }
      } else {
        pagesArr.push(i);
      }
    }
    return pagesArr;
  }

  selectPageHandle = (selectedPage) => () => this.props.selectPage(selectedPage);

  render () {
    const { page, pages } = this.props;
    const pagesArr = this.makePaginationArray();
    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              type="button"
              className="btn btn-link page-link"
              disabled={page === 1}
              onClick={this.selectPageHandle(page - 1)}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          </li>
          {pagesArr.map((pageItem, index) => {
            return (
              <li
                key={`page-btn-${index}`}
                className={classNames({
                  'page-item': true,
                  'active': pageItem === page,
                })}
              >
                <button
                  type="button"
                  className={classNames({
                    'btn btn-link page-link': true,
                    'non-link': pageItem === '...',
                  })}
                  disabled={pageItem === page || pageItem === '...'}
                  onClick={this.selectPageHandle(pageItem)}
                >
                  {pageItem}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              type="button"
              className="btn btn-link page-link"
              disabled={page === pages}
              onClick={this.selectPageHandle(page + 1)}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
