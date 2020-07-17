import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";

import {
  fetchPhotos,
  getPaginatedPhotos,
  paginatePhotos,
} from "../actions/imageActions";
import PhotoCard from "./PhotoCard";
import "../index.css";

class Photo extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
    this.props.paginatePhotos(
      this.props.photos,
      this.props.offset,
      this.props.perPage
    );
  }

  paginate = (e) => {
    let selectedPage = e.selected;
    this.props.getPaginatedPhotos(selectedPage, this.props.perPage);
    this.props.paginatePhotos(
      this.props.photos,
      this.props.offset,
      this.props.perPage
    );
    console.log(this.props.pageCount);
  };

  render() {
    return (
      <div className="center">
        <div className="main">
          <div className="card-container">
            {this.props.photos.map((photo) => (
              <PhotoCard photo={photo} key={photo.id} />
            ))}
          </div>
        </div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.props.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.paginate}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

Photo.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  paginatePhotos: PropTypes.func.isRequired,
  getPaginatedPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
};

//Maps reducer state to props
const mapStateToProps = (state) => ({
  photos: state.photos.items,
  offset: state.photos.offset,
  perPage: state.photos.perPage,
  currentPage: state.photos.currentPage,
  pageCount: state.photos.pageCount,
});

export default connect(mapStateToProps, {
  fetchPhotos,
  paginatePhotos,
  getPaginatedPhotos,
})(Photo);
