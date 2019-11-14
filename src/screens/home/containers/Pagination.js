import React,{useState,useEffect} from "react";
import ReactPaginate from "react-paginate";
import {connect} from 'react-redux'
import {getBooks} from '../actions'
const Pagination = ({ data, isFetching, query, error, getBooks }) => {
  const [ pageCount, setPageCount ] = useState(1);
  useEffect(() => {
    let pages = Math.floor(parseInt(data.total) / 10);
    setPageCount(pages);
  }, [data]);
  function handlePageClick(data) {
      getBooks(query,data.selected);
  }
  if(!data.total){
    return <></>
  }
  if (parseInt(data.total) === 0) {
    return <></>;
  }
  return (
    <div className="paginate-section">
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={""}
        activeClassName={"active"}
      />
    </div>
  );
};

const mapStateToProps = state => {
  let { data, isFetching, query, error } = state.books;
  return {
    data,
    isFetching,
    query,
    error
  };
};

export default connect(mapStateToProps, {getBooks})(Pagination);
