import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBooks } from "../actions";
import debounce from "lodash/debounce";

const Search = ({ getBooks, query }) => {
  const handleOnSubmit = e => {
    e.preventDefault();
  };
  const debouncedGetBooks = debounce(query => {
    getBooks(query);
  }, 700);

  const onInputChange = e => {
    debouncedGetBooks(e.target.value);
  };

  return (
    <div className="row" style={{ marginTtop: "10%" ,marginBottom:'30px'}}>
      <div className="col-sm-3 col-xs-12"></div>
      <div className=" col-sm-6 col-xs-12">
        <form class="form-inline" onSubmit={handleOnSubmit}>
          <div class="form-group" style={{ width: "100%" }}>
            <input
              type="text"
              className="form-control d-none d-sm-block"
              onChange={onInputChange}
              placeholder="Java,Javascript ."
              style={{ margin: "10px", width: "80%" }}
            />
            <input
              type="text"
              className="form-control d-block d-sm-none"
              onChange={onInputChange}
              placeholder="Java,Javascript ."
            />
            <button
              className="btn  d-none d-sm-block "
              style={{ background: "hotpink", color: "white" }}
            >
              Search
            </button>
          </div>
        </form>
        <div className="text-muted">
          Search the world's most comprehensive index of full-text books.
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    query: state.books.query
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getBooks
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
