import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "antd/dist/antd.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

import "./styles.scss";

const AdminShowUsersList = () => {
  const userToken = JSON.parse(localStorage.getItem("jwt"))?.token;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/auth/getallusers`, {
        headers: headers,
      })
      .then((res) => {
        if (mounted) {
          console.log("response", res.data.data);
          setData(res.data.data);
        }
      });
    return () => (mounted = false);
  }, []);

  const handleDelete = async (id) => {
    const isDelete = window.confirm("Bạn có chắc muốn xóa không?")
    if (isDelete) {
      setData(data.filter((item) => item._id !== id));
      await axios
        .delete(`${process.env.REACT_APP_BASE_URL}/auth/deleteuser/${id}`, {
          headers: headers,
        })
        .then((res) => {
          toast.success("Delete successfully");
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message);
        });
    }
  };

  const columns = [
    {
      field: "user",
      headerName: "User",
      width: 250,
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
    { field: "createdAt", headerName: "CreatedAt", width: 220 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: `/admin/edit-user/${params.row._id}`,
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
        {/* <Link style={{ margin: "10px" }} to={`/admin/create-user`}>
          <button className='btn-createProduct btn btn-primary'>
            Create user
          </button>
        </Link> */}
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
