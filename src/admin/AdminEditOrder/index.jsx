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

  const [phone, setPhone] = useState(data.phone);
  const [address, setAddress] = useState(data.address);
  const [status, setStatus] = useState(data.status);

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
        phone,
        address,
        status,
      };
      axios
        .put(
          `${process.env.REACT_APP_BASE_URL}/order/${data?._id}`,
          fieldMark,
          { headers }
        )
        .then((res) => {
          if (res) {
            toast.success(`Update successfull`);
          }
          history.push("/admin/orderslist");
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
          <h1>Edit Order</h1>
        </div>
        <form>
          <div className='edit'>
            <div className='edit-box'>
              <div className='item'>
                <label>ID</label>
                <input
                  type='text'
                  placeholder='Enter coupon code'
                  value={data._id}
                  disabled
                />
              </div>
              <div className='item'>
                <label>Username</label>
                <input
                  type='text'
                  class='form-control'
                  value={data.username}
                  disabled
                />
              </div>
              <div className='item'>
                <label>Phone</label>
                <input
                  type='text'
                  onChange={(e) => setPhone(e.target.value)}
                  class='form-control'
                  value={phone}
                />
              </div>
            </div>
            <div className='edit-box'>
              <div className='item'>
                <label>Total price</label>
                <input type='text' value={data.total_price} disabled />
              </div>
              <div className='item'>
                <label>Address</label>
                <input
                  type='text'
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              </div>
              <div className='item'>
                <label>Status delivery</label>
                <div>
                  <select
                    className='select'
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                  >
                    <option key='pending' value='pending'>
                      Pending
                    </option>
                    <option key='processed' value='processed'>
                      Processed
                    </option>
                    <option key='delivered' value='delivered'>
                      Delivered
                    </option>
                    <option key='cancelled order' value='cancelled order'>
                      Cancelled order
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
