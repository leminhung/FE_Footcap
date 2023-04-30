import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { DataGrid } from "@mui/x-data-grid";

import { listUsers } from "src/store/user/user.action";
import "./styles.scss";

const AdminShowUsersList = () => {
  const [data, setData] = useState([]);

  const users = useSelector((state) => state.userList?.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
  }, []);

  useEffect(() => {
    setData(users?.data || []);
  }, [users]);

  console.log(data);

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
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className='productListPage'>
        <div className='titleContainer'>
          <h1>List User</h1>
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
