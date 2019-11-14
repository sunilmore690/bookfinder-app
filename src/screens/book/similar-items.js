import BookCard from "../home/components/BookCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
function SimilarItems({ query }) {
  const [books, setBooks] = useState([]);
  async function getData() {
    const res = await axios.get(`/1.0/search/${query}`);
    const { books } = res.data;
    setBooks(books || []);
  }
  useEffect(() => {
    getData()  
  }, [query]);
  return (
    <div className="books-list">
      {books.slice(1).map(book => (
        <BookCard key={book.isbn13} book={book} />
      ))}
    </div>
  );
}
export default SimilarItems;
