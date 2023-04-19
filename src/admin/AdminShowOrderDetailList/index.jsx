import { DataGrid } from "@mui/x-data-grid";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";
export const getHeader = () => {
  const userToken = JSON.parse(localStorage.getItem("jwt"))?.token;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  };
  return headers;
};
const AdminShowOrderDetailList = () => {
  const [data, setData] = useState([]);
  const { orderId } = useParams();

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/api/v1/order-detail/${orderId}`, {
          headers: getHeader(),
        })
        .then((res) => {
          const data = res.data.data.map((val, index) => {
            return { ...val, id: index };
          });
          setData(data);
        })
        .catch((err) => {
          //history.push("/signin");
          console.log(err);
        });
    } catch (err) {
      console.log("err", err);
    }
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "shippingAddress.addres",
      headerName: "Shipping Address",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            {params.row?.shippingAddress?.address}
          </div>
        );
      },
    },
    {
      field: "shippingAddress.fullName",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            {params.row?.shippingAddress?.fullName}
          </div>
        );
      },
    },
    {
      field: "shippingAddress.Phone",
      headerName: "Phone",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            {params.row?.shippingAddress?.cellPhone}
          </div>
        );
      },
    },
    {
      field: "isDelivered",
      headerName: "Delivered",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            {params.row.isDelivered ? "Đã giao" : "Đang giao"}
          </div>
        );
      },
    },

    {
      field: "products",
      headerName: "Products",
      width: 160,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            <button className='editButton '>Xem Chi Tiết</button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className='productListPage'>
        <DataGrid
          fontSize={16}
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={13}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{
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

export default AdminShowOrderDetailList;
