import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import CheckOutHero from "src/containers/CheckOut/CheckOutHero";

export default function ViewOrderDetail() {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);
  let location = useLocation();

  const history = useHistory();
  const handleRedirect = (e) => {
    e.preventDefault();
    history.push("/");
  };

  useEffect(() => {
    setItems(location.state?.order?.products);
  }, [location.state?.order?.products]);

  console.log(images);

  return (
    <main>
      <CheckOutHero title={"ORDER DETAILS"} />
      <section class='checkout_section sec_ptb_140 clearfix'>
        <div class='container'>
          <div class='billing_form'>
            <h3 class='form_title mb_30'>Order Details</h3>
            <form action='#'>
              <div class='form_wrap'>
                <div class='checkout_table'>
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
                      {items?.length > 0 &&
                        items.map((item, index) => {
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
                                  ${item?.price * item?.quantity}
                                </span>
                              </td>
                            </tr>
                          );
                        })}

                      <tr>
                        <td class='text-left'>
                          <span class='subtotal_text'>TOTAL</span>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                          <span class='total_price'>
                            ${location.state?.order.order.total_price / 100}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class='billing_payment_mathod'>
                  <button
                    type='submit'
                    class='custom_btn bg_default_red'
                    onClick={(e) => handleRedirect(e)}
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
