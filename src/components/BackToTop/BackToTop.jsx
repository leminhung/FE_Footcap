import React from "react";

export default function BackToTop() {
  return (
    <>
      <div id='thetop'></div>
      <div className='backtotop bg_default_red'>
        <a href='#' className='scroll'>
          <i className='far fa-arrow-up'></i>
        </a>
      </div>
    </>
  );
}
