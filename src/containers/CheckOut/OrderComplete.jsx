import React from "react";
import CheckOutHero from "./CheckOutHero";

export default function OrderComplete() {
  return (
    <main>
      <CheckOutHero />
      <section class='checkout_section sec_ptb_140 clearfix'>
        <div class='container'>
          <ul class='checkout_step ul_li clearfix'>
            <li class='activated'>
              <a href='/checkout/shopping-cart'>
                <span>01.</span> Shopping Cart
              </a>
            </li>
            <li class='activated'>
              <a href='/checkout/payment'>
                <span>02.</span> Checkout
              </a>
            </li>
            <li class='active'>
              <a href='#!'>
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
