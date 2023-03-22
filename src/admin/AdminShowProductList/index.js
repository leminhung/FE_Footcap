import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "antd/dist/antd.css";

import { headers } from "src/utils/getTokenFromLocalStorage";

import "./styles.scss";

export function getList(url) {
  return axios.get(url);
}

const AdminShowProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList(`${process.env.REACT_APP_BASE_URL}/products?limit=38`).then(
      (res) => {
        if (mounted) {
          setData(res.data.data);
        }
      }
    );
    return () => (mounted = false);
  }, []);

  const handleDelete = (id) => {
    const isDelete = window.confirm("Bạn có chắc muốn xóa không?");
    if (isDelete) {
      setData(data.filter((item) => item.id !== id));
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/products/${id}`, {
          headers,
        })
        .then((res) => {
          toast.success("Delete successfully");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  const columns = [
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="productListField">
            <img
              src={
                params.row.images[0]?.path
                  ? params.row.images[0]?.path
                  : "/images/products/default_image.jpeg"
              }
              alt=""
            />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    { field: "discount", headerName: "Discount", width: 120 },
    { field: "size", headerName: "Size", width: 120 },
    { field: "color", headerName: "Color", width: 120 },
    { field: "rating", headerName: "Rating", width: 120 },
    { field: "numReviews", headerName: "NumReviews", width: 120 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
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
                pathname: `/admin/edit-product/${params.row.id}`,
                state: { data: params.row },
              }}
            >
              <button className="editButton">Edit</button>
            </Link>
            <DeleteOutline
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className="productListPage">
        <Link style={{ margin: "10px" }} to={`/admin/create-product`}>
          <button className="btn-createProduct btn btn-primary">
            Create product
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

export default AdminShowProductList;
