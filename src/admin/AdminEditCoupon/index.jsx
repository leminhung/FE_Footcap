import axios from "axios";
import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AdminEditCoupon = () => {
  const location = useLocation();
  const history = useHistory();
  const { data } = location.state;
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userInfo.token}`,
  };

  const [code, setCode] = useState(data.coupon_code);
  const [dateStart, setDateStart] = useState(data.coupon_value);
  const [dateEnd, setDateEnd] = useState(data.coupon_start_date);
  const [minSpend, setMinSpend] = useState(data.coupon_value);
  const [discount, setDiscount] = useState(data.coupon_spend);
  const [maxUses, setMaxUses] = useState(data.coupon_uses_per_coupon);
  const [status, setStatus] = useState("");
  const [usedTimes, setUsedTimes] = useState(data.coupon_count_per_coupon);

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const isUpdate = window.confirm("Are you want to edit?");
    if (status.length === 0) {
      toast.error("You need to fill in status field");
      return;
    }
    if (isUpdate) {
      const fieldMark = {
        coupon_code: code,
        coupon_value: minSpend,
        coupon_start_date: dateStart,
        coupon_end_date: dateEnd,
        coupon_spend: discount,
        coupon_uses_per_coupon: maxUses,
        coupon_count_per_coupon: usedTimes,
        coupon_status: status,
      };
      axios
        .put(
          `${process.env.REACT_APP_BASE_URL}/coupons/${data?._id}`,
          fieldMark,
          { headers }
        )
        .then((res) => {
          if (res) {
            toast.success(`Update successfull`);
          }
          history.push("/admin/couponlist");
        })
        .catch((error) => {
          console.log(error);
          toast.error(`Update fail`);
        });
    }
  };

  return (
    <>
      <div className='newCatePage'>
        <div className='titleContainer'>
          <h1>Edit Coupon</h1>
        </div>
        <form>
          <div className='edit'>
            <div className='edit-box'>
              <div className='item'>
                <label>Code</label>
                <input
                  onChange={(e) => setCode(e.target.value)}
                  type='text'
                  placeholder='Enter coupon code'
                  value={code}
                />
              </div>
              <div className='item'>
                <label>Start Date</label>
                <input
                  type='date'
                  onChange={(e) => setDateStart(e.target.value)}
                  class='form-control input-sm  hasDatepicker'
                  // value={dateStart}
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
              <div className='item'>
                <label>Times used</label>
                <input
                  type='text'
                  onChange={(e) => setUsedTimes(e.target.value)}
                  value={usedTimes}
                />
              </div>
            </div>
            <div className='edit-box'>
              <div className='item'>
                <label>Min spend</label>
                <input
                  type='text'
                  onChange={(e) => setMinSpend(e.target.value)}
                  value={minSpend}
                />
              </div>
              <div className='item'>
                <label>Discount</label>
                <input
                  type='text'
                  onChange={(e) => setDiscount(e.target.value)}
                  value={discount}
                />
              </div>
              <div className='item'>
                <label>Maximum uses</label>
                <input
                  type='text'
                  onChange={(e) => setMaxUses(e.target.value)}
                  value={maxUses}
                />
              </div>
              <div className='item'>
                <label>Status Code</label>
                <div>
                  <select
                    className='select'
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option key='active' value='active'>
                      Active
                    </option>
                    <option key='disabled' value='disabled'>
                      Disabled
                    </option>
                    <option key='expired' value='expired'>
                      Expired
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='buttonWrapper'>
            <button
              onClick={handleSubmit}
              type='submit'
              className='btn btn-primary mb-4'
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminEditCoupon;
