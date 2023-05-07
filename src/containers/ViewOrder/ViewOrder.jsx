import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import moment from "moment";

import CheckOutHero from "src/containers/CheckOut/CheckOutHero";
import { listMyOrders } from "src/store/order/order.action";

import "./ViewOrder.css";

const Loading = () => {
  return (
    <div className='text-center mt-4'>
      <div class='order_loader mx-auto'></div>
    </div>
  );
};

export default function ViewOrder() {
  const { orders, loading } = useSelector((state) => state.orderListMy);

  const history = useHistory();
  const handleRedirect = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);

  return (
    <main>
      <CheckOutHero title={"YOUR ORDERED"} />
      <section class='checkout_section sec_ptb_140 clearfix'>
        <div class='container'>
          <div class='billing_form'>
            <h3 class='form_title mb_30'>Your order</h3>
            <form action='#'>
              <div class='form_wrap'>
                <div class='checkout_table'>
                  <table class='table text-center mb_50'>
                    <thead class='text-uppercase text-uppercase'>
                      <tr>
                        <th>Order date</th>
                        <th>Order number</th>
                        <th>Order total</th>
                        <th>Status</th>
                        <th>View Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loading ? (
                        orders?.data?.map((item, index) => {
                          return (
                            <tr>
                              <td>
                                <h4 class='item_title mb-0 text-muted'>
                                  {moment(item?.createdAt).format("lll")}
                                </h4>
                              </td>
                              <td>
                                <h4 class='item_title mb-0 text-primary'>
                                  {item?.order._id}
                                </h4>
                              </td>
                              <td>
                                <span class='price_text text-success'>
                                  ${item?.order?.total_price / 100}
                                </span>
                              </td>
                              <td>
                                <span class='quantity_text text-info'>
                                  Pending
                                </span>
                              </td>
                              <td>
                                <span class='total_price'>
                                  <Link
                                    to={{
                                      pathname: `/order/view-details`,
                                      state: {
                                        order: item,
                                      },
                                    }}
                                  >
                                    Details
                                  </Link>
                                </span>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <Loading />
                      )}
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
