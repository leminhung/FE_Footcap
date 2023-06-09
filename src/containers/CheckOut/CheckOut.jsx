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
      <CheckOutHero title={"CHECKOUT"} />
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
                          <span class='subtotal_text'>Discount</span>
                        </td>
                        <td>
                          <span class='total_price'>${cart.coupon.value}</span>
                        </td>
                      </tr>

                      <tr>
                        <td class='text-left'>
                          <span class='subtotal_text'>TOTAL</span>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                          <span class='total_price'>
                            ${cart.subtotal - cart.coupon.value}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* payment */}
                <div class='billing_payment_mathod'>
                  <ul class='ul_li_block clearfix'>
                    <li>
                      <div class='checkbox_item mb-0 pl-0'>
                        <label for='paypal_checkbox'>
                          <a href='https://paypay.ne.jp/'>
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
                  <PayButton cartItems={cartItems} coupon={cart.coupon} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
