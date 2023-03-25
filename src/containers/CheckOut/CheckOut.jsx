import React from "react";

import Header from "src/components/Header/Header";
import BackToTop from "src/components/BackToTop/BackToTop";
import SideBar from "src/components/SideBar/SideBar";

export default function CheckOut() {
  return (
    <body>
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
              <li class='active'>
                <a href='/checkout'>
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

            <div class='row'>
              <div class='col-lg-6'>
                <div class='checkout_collapse_content'>
                  <div class='wrap_heade'>
                    <p class='mb-0'>
                      Returning customer?{" "}
                      <a
                        class='collapsed'
                        data-toggle='collapse'
                        href='#loginform_collapse'
                        aria-expanded='false'
                        role='button'
                      >
                        Click here to login
                      </a>
                    </p>
                  </div>
                  <div
                    id='loginform_collapse'
                    class='collapse_form_wrap collapse'
                  >
                    <div class='card-body'>
                      <form action='#'>
                        <div class='row'>
                          <div class='col-lg-6'>
                            <div class='form_item'>
                              <input
                                type='email'
                                name='email'
                                placeholder='Email'
                              />
                            </div>
                          </div>
                          <div class='col-lg-6'>
                            <div class='form_item'>
                              <input
                                type='password'
                                name='password'
                                placeholder='Password'
                              />
                            </div>
                          </div>
                        </div>
                        <div class='login_button'>
                          <div class='checkbox_item'>
                            <label for='remember_checkbox'>
                              <input id='remember_checkbox' type='checkbox' />{" "}
                              Remember me
                            </label>
                          </div>
                          <button
                            type='submit'
                            class='custom_btn bg_default_red'
                          >
                            Login Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class='col-lg-6'>
                <div class='checkout_collapse_content'>
                  <div class='wrap_heade'>
                    <p class='mb-0'>
                      <i class='ti-info-alt'></i>
                      Have a coupon?{" "}
                      <a
                        class='collapsed'
                        data-toggle='collapse'
                        href='#coupon_collapse'
                        aria-expanded='false'
                      >
                        Click here to enter your code
                      </a>
                    </p>
                  </div>
                  <div id='coupon_collapse' class='collapse_form_wrap collapse'>
                    <div class='card-body'>
                      <form action='#'>
                        <div class='form_item'>
                          <input
                            type='text'
                            name='coupon'
                            placeholder='Coupon Code'
                          />
                        </div>
                        <button type='submit' class='custom_btn bg_default_red'>
                          Apply coupon
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class='billing_form mb_50'>
              <h3 class='form_title mb_30'>Billing details</h3>
              <form action='#'>
                <div class='form_wrap'>
                  <div class='row'>
                    <div class='col-lg-6'>
                      <div class='form_item'>
                        <span class='input_title'>
                          First Name<sup>*</sup>
                        </span>
                        <input type='text' name='firstname' />
                      </div>
                    </div>

                    <div class='col-lg-6'>
                      <div class='form_item'>
                        <span class='input_title'>
                          Last Name<sup>*</sup>
                        </span>
                        <input type='text' name='lastname' />
                      </div>
                    </div>
                  </div>

                  <div class='form_item'>
                    <span class='input_title'>
                      Company Name<sup>*</sup>
                    </span>
                    <input type='text' name='company' />
                  </div>

                  <div class='option_select'>
                    <span class='input_title'>
                      Country<sup>*</sup>
                    </span>
                    <select name='country'>
                      <option value='USA' selected>
                        United States
                      </option>
                      <option value='USA'>United States</option>
                      <option value='USA'>United States</option>
                      <option value='USA'>United States</option>
                    </select>
                  </div>

                  <div class='form_item'>
                    <span class='input_title'>
                      Address<sup>*</sup>
                    </span>
                    <input
                      type='text'
                      name='address'
                      placeholder='House number and street name'
                    />
                  </div>

                  <div class='form_item'>
                    <span class='input_title'>
                      Town/City<sup>*</sup>
                    </span>
                    <input type='text' name='city' />
                  </div>

                  <div class='form_item'>
                    <span class='input_title'>
                      County<sup>*</sup>
                    </span>
                    <input type='text' name='county' />
                  </div>

                  <div class='form_item'>
                    <span class='input_title'>
                      Postcode / Zip<sup>*</sup>
                    </span>
                    <input type='text' name='postcode' />
                  </div>

                  <div class='form_item'>
                    <span class='input_title'>
                      Phone<sup>*</sup>
                    </span>
                    <input type='tel' name='phone' />
                  </div>

                  <div class='form_item'>
                    <span class='input_title'>
                      Email Address<sup>*</sup>
                    </span>
                    <input type='email' name='email' />
                  </div>

                  <div class='checkbox_item'>
                    <label for='account_create_checkbox'>
                      <input id='account_create_checkbox' type='checkbox' />{" "}
                      Create an account?
                    </label>
                  </div>

                  <hr />

                  <div class='checkbox_item mb_30'>
                    <label for='ship_address_checkbox'>
                      <input id='ship_address_checkbox' type='checkbox' /> Ship
                      to a different address?
                    </label>
                  </div>

                  <div class='form_item mb-0'>
                    <span class='input_title'>
                      Order notes<sup>*</sup>
                    </span>
                    <textarea
                      name='note'
                      placeholder='Note about your order, eg. special notes fordelivery.'
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>

            <div class='billing_form'>
              <h3 class='form_title mb_30'>Your order</h3>
              <form action='#'>
                <div class='form_wrap'>
                  <div class='checkout_table'>
                    <table class='table text-center mb_50'>
                      <thead class='text-uppercase text-uppercase'>
                        <tr>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class='cart_product'>
                              <div class='item_image'>
                                <img
                                  src='assets/images/cart/img_04.jpg'
                                  alt='image_not_found'
                                />
                              </div>
                              <div class='item_content'>
                                <h4 class='item_title mb-0'>
                                  Top Curabitur Lectus
                                </h4>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class='price_text'>$69.00</span>
                          </td>
                          <td>
                            <span class='quantity_text'>2</span>
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
                                  src='assets/images/cart/img_04.jpg'
                                  alt='image_not_found'
                                />
                              </div>
                              <div class='item_content'>
                                <h4 class='item_title mb-0'>
                                  Dress Lobortis Laculis
                                </h4>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class='price_text'>$69.00</span>
                          </td>
                          <td>
                            <span class='quantity_text'>2</span>
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
                                  src='assets/images/cart/img_04.jpg'
                                  alt='image_not_found'
                                />
                              </div>
                              <div class='item_content'>
                                <h4 class='item_title mb-0'>
                                  Boot Curabitur Lectus
                                </h4>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class='price_text'>$69.00</span>
                          </td>
                          <td>
                            <span class='quantity_text'>2</span>
                          </td>
                          <td>
                            <span class='total_price'>$138.00</span>
                          </td>
                        </tr>

                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            <span class='subtotal_text'>Subtotal</span>
                          </td>
                          <td>
                            <span class='total_price'>$414.00</span>
                          </td>
                        </tr>

                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            <span class='subtotal_text'>Shipping</span>
                          </td>
                          <td class='text-left'>
                            <div class='checkbox_item mb_15'>
                              <label for='shipping_checkbox'>
                                <input
                                  id='shipping_checkbox'
                                  type='checkbox'
                                  checked
                                />{" "}
                                Free Shipping
                              </label>
                            </div>
                            <div class='checkbox_item mb_15'>
                              <label for='flatrate_checkbox'>
                                <input id='flatrate_checkbox' type='checkbox' />{" "}
                                Flat rate: $15.00
                              </label>
                            </div>
                            <div class='checkbox_item'>
                              <label for='localpickup_checkbox'>
                                <input
                                  id='localpickup_checkbox'
                                  type='checkbox'
                                />{" "}
                                Local Pickup: $8.00
                              </label>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td class='text-left'>
                            <span class='subtotal_text'>TOTAL</span>
                          </td>
                          <td></td>
                          <td></td>
                          <td>
                            <span class='total_price'>$135.00</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class='billing_payment_mathod'>
                    <ul class='ul_li_block clearfix'>
                      <li>
                        <div class='checkbox_item mb_15 pl-0'>
                          <label for='bank_transfer_checkbox'>
                            <input
                              id='bank_transfer_checkbox'
                              type='checkbox'
                              checked
                            />{" "}
                            Direct Bank Transfer
                          </label>
                        </div>
                        <p class='mb-0'>
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      </li>

                      <li>
                        <div class='checkbox_item mb-0 pl-0'>
                          <label for='check_payments'>
                            <input id='check_payments' type='checkbox' />
                            Check Payments
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class='checkbox_item mb-0 pl-0'>
                          <label for='cash_delivery'>
                            <input id='cash_delivery' type='checkbox' /> Cash On
                            Delivery
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class='checkbox_item mb-0 pl-0'>
                          <label for='paypal_checkbox'>
                            <input id='paypal_checkbox' type='checkbox' />{" "}
                            Paypal{" "}
                            <a href='#!'>
                              <img
                                class='paypal_image'
                                src='assets/images/payment_methods_03.png'
                                alt='image_not_found'
                              />
                            </a>
                          </label>
                        </div>
                      </li>
                    </ul>
                    <button type='submit' class='custom_btn bg_default_red'>
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer class='footer_section default_footer clearfix'>
        <div
          class='footer_widget_area sec_ptb_100 clearfix'
          data-bg-color='#1f1f1f'
        >
          <div class='container'>
            <div class='row justify-content-lg-between'>
              <div class='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                <div class='footer_widget df_about_area'>
                  <div class='brand_logo mb_30'>
                    <a href='index.html'>
                      <img
                        src='assets/images/logo/logo_28_1x.png'
                        srcset='assets/images/logo/logo_28_2x.png 2x'
                        alt='logo_not_found'
                      />
                    </a>
                  </div>

                  <p class='mb_15'>
                    We’ve completed 1000+ demo site for more than one million of
                    our customers.
                  </p>

                  <ul class='df_contact_info ul_li_block clearfix'>
                    <li>
                      <i class='fas fa-phone-alt'></i> 001-6688-9999
                    </li>
                    <li>
                      <i class='fas fa-envelope'></i> contact@site.com
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                <div class='footer_widget product_list clearfix'>
                  <h3 class='df_widget_title text-white text-uppercase'>
                    Hot Products
                  </h3>
                  <ul class='ul_li_block'>
                    <li>
                      <div class='small_product'>
                        <div class='item_image'>
                          <img
                            src='assets/images/shop/minimal/img_10.jpg'
                            alt='image_not_found'
                          />
                        </div>
                        <div class='item_content'>
                          <h3 class='item_title'>
                            <a class='text-white' href='#!'>
                              Lobortis Laculis ut Condimentum
                            </a>
                          </h3>
                          <span class='item_price'>$110.00</span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class='small_product'>
                        <div class='item_image'>
                          <img
                            src='assets/images/shop/minimal/img_11.jpg'
                            alt='image_not_found'
                          />
                        </div>
                        <div class='item_content'>
                          <h3 class='item_title'>
                            <a class='text-white' href='#!'>
                              Lobortis Laculis ut Condimentum
                            </a>
                          </h3>
                          <span class='item_price'>$110.00</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                <div class='footer_widget product_list clearfix'>
                  <h3 class='df_widget_title text-white text-uppercase'>
                    Sale Products
                  </h3>
                  <ul class='ul_li_block'>
                    <li>
                      <div class='small_product'>
                        <div class='item_image'>
                          <img
                            src='assets/images/shop/minimal/img_12.jpg'
                            alt='image_not_found'
                          />
                        </div>
                        <div class='item_content'>
                          <h3 class='item_title'>
                            <a class='text-white' href='#!'>
                              Lobortis Laculis ut Condimentum
                            </a>
                          </h3>
                          <span class='item_price'>$110.00</span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class='small_product'>
                        <div class='item_image'>
                          <img
                            src='assets/images/shop/minimal/img_13.jpg'
                            alt='image_not_found'
                          />
                        </div>
                        <div class='item_content'>
                          <h3 class='item_title'>
                            <a class='text-white' href='#!'>
                              Lobortis Laculis ut Condimentum
                            </a>
                          </h3>
                          <span class='item_price'>$110.00</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                <div class='footer_widget df_newsletter'>
                  <h3 class='df_widget_title text-white text-uppercase'>
                    Newsletter
                  </h3>
                  <p class='mb_30'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ex tortor
                  </p>
                  <form action='#'>
                    <div class='form_item mb-0'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email Address'
                      />
                      <button type='submit' class='submit_btn'>
                        <i class='fal fa-paper-plane'></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='footer_bottom clearfix' data-bg-color='#1a1a1a'>
          <div class='container'>
            <div class='row align-items-center'>
              <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <p class='copyright_text mb-0'>
                  @2020 Designed By{" "}
                  <a href='#!' class='author_link text-white'>
                    jthemes
                  </a>
                  .
                </p>
              </div>

              <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <ul class='circle_social_links ul_li_right clearfix'>
                  <li>
                    <a href='#!'>
                      <i class='fab fa-facebook-f'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <i class='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <i class='fab fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <i class='fab fa-whatsapp'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
}
