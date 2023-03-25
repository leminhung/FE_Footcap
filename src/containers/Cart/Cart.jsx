import React from "react";

import Header from "src/components/Header/Header";
import BackToTop from "src/components/BackToTop/BackToTop";
import SideBar from "src/components/SideBar/SideBar";

export default function Cart() {
  return (
    <div>
      <div id='thetop'></div>
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
            <h1 class='page_title text-white'>Cart Page</h1>
            <ul class='breadcrumb_nav ul_li_center clearfix'>
              <li>
                <a href='#!'>Home</a>
              </li>
              <li>Shop</li>
              <li>Shopping Cart</li>
            </ul>
          </div>
        </section>
        <section class='cart_section sec_ptb_140 clearfix'>
          <div class='container'>
            <div class='cart_table mb_50'>
              <table class='table'>
                <thead class='text-uppercase'>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
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
                            src='assets/images/cart/img_05.jpg'
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
                            src='assets/images/cart/img_06.jpg'
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
                      <span>Total</span> <span>$197.99</span>
                    </li>
                  </ul>
                  <a href='shop_checkout.html' class='custom_btn bg_success'>
                    Proceed to Checkout
                  </a>
                </div>
              </div>
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
    </div>
  );
}
