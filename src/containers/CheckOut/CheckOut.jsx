import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CheckOutHero from "./CheckOutHero";
import PayButton from "src/components/PayButton";

export default function CheckOut() {
  const [cartItems, setCartItems] = useState([]);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart]);

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
            <li class='active'>
              <a href='#!'>
                <span>02.</span> Checkout
              </a>
            </li>
            <li>
              <a href='#!'>
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
                        <button type='submit' class='custom_btn bg_default_red'>
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
                      {cartItems.length > 0 &&
                        cartItems.map((item, index) => {
                          return (
                            <tr>
                              <td>
                                <div class='cart_product'>
                                  <div class='item_image'>
                                    <img
                                      src={item?.image}
                                      alt='image_not_found'
                                    />
                                  </div>
                                  <div class='item_content'>
                                    <h4 class='item_title mb-0'>
                                      {item?.name}
                                    </h4>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span class='price_text'>${item?.price}</span>
                              </td>
                              <td>
                                <span class='quantity_text'>
                                  {item.quantity}
                                </span>
                              </td>
                              <td>
                                <span class='total_price'>
                                  ${item.price * item?.quantity}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      <tr>
                        <td></td>
                        <td></td>
                        <td>
                          <span class='subtotal_text'>Subtotal</span>
                        </td>
                        <td>
                          <span class='total_price'>${cart.subtotal}</span>
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
                          <span class='total_price'>${cart.total}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* payment */}
                <div class='billing_payment_mathod'>
                  <ul class='ul_li_block clearfix'>
                    {/* <li>
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
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </li> */}

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
                          <input id='paypal_checkbox' type='checkbox' /> Paypal{" "}
                          <a href='#!'>
                            <img
                              class='paypal_image'
                              src='/assets/images/payment_methods_03.png'
                              alt='image_not_found'
                            />
                          </a>
                        </label>
                      </div>
                    </li>
                  </ul>
                  <PayButton cartItems={cartItems} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
