import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  removeFromCart,
  addToCart,
  checkValidCoupon,
} from "src/store/cart/cart.action";
import { capitalizeFirstLetter } from "src/utils/convertFirstLetterToUpperCase";
import { checkQuantityBeforeAddToCart } from "src/utils/checkQuantifyAvailable";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState("");
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
    if (!checkQuantityBeforeAddToCart(item, 1, cartItems)) {
      toast.error(
        `Ohh, we only have ${item?.available} items, but your cart already add more than ${item?.available} for this product`
      );
      return;
    }
    dispatch(addToCart(item));
  };

  const handleQuantityDecrease = (item) => {
    item.decrease = 1;
    dispatch(removeFromCart(item));
  };

  const handleGetCoupon = () => {
    dispatch(
      checkValidCoupon({ coupon_code: couponCode, total: cart.subtotal })
    );
    setCouponCode("");
  };

  return (
    <main>
      <section class='cart_section sec_ptb_140 clearfix'>
        <div class='container mt-5'>
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
                      value={couponCode}
                      type='text'
                      class='coupon'
                      placeholder='Coupon Code'
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                  </div>
                  <button
                    type='submit'
                    class='custom_btn bg_danger text-uppercase'
                    onClick={() => handleGetCoupon()}
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>

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
                    <span>Discount</span> <span>${cart.coupon.value}</span>
                  </li>
                  <li>
                    <span>Total</span>{" "}
                    <span>${cart.subtotal - cart.coupon.value}</span>
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
