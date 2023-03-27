import React from "react";

import Header from "src/components/Header/Header";
import BackToTop from "src/components/BackToTop/BackToTop";
import SideBar from "src/components/SideBar/SideBar";
import Footer from "src/components/Footer/Footer";

export default function OrderComplete() {
  return (
    <>
      <BackToTop />
      <Header />
      <main>
        <SideBar />
        <section
          class='breadcrumb_section text-white text-center text-uppercase d-flex align-items-end clearfix'
          data-background='assets/images/breadcrumb/bg_01.jpg'
        >
          <div class='overlay' data-bg-color='#1d1d1d'></div>
          <div class='container'>
            <h1 class='page_title text-white'>Checkout</h1>
            <ul class='breadcrumb_nav ul_li_center clearfix'>
              <li>
                <a href='#!'>Home</a>
              </li>
              <li>Shop</li>
              <li>Checkout</li>
            </ul>
          </div>
        </section>
        <section class='checkout_section sec_ptb_140 clearfix'>
          <div class='container'>
            <ul class='checkout_step ul_li clearfix'>
              <li class='activated'>
                <a href='/checkout-shopping-cart'>
                  <span>01.</span> Shopping Cart
                </a>
              </li>
              <li class='activated'>
                <a href='/checkout-payment'>
                  <span>02.</span> Checkout
                </a>
              </li>
              <li class='active'>
                <a href='/checkout-order-completed'>
                  <span>03.</span> Order Completed
                </a>
              </li>
            </ul>

            <div class='order_complete_alart text-center'>
              <h2>
                Congratulation! You’ve <strong>Completed</strong> Payment.
              </h2>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
