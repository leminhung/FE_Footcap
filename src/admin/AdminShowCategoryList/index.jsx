import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { logout } from "src/store/user/user.action";

import "./styles.scss";

export function getList(url) {
  return axios.get(url);
}

const AdminShowCategoryList = () => {
  const [data, setData] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userInfo.token}`,
  };

  const cate_defaultImg = "/images/cate_default.png";

  useEffect(() => {
    let mounted = true;
    getList(`${process.env.REACT_APP_BASE_URL}/categories`).then((res) => {
      if (mounted) {
        setData(res.data.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    let totalProductByCategory = await axios
      .get(`${process.env.REACT_APP_BASE_URL}/categories/${id}/products`)
      .then((res) => {
        return res.data.data.length;
      });

    const isDelete = window.confirm("Do you want to remove this category?");
    if (isDelete) {
      if (totalProductByCategory > 0) {
        toast.error(
          "Ohh this category is including some products, not allow to remove!"
        );
      } else {
        setData(data.filter((item) => item._id !== id));
        await axios
          .delete(`${process.env.REACT_APP_BASE_URL}/categories/${id}`, {
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
      field: "category",
      headerName: "Category",
      width: 250,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            <img
              src={
                params.row.thumbnail ? params.row.thumbnail : cate_defaultImg
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
                pathname: `/admin/categorieslist/edit`,
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
        <Link style={{ margin: "10px" }} to={`/admin/categorieslist/create`}>
          <div className='buttonWrapper'>
            <button className='btn btn-primary'>Create Category</button>
          </div>
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
