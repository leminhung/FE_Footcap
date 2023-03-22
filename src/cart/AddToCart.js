import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "src/component/Header";
import Footer from "src/component/Footer";
import { addItemToCart, removeToCart, getCartProducts } from "src/store/cart/cart.action";
import { toVND } from "./../utils/fromat";
import './../styles/cart/AddToCart.scss'
import { Empty } from "antd";
import ListImage from "src/component/ListImage";
import { Breadcrumb } from "antd";
const AddToCart = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    try {
      dispatch(getCartProducts());
    } catch (err) {
      console.log(err);
    }
  }, [])




  //INCREASE VALUE
  const increaseValue = (id, quantity, color, size, countStock) => {

    const newQty = quantity + 1;
    if (newQty > countStock) return;
    dispatch(addItemToCart(id, newQty, color, size));
  };

  //DECREASE VALUE
  const decreaseValue = (id, quantity, color, size) => {
    const newQty = quantity - 1;
    if (newQty < 1) return;
    dispatch(addItemToCart(id, newQty, color, size));
  };

  //remove item from cart
  const removeItemFromCart = (item) => {
    dispatch(removeToCart(item));
  };

  //go to checkout
  const goToCheckout = () => {
    // history.push("/signin?redirect=shipping");
    history.push("/checkout")
  };

  return (
    <>
      {/* HEADER */}
      <Header />


      <div className='container wrapper_add_to_Cart'>
        <Breadcrumb className="m-breadcrumb">

          <Breadcrumb.Item>
            <a href="/">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/cart">Cart</a>
          </Breadcrumb.Item>

        </Breadcrumb>
        <div className="m-total-order-product">
          <span>GIỎ HÀNG CỦA BẠN </span>
          <span>(Có {cartItems.length ?? 0} sản phẩm trong giỏ hàng)</span>
        </div>
        {
          (!cartItems || cartItems.length < 1) ? (<Empty></Empty>) : (
            <div className='row'>
              <div className='col-sm-9'>
                {cartItems.map((item) => (
                  <div className='row_loop' key={item.product}>
                    <div className='colcart'>

                      <ListImage images={item.images}></ListImage>
                    </div>

                    <div className='colcart'>
                      <div>{`${item.name}-${item.color}-${item.size}`}</div>
                    </div>

                    <div className='colcart'>
                      <div className='qty_and_addtocart'>
                        <div>
                          <div
                            onClick={() => {
                              console.log(item);
                              decreaseValue(item.product, item.quantity, item.color, item.size)
                            }

                            }
                            className='value-button'
                            id='decrease'
                            value='Decrease Value'
                          >
                            -
                          </div>
                          <input
                            type='number'
                            id='number'
                            value={item.quantity}
                            readOnly
                          />
                          <div
                            onClick={() =>{
                              console.log(item);
                              increaseValue(
                                item.product,
                                item.quantity,
                                item.color,
                                item.size,
                                item.countStock
                              )
                            }
                              
                            }
                            className='value-button'
                            id='increase'
                            value='Increase Value'
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='colcart'>
                      <div>{toVND(item.price * item.quantity)}</div>
                    </div>

                    <div className='colcart'>
                      <div>
                        <i
                          onClick={() => removeItemFromCart(item)}
                          style={{ color: "red", cursor: "pointer" }}
                          className='fa fa-trash'
                          aria-hidden='true'
                        ></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='col-sm-3'>
                <div className='order_sumary'>
                  <div className='title_summary'>
                    <h3 style={{ color: "#0e6098" }}>Order Summary:</h3>
                  </div>
                  <div className='subtotal'>
                    <h5>
                      Subtotal {cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}

                    </h5>
                    <h5>
                      Total Price:
                      {toVND(cartItems
                        .reduce((a, c) => a + c.price * c.quantity, 0))
                      }{" "}
                    </h5>
                  </div>
                  <button
                    disabled={cartItems.length === 0}
                    onClick={goToCheckout}
                    className='btn_checkout'
                  >
                    Proceed to Check out
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <Footer />
    </>
  );
};

export default AddToCart;
