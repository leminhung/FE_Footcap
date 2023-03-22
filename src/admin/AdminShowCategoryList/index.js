import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "antd/dist/antd.css";


import "./styles.scss";

export function getList(url) {
  return axios.get(url);
}

const AdminShowCategoryList = () => {
  const [data, setData] = useState([]);
  const userToken = JSON.parse(localStorage.getItem("jwt"))?.token;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  };

  useEffect(() => {
    let mounted = true;
    getList(`${process.env.REACT_APP_BASE_URL}/categories`).then(
      (res) => {
        if (mounted) {
          setData(res.data.data);
        }
      }
    );
    return () => (mounted = false);
  }, []);

  const handleDelete = async (id) => {

    let totalProductByCategory = await axios
      .get(`${process.env.REACT_APP_BASE_URL}/categories/${id}/products`)
      .then(res => {
        return res.data.data.length;
      });

    const isDelete = window.confirm("Bạn có chắc muốn xóa không?")
    if (isDelete) {
      if (totalProductByCategory > 0) {
        toast.error("Danh mục đang có sản phẩm, không thể xóa!")
      }
      else {
        setData(data.filter((item) => item._id !== id));
        await axios
          .delete(`${process.env.REACT_APP_BASE_URL}/categories/${id}`, {
            headers,
          })
          .then((res) => {
            toast.success("Delete successfully");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    }

  };

  const columns = [
    {
      field: "category",
      headerName: "Category",
      width: 250,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            <img
              src={
                params.row.thumbnail
                  ? params.row.thumbnail
                  : "/images/products/default_image.jpeg"
              }
              alt=''
            />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "_id",
      headerName: "ID",
      width: 350,
    },
    { field: "slug", headerName: "Slug", width: 220 },


    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: `/admin/edit-category/${params.row._id}`,
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
      <div className='cateListPage'>
        <Link style={{ margin: "10px" }} to={`/admin/create-category`}>
          <button className='btn-createProduct btn btn-primary'>
            Create Category
          </button>
        </Link>
        <DataGrid
          loading={data.length === 0}
          fontSize={16}
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={11}
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

export default AdminShowCategoryList;
