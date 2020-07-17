import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Landing() {
  const scene = useRef(null);
  const text1 = "Click the Rocket";
  const text2 = "And fly to Mars";

  return (
    <div className="scene" ref={scene}>
      <div>
        <Tittle text={text1} text2={text2} />
      </div>
      <div className="rocket">
        <Link to="/mars">
          <img src="/rocket.png" alt="" />
        </Link>
      </div>
    </div>
  );
}

const Tittle = (props) => (
  <h1 className="heading">
    {props.text} <br /> {props.text2}
  </h1>
);
