import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart, addToCart } from "src/store/cart/cart.action";
import { capitalizeFirstLetter } from "src/utils/convertFirstLetterToUpperCase";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart]);

  const handleDeleteItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleQuantityIncrease = (item) => {
    item.increase = 1;
    dispatch(addToCart(item));
  };

  const handleQuantityDecrease = (item) => {
    item.decrease = 1;
    dispatch(removeFromCart(item));
  };

  return (
    <main>
      <section
        class='breadcrumb_section text-white text-center text-uppercase d-flex align-items-end clearfix bg-fit'
        style={{
          backgroundImage: `url(/assets/images/slider/classic_ecommerce/test.png)`,
        }}
      >
        <div
          class='overlay'
          style={{
            backgroundColor: "#1d1d1d",
          }}
        ></div>
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
                {cartItems.length > 0 &&
                  cartItems.map((item, index) => {
                    return (
                      <tr>
                        <td>
                          <div key={item.product} class='cart_product'>
                            <div class='item_image'>
                              <img src={item?.image} alt='image_not_found' />
                            </div>
                            <div class='item_content'>
                              <h4 class='item_title'>{item?.name}</h4>
                              <span class='item_type'>Shoes</span>
                              <span class='item_type mt-2'>
                                {capitalizeFirstLetter(item?.color)} -{" "}
                                {item?.size}
                              </span>
                            </div>
                            <button
                              type='button'
                              class='remove_btn'
                              onClick={() => handleDeleteItem(item)}
                            >
                              <i class='fal fa-times'></i>
                            </button>
                          </div>
                        </td>
                        <td>
                          <span class='price_text'>${item?.price}</span>
                        </td>
                        <td>
                          <div class='quantity_input pt-3'>
                            <form action='#'>
                              <span
                                onClick={() => handleQuantityDecrease(item)}
                              >
                                –
                              </span>
                              <input type='text' value={item.quantity} />
                              <span
                                onClick={() => handleQuantityIncrease(item)}
                              >
                                +
                              </span>
                            </form>
                          </div>
                        </td>
                        <td>
                          <span class='total_price'>
                            ${item.price * item?.quantity}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
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
                style={{ backgroundColor: "#f2f3f5" }}
              >
                <h3
                  class='table_title text-center'
                  style={{ backgroundColor: "#ededed" }}
                >
                  Cart Total
                </h3>
                <ul class='ul_li_block clearfix'>
                  <li>
                    <span>Subtotal</span> <span>${cart.subtotal}</span>
                  </li>
                  <li>
                    <span>Total</span> <span>${cart.total}</span>
                  </li>
                </ul>
                <a href='/checkout/shopping-cart' class='custom_btn bg_success'>
                  Proceed to Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
