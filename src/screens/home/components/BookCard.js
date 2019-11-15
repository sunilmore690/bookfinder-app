import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const BookCard = ({ book }) => {
  let { title, subtitle, image, price } = book;

  // return (
  //   <div className="row">
  //     <div className="col-sm-3 col-xs-12">
  //       <img src={image} className='img img-responve' alt={title} width='300'/>
  //     </div>
  //     <div className="col-sm-9 col-xs-12">
  //       <span>{title}
  //       </span>
  //     </div>
  //   </div>
  // );
  return (
    <div className="book col-sm-3 col-xs-12">
      <div className="book-card">
        <div>
          {image ? (
            <Link className="" to={`/book/${book.isbn13}`}>
              <span>
                <img src={image} alt={title} className="img img-responsive"  width='100%'/>
              </span>
            </Link>
          ) : null}
        </div>
        <div style={{textAlign:'center'}}>
          <div style={{marginTop:'-20px'}}>
            <Link className="" to={`/book/${book.isbn13}`}>
              <span
                style={{
                  lineHeight: "normal",
                  fontWeight: "400",
                  color: "black"
                }}
              >
                {title}
              </span>
            </Link>
          </div>
          {/* <div style={{ lineHeight: "normal" }}>{subtitle}</div> */}
          <div
            style={{ paddingTop: "10px", color: "hotpink" }}
            className=""
          >
            <span>
              <span style={{ color: "black" }}>Price : </span>
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
