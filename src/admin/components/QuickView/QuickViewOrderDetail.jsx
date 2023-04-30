import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getOrderDetails } from "src/store/order/order.action";
import { capitalizeFirstLetter } from "src/utils/convertFirstLetterToUpperCase";

const QuickViewOrderDetails = ({ orderId, totalPrice = 0 }) => {
  const [data, setData] = useState([]);
  const [shippingAddress, setShippingAddress] = useState({});

  const dispatch = useDispatch();
  const orderItems = useSelector((state) => state.orderDetails.orderItems);

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  useEffect(() => {
    setData(orderItems?.data[0]?.products || []);
    setShippingAddress(orderItems?.data[0]?.shippingAddress);
  }, [orderItems]);

  return (
    <div
      className='quickview_modal modal fade'
      id='quickview_modal_order_detail'
      tabIndex='-1'
      role='dialog'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content clearfix'>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'
          >
            <span aria-hidden='true'>&times;</span>
          </button>
          <form action='#'>
            <div className='form_wrap'>
              <div className='checkout_table'>
                <table className='table'>
                  <thead className='text-uppercase bg-white border-bottom'>
                    <tr>
                      <th>Photo</th>
                      <th className='text-center'>Price</th>
                      <th className='text-center'>Quantity</th>
                      <th className='text-center'>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.length > 0 &&
                      data.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <div className='cart_product'>
                                <div className='item_image'>
                                  <img
                                    src={item?.image}
                                    alt='image_not_found'
                                  />
                                </div>
                                <div className='item_content text-center'>
                                  <h4 className='item_title mb-0'>
                                    {item?.name}
                                  </h4>
                                  <span class='item_type mt-2'>
                                    {capitalizeFirstLetter(item?.color)} -{" "}
                                    {item?.size}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>
                              <span className='price_text'>${item?.price}</span>
                            </td>
                            <td className='text-center'>
                              <span className='quantity_text'>
                                {item.quantity}
                              </span>
                            </td>
                            <td className='text-center'>
                              <span className='total_price'>
                                ${item?.price * item?.quantity}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    <tr>
                      <td className='text-left'>
                        <span className='subtotal_text'>SUBTOTAL</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td className='text-center'>
                        <span className='total_price'>${totalPrice}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='text-left'>
                        <span className='subtotal_text'>SHIPPING ADDRESS</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td className='text-center'>
                        <span className='total_price'>
                          {shippingAddress?.address}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='billing_payment_mathod'>
                <button type='submit' className='custom_btn bg_default_red'>
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickViewOrderDetails;
