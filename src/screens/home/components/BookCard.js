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
    <div className="book">
      <Card style={{ minHeight: "500px", maxHeight: "500px" }}>
        {image ? (
          <Link className="" to={`/book/${book.isbn13}`}>
            <span
            
            >
              <Card.Img variant="top" src={image} />
            </span>
          </Link>
        ) : null}
        <div className="card-background">
          <Card.Body>
            <Card.Title>
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
            </Card.Title>
            <div style={{ lineHeight: "normal" }}>{subtitle}</div>
            <div
              style={{ paddingTop: "10px", color: "hotpink" }}
              className="card-price"
            >
              <span ><span style={{color:'black'}}>Price : </span>{price}</span>
            </div>
            {/* <Card.Text className="book--description">{description}</Card.Text> */}
            {/* <Card.Link href={infoLink} target="_blank" rel="noopener">Preview</Card.Link> */}
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default BookCard;
