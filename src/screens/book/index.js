import React, { useState, useEffect } from 'react';
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'
import './book.css'
import SimilarItems from './similar-items'
import axios_instance from '../../api'
import StarRatings from "react-star-ratings";
const createMarkup = (markup) => ({__html: markup});

const Book = ({ match: { params } }) => {

  const [bookInfo, setBookInfo] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true)
    //api.itbook.store/1.0/books/9781617294136

    axios_instance
      .get(`/1.0/books/${params.ID}`, {
        crossDomain: true
      })
      .then(response => {
        setBookInfo(response.data);
      })
      .catch(() => {
        setBookInfo({});
      })
      .finally(() => {
        setIsFetching(false);
      });

  }, [params.ID]);

  let jsxStr = ''
  if (isFetching) {
    jsxStr = (
      <p>Loading...</p>
    )
  }

  if (!isEmpty(bookInfo)) {
    let {
      title,
      subtitle,
      image,
      desc: description,
      price,
      rating,
      year,
      pages,
      language,
      publisher,
      authors,
      isbn10,
      url,
      isbn13,
      pdf
    } = bookInfo;
    const [key] = Object.keys(pdf || {})
    console.log('key',key)
    let previewUrl = pdf?pdf[key]:null
   
    jsxStr = (
      <div className="">
        <div className="">
          <div className="book-card-header-title">{title}</div>
          <span className="book-item-value"> {subtitle}</span>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-sm-4 col-xs-12" style={{ marginBottom: "30px" }}>
            {image ? (
              <img
                src={image}
                className="img-responsive"
                alt={title}
                style={{
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,.1)",
                  width: "100%"
                }}
              />
            ) : null}

            <div>
              <br></br>
              <a
                className="bnt btn-lg"
                href={"https://itbook.store/go/buy/" + isbn13}
                target="_blank"
                style={{
                  background: "hotpink",
                  color: "white",
                  display: "block",
                  width: "100%",
                  textAlign: "center"
                }}
              >
                Buy Now
              </a>

              {previewUrl ? (
                <a
                  href={previewUrl}
                  target="_blank"
                  className="btn btn-lg"
                  style={{
                    background: "dimgray",
                    display: "block",
                    marginTop: "10px",
                    color: "white",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  Preview
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="col-sm-8 col-xs-12 book-info">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Price</td>
                  <td>
                    <span
                      className="book-item-value"
                      style={{ color: "hotpink" }}
                    >
                      {price}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td>
                    <StarRatings
                      rating={parseInt(rating || 0)}
                      starRatedColor="hotpink"
                      numberOfStars={5}
                      name="rating"
                      starDimension="20px"
                      starSpacing="5px"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Pages</td>
                  <td>
                    <span className="book-item-value">{pages}</span>
                  </td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>
                    <span className="book-item-value">{language}</span>
                  </td>
                </tr>
                <tr>
                  <td>Authors</td>
                  <td>
                    <span className="book-item-value">{authors}</span>
                  </td>
                </tr>
                <tr>
                  <td>Publisher</td>
                  <td>
                    <span className="book-item-value">{publisher}</span>
                  </td>
                </tr>
                <tr>
                  <td>Published</td>
                  <td>
                    <span className="book-item-value">{year}</span>
                  </td>
                </tr>
                <tr>
                  <td>ISBN-10</td>
                  <td>
                    <span className="book-item-value">{isbn10}</span>
                  </td>
                </tr>
                <tr>
                  <td>ISBN-13</td>
                  <td>
                    <span className="book-item-value">{isbn13}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <label style={{ fontWeight: "700" }}>Description</label>
              <p
                className="book-card--description"
                dangerouslySetInnerHTML={createMarkup(description)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="book" className="page">
      <div className="container">
        {jsxStr}<br></br>
        <h3 className="par">
          <span>Similar Books</span>
        </h3>
        {isFetching ? <></> : <SimilarItems query={bookInfo.title} url={'/1.0/search'} />}
      </div>
    </div>
  );
}
export default Book;