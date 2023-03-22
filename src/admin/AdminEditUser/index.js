import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "antd/dist/antd.css";

import { Publish } from "@mui/icons-material";
import Chart from "src/admin/components/chart/Chart.jsx";

import "./styles.scss";

const AdminEditUser = ({ match, history }) => {
  const userToken = JSON.parse(localStorage.getItem("jwt"))?.token;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  };

  const location = useLocation();
  const { data } = location.state;

  console.log(data);

  const [user, setUser] = useState(data);
  const [userName, setUserName] = useState(data?.name);
  const [role, setRole] = useState(data?.role);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/auth/getuser/${match.params.userId}`,
        { headers: headers }
      )
      .then((res) => {
        setUser(res.data.data);
      });
  }, []);

  //submit update
  const handleSubmit = (e) => {
    e.preventDefault();
    const isUpdate = window.confirm("Bạn có chắc muốn sửa không?");
    if (isUpdate) {
      axios
        .put(
          `${process.env.REACT_APP_BASE_URL}/auth/updateuserdetails/${match.params.userId}`,
          {
            name: userName,
            role: role,
          },
          { headers: headers }
        )
        .then((res) => {
          if (res) {
            toast.success(`Update successfull`);
          }
          history.push("/admin/userslist");
        })
        .catch((error) => {
          console.log(error);
          toast.error(`Update fail`);
        });
    }
  };

  return (
    <>
      <div className='userPage'>
        <div className='titleContainer'>
          <h1>Edit User</h1>
          {/* <Link to='/newProduct'>
            <button>Create</button>
          </Link> */}
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
              {/* <div className='infoItem'>
                <div className='key'>Phone: </div>
                <div className='value'>{data?.phone}</div>
              </div> */}
              <div className='infoItem'>
                <div className='key'>Role: </div>
                <div className='value'>{data?.role}</div>
              </div>
              <div className='infoItem'>
                <div className='key'>CreatedAt: </div>
                <div className='value'>{data?.createdAt}</div>
              </div>
              <div className='infoItem'>
                <div className='key'>UpdatedAt: </div>
                <div className='value'>{data?.updatedAt}</div>
              </div>
            </div>
          </div>
          <div className='topLeft'>
            {/* <Chart
              data={productData}
              dataKey="Sales"
              title="Sales Perfomance"
              grid
            /> */}
          </div>
        </div>
        <div className='bottom'>
          <form>
            <div className='left'>
              <div className='left-item'>
                <label>User Name</label>
                <input
                  type='text'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />

                <label>Role</label>
                {/* <input
                  type='text'
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                /> */}
                <select onChange={(e) => setRole(e.target.value)}>
                  <option value='user' selected={role === "user"}>
                    User
                  </option>
                  <option value='admin' selected={role === "admin"}>
                    Admin
                  </option>
                </select>
              </div>
              <div className='left-item'></div>
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
