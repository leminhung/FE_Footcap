import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { listProducts } from "src/store/product/product.action";

import "./styles.scss";

const AdminShowProductList = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const products = useSelector((state) => state.productList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts({ limit: 100 }));
  }, []);

  console.log({ userLogin, products });

  const handleDelete = (id) => {
    // const isDelete = window.confirm("Do you want to delete item?");
    // if (isDelete) {
    //   setData(data.filter((item) => item.id !== id));
    // }
  };

  const columns = [
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            <img
              src={
                params.row.assets[0]?.filename
                  ? params.row.assets[0]?.filename
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
      field: "price",
      headerName: "Price",
      width: 100,
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
              <button className='editButton'>Edit</button>
            </Link>
            <DeleteOutline
              className='deleteButton'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className='productListPage'>
        <Link style={{ margin: "10px" }} to={`/admin/create-product`}>
          <button className='btn-createProduct btn btn-primary'>
            Create product
          </button>
        </Link>
        <DataGrid
          loading={false}
          fontSize={16}
          rows={products?.products || []}
          disableSelectionOnClick
          columns={columns}
          pageSize={12}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{
            height: "700px",
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
