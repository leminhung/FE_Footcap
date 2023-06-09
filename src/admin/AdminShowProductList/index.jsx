import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deleteProduct, listProducts } from "src/store/product/product.action";

import "./styles.scss";

const AdminShowProductList = () => {
  const products = useSelector((state) => state.productList);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts({ limit: 100 }));
  }, []);

  useEffect(() => {
    setData(products?.products || []);
  }, [products]);

  const handleDelete = (id) => {
    const isDelete = window.confirm("Do you want to delete item?");
    if (isDelete) {
      setData(data.filter((item) => item.id !== id));
    }
    dispatch(deleteProduct(id));
  };

  const columns = [
    {
      field: "product",
      headerName: "Product",
      width: 280,
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
    {
      field: "quantity",
      headerName: "Quantity",
      width: 100,
    },
    { field: "size", headerName: "Size", width: 120 },
    { field: "color", headerName: "Color", width: 160 },
    { field: "quantity_purchased", headerName: "Purchased", width: 100 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            {params.row.status === "1" ? "in stock" : "out of stock"}
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
                pathname: `/admin/products/edit/${params.row.id}`,
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
        <Link style={{ margin: "10px" }} to={`/admin/products/create`}>
          <button className='btn-createProduct btn btn-primary'>
            Create product
          </button>
        </Link>
        <DataGrid
          loading={data.length === 0}
          fontSize={16}
          rows={data}
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
