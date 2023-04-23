import React from "react";
import CheckOutHero from "./CheckOutHero";

export default function OrderComplete() {
  return (
    <main>
      <CheckOutHero title={"CHECKOUT COMPLETED"} />
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

          <div class='d-flex flex-column order_complete_alart text-center'>
            <h2>
              Congratulation! You’ve <strong>Completed</strong> Payment.
            </h2>
            <h4 className='mt-2'>
              View your order{" "}
              <a href='/order/view'>
                <strong>here</strong>
              </a>
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}
