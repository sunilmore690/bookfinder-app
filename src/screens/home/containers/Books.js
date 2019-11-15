import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty'
import ContentLoader, { Rect, Circle } from "react-content-loader";
import BookCard from '../components/BookCard'

const renderBooksList = (data, query) => {
  if (isEmpty(data)) {
    return null;
  }
  let { books, total } = data;
  return (
    <>
      <h3>Search results for: {query}</h3>
      <p>Total results: {total}</p>
      <div className="books-list">
        {books.map(book => (
          <BookCard key={book.isbn13} book={book} />
        ))}
      </div>
    </>
  );
}
const MyLoader = () => (
  <>
    <div className="d-block d-sm-none container-fluid">
      <ContentLoader>
        <rect x="0" y="0" rx="5" ry="0" width="110" height="40" />
        <rect x="0" y="45" rx="5" ry="0" width="70" height="30" />
        <rect x="0" y="60" rx="2" ry="2" width="300" height="400" />
        <rect x="0" y="500" rx="2" ry="2" width="300" height="400" />
        <rect x="0" y="950" rx="2" ry="2" width="300" height="400" />

      </ContentLoader>
    </div>
    <div className="d-none d-sm-block">
      <ContentLoader>
        <rect x="0" y="0" rx="5" ry="0" width="110" height="10" />
        <rect x="0" y="13" rx="5" ry="0" width="70" height="7" />
        <rect x="0" y="24" rx="2" ry="2" width="90" height="300" />
        <rect x="100" y="24" rx="2" ry="2" width="90" height="300" />
        <rect x="200" y="24" rx="2" ry="2" width="90" height="300" />
        <rect x="300" y="24" rx="2" ry="2" width="90" height="300" />
      </ContentLoader>
    </div>
  </>
);

const Books = ({ data, isFetching, query, error }) => {
  let jsxStr = ''


  //  return <MyLoader/>
  if (isFetching) {
    jsxStr = <MyLoader/>
  } else if (!isEmpty(error)) {
    jsxStr = JSON.stringify(error)
  } else if(data.total == 0){
     jsxStr = (
       <div style={{textAlign:'center'}}>
         <h2>No books found</h2>
       </div>
     );
  }else{  
    jsxStr = renderBooksList(data, query);
  }
  return (
    <div className="books">
      {jsxStr}
    </div>
  )
}

const mapStateToProps = (state) => {
  let { data, isFetching, query, error } = state.books
  return {
    data,
    isFetching,
    query,
    error
  }
}

export default connect(
  mapStateToProps,
  null
)(Books);