import React from "react";
// import { Pagination } from "react-bootstrap";
import Pagination from "react-ultimate-pagination-bootstrap-4";
// const UltimatePagination = reactUltimatePaginationBootstrap4.default;
const Paging = ({ pages, activePage, onPageChange }) => {
  if (activePage > pages) {
    activePage = 1;
  }
  return (
    <Pagination
      currentPage={activePage}
      totalPages={pages}
      onChange={onPageChange}
    />
  );
};

export default Paging;
