import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import Chart from "src/admin/components/chart/Chart.jsx";
import { updateUserByAdmin } from "src/store/user/user.action";

import "./styles.scss";

const AdminEditUser = () => {
  const location = useLocation();
  const history = useHistory();
  const { data } = location.state;

  const productData = [
    {
      name: "Jan",
      Sales: 4000,
    },
    {
      name: "Feb",
      Sales: 2500,
    },
    {
      name: "Mar",
      Sales: 2100,
    },
  ];

  const [userName, setUserName] = useState(data?.name);
  const [role, setRole] = useState(data?.role);

  const dispatch = useDispatch();
  //submit update
  const handleSubmit = (e) => {
    e.preventDefault();
    const isUpdate = window.confirm("Do you want to edit information?");

    if (isUpdate) {
      data.name = userName;
      data.role = role;
      dispatch(updateUserByAdmin(data));
      setTimeout(() => {
        history.push("/admin/userslist");
      }, 1500);
    }
  };

  return (
    <>
      <div className='userPage'>
        <div className='titleContainer'>
          <h1>Edit User</h1>
        </div>
        <div className='top'>
          <div className='topRight'>
            <div className='topInfo'>
              <img
                src={
                  data?.avatar
                    ? data?.avatar
                    : "/images/products/default_image.jpeg"
                }
                alt={data?.name}
              />
              <span>{data?.name}</span>
            </div>
            <div className='bottomInfo'>
              <div className='infoItem'>
                <div className='key'>ID: </div>
                <div className='value'>{data?._id}</div>
              </div>
              <div className='infoItem'>
                <div className='key'>Email: </div>
                <div className='value'>{data?.email}</div>
              </div>
              <div className='infoItem'>
                <div className='key'>Phone: </div>
                <div className='value'>
                  {data?.phone ? data?.phone : "0123456789"}
                </div>
              </div>
              <div className='infoItem'>
                <div className='key'>Role: </div>
                <div className='value'>{data?.role}</div>
              </div>
              <div className='infoItem'>
                <div className='key'>CreatedAt: </div>
                <div className='value'>
                  {moment(data.createdAt).format("lll")}
                </div>
              </div>
              <div className='infoItem'>
                <div className='key'>UpdatedAt: </div>
                <div className='value'>
                  {moment(data.updatedAt).format("lll")}
                </div>
              </div>
            </div>
          </div>
          <div className='topLeft'>
            <Chart
              data={productData}
              dataKey='Sales'
              title='Orders History'
              grid
            />
          </div>
        </div>
        <div className='bottom'>
          <form>
            <div className='left'>
              <div className='left-item'>
                <div>
                  <label>Username</label>
                  <input
                    className='ml-3'
                    type='text'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className='d-flex'>
                  <label>Role</label>
                  <select
                    className='ml-3'
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value='user' selected={role === "user"}>
                      User
                    </option>
                    <option value='admin' selected={role === "admin"}>
                      Admin
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className='right'></div>
          </form>
          <div className='buttonWrapper'>
            <button onClick={handleSubmit} type='submit'>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEditUser;
