import React from "react";

export default function CheckOutHero({ title = "" }) {
  return (
    <section
      className='breadcrumb_section text-white text-center text-uppercase d-flex align-items-end clearfix'
      style={{
        backgroundImage: `url(/assets/images/slider/classic_ecommerce/test.png)`,
      }}
    >
      <div
        className='overlay'
        style={{
          backgroundColor: "#1d1d1d",
        }}
      ></div>
      <div className='container'>
        <h1 className='page_title text-white'>{title}</h1>
        <ul className='breadcrumb_nav ul_li_center clearfix'>
          <li>
            <a href='#!'>Home</a>
          </li>
          <li>Shop</li>
          <li>{title}</li>
        </ul>
      </div>
    </section>
  );
}
