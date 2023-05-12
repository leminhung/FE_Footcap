import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { toast } from "react-toastify";
import axios from "axios";

import { listUsers, logout } from "src/store/user/user.action";
import "./styles.scss";

const AdminShowUsersList = () => {
  const [data, setData] = useState([]);

  const users = useSelector((state) => state.userList?.users);
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userInfo.token}`,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
  }, []);

  useEffect(() => {
    setData(users?.data || []);
  }, [users]);

  const handleDelete = async (id) => {
    let totalOrderByUser = await axios
      .get(`${process.env.REACT_APP_BASE_URL}/order?user=${id}`, { headers })
      .then((res) => {
        return res.data.data.length;
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          toast.error(
            "You are not authorized or maybe token expired, pls login again"
          );
          setTimeout(() => {
            dispatch(logout());
          }, 2000);
        } else {
          toast.error(error?.message);
        }
      });

    console.log(totalOrderByUser);
    const isDelete = window.confirm("Do you want to remove this category?");
    if (isDelete) {
      if (totalOrderByUser > 0) {
        toast.error(
          "Ohh this user is including some orders, not allow to remove!"
        );
      } else {
        setData(data.filter((item) => item._id !== id));
        await axios
          .delete(`${process.env.REACT_APP_BASE_URL}/auth/deleteuser/${id}`, {
            headers,
          })
          .then((res) => {
            toast.success("Delete successfully");
          })
          .catch((error) => {
            if (error.response?.status === 401) {
              toast.error(
                "You are not authorized or maybe token expired, pls login again"
              );
              setTimeout(() => {
                dispatch(logout());
              }, 2000);
            } else {
              toast.error(error?.message);
            }
          });
      }
    }
  };

  const columns = [
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            <img
              src={
                params.row.avatar
                  ? params.row.avatar
                  : "/images/products/default_image.jpeg"
              }
              alt=''
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    { field: "_id", headerName: "ID", width: 220 },
    { field: "role", headerName: "Role", width: 80 },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      width: 220,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            {moment(params.row.createdAt).format("lll")}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: `/admin/userslist/edit`,
                state: { data: params.row },
              }}
            >
              <button className='editButton'>Edit</button>
            </Link>
            <DeleteOutline
              className='deleteButton'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className='productListPage'>
        <div className='titleContainer'>
          <h2>List User</h2>
        </div>
        <DataGrid
          loading={data.length === 0}
          getRowId={(row) => row._id}
          fontSize={16}
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{
            textAlign: "center",
            fontSize: 14,
            boxShadow: 2,
            border: 2,
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
      </div>
    </>
  );
};

export default AdminShowUsersList;
