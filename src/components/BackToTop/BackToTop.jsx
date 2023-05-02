import React from "react";
import "./BackToTop.css";

export default function BackToTop() {
  return (
    <>
      <div id='thetop'></div>
      <div className='backtotop bg_default_red'>
        <a href='#' className='scroll' aria-label='arrow up outline'>
          <i className='far fa-arrow-up'></i>
        </a>
      </div>
    </>
  );
}
