import React from "react";

const PhotoCard = (props) => {
  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <img src={props.photo.img_src} alt="mars_image" />
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <h3>
            <strong>Rover: </strong>
            {props.photo.rover.name}
          </h3>
          <h3>
            <strong>Camera: </strong>
            {props.photo.camera.full_name}
          </h3>
          <h3>
            <strong>Earth Time: </strong>
            {props.photo.earth_date}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
