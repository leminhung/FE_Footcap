import React from "react";

import Header from "src/components/Header/Header";
import BackToTop from "src/components/BackToTop/BackToTop";
import SideBar from "src/components/SideBar/SideBar";
import Footer from "src/components/Footer/Footer";

export default function ShoppingCart() {
  return (
    <div>
      <div id='thetop'></div>
      <BackToTop />
      <Header />
      <main>
        <SideBar />
        {/* <!-- breadcrumb_section - start
			================================================== --> */}
        <section
          class='breadcrumb_section text-white text-center text-uppercase d-flex align-items-end clearfix'
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
        {/* <!-- breadcrumb_section - end
			================================================== -->


			<!-- cart_section - start
			================================================== --> */}
        <section class='cart_section sec_ptb_140 clearfix'>
          <div class='container'>
            <ul class='checkout_step ul_li clearfix'>
              <li class='active'>
                <a href='/checkout/shopping-cart'>
                  <span>01.</span> Shopping Cart
                </a>
              </li>
              <li>
                <a href='/checkout/payment'>
                  <span>02.</span> Checkout
                </a>
              </li>
              <li>
                <a href='/checkout/order-completed'>
                  <span>03.</span> Order Completed
                </a>
              </li>
            </ul>

            <div class='cart_table mb_50'>
              <table class='table'>
                <thead class='text-uppercase bg-white border-bottom'>
                  <tr>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class='cart_product'>
                        <div class='item_image'>
                          <img
                            src='../assets/images/cart/img_04.jpg'
                            alt='image_not_found'
                          />
                        </div>
                        <div class='item_content'>
                          <h4 class='item_title'>Men's Polo T-shirt</h4>
                          <span class='item_type'>Clothes</span>
                        </div>
                        <button type='button' class='remove_btn'>
                          <i class='fal fa-times'></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <span class='price_text'>$69.00</span>
                    </td>
                    <td>
                      <div class='quantity_input'>
                        <form action='#'>
                          <span class='input_number_decrement'>–</span>
                          <input class='input_number' type='text' value='2' />
                          <span class='input_number_increment'>+</span>
                        </form>
                      </div>
                    </td>
                    <td>
                      <span class='total_price'>$138.00</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class='cart_product'>
                        <div class='item_image'>
                          <img
                            src='../assets/images/cart/img_05.jpg'
                            alt='image_not_found'
                          />
                        </div>
                        <div class='item_content'>
                          <h4 class='item_title'>Men's Polo T-shirt</h4>
                          <span class='item_type'>Clothes</span>
                        </div>
                        <button type='button' class='remove_btn'>
                          <i class='fal fa-times'></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <span class='price_text'>$23.00</span>
                    </td>
                    <td>
                      <div class='quantity_input'>
                        <form action='#'>
                          <span class='input_number_decrement'>–</span>
                          <input class='input_number' type='text' value='1' />
                          <span class='input_number_increment'>+</span>
                        </form>
                      </div>
                    </td>
                    <td>
                      <span class='total_price'>$23.00</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class='cart_product'>
                        <div class='item_image'>
                          <img
                            src='../assets/images/cart/img_06.jpg'
                            alt='image_not_found'
                          />
                        </div>
                        <div class='item_content'>
                          <h4 class='item_title'>Men's Polo T-shirt</h4>
                          <span class='item_type'>Clothes</span>
                        </div>
                        <button type='button' class='remove_btn'>
                          <i class='fal fa-times'></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <span class='price_text'>$36.00</span>
                    </td>
                    <td>
                      <div class='quantity_input'>
                        <form action='#'>
                          <span class='input_number_decrement'>–</span>
                          <input class='input_number' type='text' value='1' />
                          <span class='input_number_increment'>+</span>
                        </form>
                      </div>
                    </td>
                    <td>
                      <span class='total_price'>$36.00</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class='coupon_wrap mb_50'>
              <div class='row justify-content-lg-between'>
                <div class='col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                  <div class='coupon_form'>
                    <div class='form_item mb-0'>
                      <input
                        type='text'
                        class='coupon'
                        placeholder='Coupon Code'
                      />
                    </div>
                    <button
                      type='submit'
                      class='custom_btn bg_danger text-uppercase'
                    >
                      Apply Coupon
                    </button>
                  </div>
                </div>

                <div class='col-lg-5 col-md-12 col-sm-12 col-xs-12'>
                  <div class='cart_update_btn'>
                    <button
                      type='button'
                      class='custom_btn bg_secondary text-uppercase'
                    >
                      Update Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class='row justify-content-lg-end'>
              <div class='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                <div
                  class='cart_pricing_table pt-0 text-uppercase'
                  data-bg-color='#f2f3f5'
                >
                  <h3 class='table_title text-center' data-bg-color='#ededed'>
                    Cart Total
                  </h3>
                  <ul class='ul_li_block clearfix'>
                    <li>
                      <span>Subtotal</span> <span>$197.99</span>
                    </li>
                    <li>
                      <span>Shipping</span>{" "}
                      <span>
                        <a class='shipping_calculate text-capitalize' href='#!'>
                          Calculate shipping
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>Total</span> <span>$197.99</span>
                    </li>
                  </ul>
                  <a
                    href='shop_checkout_step2.html'
                    class='custom_btn bg_success'
                  >
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- cart_section - end
			================================================== --> */}
      </main>
      <Footer />
    </div>
  );
}
