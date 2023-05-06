import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./styles.scss";
import { logout } from "src/store/user/user.action";

const AdminCreateCoupon = () => {
  const [code, setCode] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [minSpend, setMinSpend] = useState("");
  const [discount, setDiscount] = useState("");
  const [maxUses, setMaxUses] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userInfo.token}`,
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      coupon_code: code,
      coupon_value: minSpend,
      coupon_start_date: dateStart,
      coupon_end_date: dateEnd,
      coupon_spend: discount,
      coupon_uses_per_coupon: maxUses,
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/coupons`, params, {
        headers: headers,
      })
      .then((res) => {
        if (res) {
          toast.success("Coupon created successfully");
        }
        history.push("/admin/couponlist");
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          toast.error(
            "You are not authorized or maybe token expired, pls login again"
          );
          setTimeout(() => {
            dispatch(logout());
          }, 1500);
        } else {
          toast.error(error?.message);
        }
      });
  };

  return (
    <>
      <div className='newCatePage'>
        <h1>New Coupon</h1>
        <form>
          <div className='edit'>
            <div className='edit-box'>
              <div className='item'>
                <label>Code</label>
                <input
                  onChange={(e) => setCode(e.target.value)}
                  type='text'
                  placeholder='Enter coupon code'
                />
              </div>
              <div className='item'>
                <label>Start Date</label>
                <input
                  type='date'
                  onChange={(e) => setDateStart(e.target.value)}
                  class='form-control input-sm  hasDatepicker'
                />
              </div>
              <div className='item'>
                <label>End Date</label>
                <input
                  type='date'
                  onChange={(e) => setDateEnd(e.target.value)}
                  class='form-control hasDatepicker'
                />
              </div>
            </div>
            <div className='edit-box'>
              <div className='item'>
                <label>Min spend</label>
                <input
                  type='text'
                  placeholder='Enter min spend'
                  onChange={(e) => setMinSpend(e.target.value)}
                />
              </div>
              <div className='item'>
                <label>Discount</label>
                <input
                  type='text'
                  placeholder='Enter discount'
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
              <div className='item'>
                <label>Maximum uses</label>
                <input
                  type='text'
                  placeholder='Enter maximum uses'
                  onChange={(e) => setMaxUses(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='buttonWrapper'>
            <button
              onClick={handleSubmit}
              type='submit'
              className='btn btn-primary mb-4'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminCreateCoupon;
