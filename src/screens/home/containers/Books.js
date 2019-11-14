import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty'
import ContentLoader, { Rect, Circle } from "react-content-loader";
import BookCard from '../components/BookCard'

const renderBooksList = (data, query) => {
  if (isEmpty(data)) {
    return null;
  }
  let { items: books, totalItems } = data;
  return (
    <>
      <h3>Search results for: {query}</h3>
      <p>Total results: {totalItems}</p>
      <div className="books-list">
        {books.map(book => <BookCard key={book.id} book={book} />)}
      </div>
      
      
    </>
  )
}
const MyLoader = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="0" width="110" height="10" />
    <rect x="0" y="13" rx="5" ry="0" width="70" height="7" />
    <rect x="0" y="24" rx="2" ry="2" width="90" height="300" />
    <rect x="100" y="24" rx="2" ry="2" width="90" height="300" />
    <rect x="200" y="24" rx="2" ry="2" width="90" height="300" />
    <rect x="300" y="24" rx="2" ry="2" width="90" height="300" />
  </ContentLoader>
);

const Books = ({ data, isFetching, query, error }) => {
  let jsxStr = ''


  //  return <MyLoader/>
  if (isFetching) {
    jsxStr = <MyLoader/>
  } else if (!isEmpty(error)) {
    jsxStr = JSON.stringify(error)
  } else {
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