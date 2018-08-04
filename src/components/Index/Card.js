import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const ldshourglass = keyframes`
	0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

const Effect = styled.div`
  display: inline-block;
  position: relative;
  width: 150px;
  height: 150px;
  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid #8bc34a;
    border-color: #fd9572 transparent #f87772 transparent;
    animation: ${ldshourglass} 1.2s infinite;
  }
`;

const Card = ({ caption, url, loading, loaded, name }) => {
  return (
    <div className="fl w-100-ns w-50-m w-25-l pa2 gallery">
	    <Link to={`/pikka/${name}`}>
      <div id="caption">
        <span className="text">
          <h4>{caption}</h4>
        </span>
        {loading && <Effect />}
        <img src={url} alt={caption} onLoad={() => loaded()} />
      </div>
	    </Link>
    </div>
  );
};
export default Card;
