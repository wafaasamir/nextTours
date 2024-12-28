import React from "react";
import styles from './Pagination.module.css'

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className={`${styles.pagination} mb-5 mx-2 px-md-5`}>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={`${styles.btn} btn mx-1 ${i + 1 === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
