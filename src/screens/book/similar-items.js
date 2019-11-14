import BookCard from "../home/components/BookCard";
import React, { useEffect, useState } from "react";
import axios_instance from '../../api'
function SimilarItems({ query }) {
  const [books, setBooks] = useState([]);
  async function getData() {
    const res = await axios_instance.get(
      `/1.0/search/${query}`,
      { crossDomain: true }
    );
    const { books } = res.data;
    setBooks(books || []);
  }
  useEffect(() => {
    getData()  
  }, [query]);
  return (
    <div className="books-list">
      {books.slice(1).map(book => (
        <BookCard keybooks={book.isbn13} book={book} />
      ))}
    </div>
  );
}
export default SimilarItems;
