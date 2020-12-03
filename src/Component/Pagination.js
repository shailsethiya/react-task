import React from 'react';
import './../App.css';

const Pagination = ({ listPerPage, totalList, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalList / listPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-style">
      {pageNumbers.map(number => (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} href="!#" className="page-link">
            {number}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
