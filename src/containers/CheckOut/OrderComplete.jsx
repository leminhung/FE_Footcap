import React from "react";

export default function OrderComplete() {
  return (
    <main>
      <section
        class='breadcrumb_section text-white text-center text-uppercase d-flex align-items-end clearfix bg-fit'
        style={{
          backgroundImage: `url(../assets/images/slider/classic_ecommerce/test.png)`,
        }}
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
              <a href='/checkout'>
                <span>01.</span> Shopping Cart
              </a>
            </li>
            <li class='activated'>
              <a href='/checkout/payment'>
                <span>02.</span> Checkout
              </a>
            </li>
            <li class='active'>
              <a href='/checkout/order-completed'>
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
  );
}
