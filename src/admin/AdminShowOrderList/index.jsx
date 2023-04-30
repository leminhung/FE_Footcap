import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuickViewOrderDetail from "src/admin/components/QuickView/QuickViewOrderDetail";

import "./styles.scss";
import { listOrders } from "src/store/order/order.action";

const AdminShowOrderList = () => {
  const [data, setData] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const orders = useSelector((state) => state.orderList.orders);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrders());
  }, []);

  useEffect(() => {
    setData(orders?.data || []);
  }, [orders]);

  const getUserAvatar = (params) => {
    try {
      return params.row.user.avatar;
    } catch (err) {
      console.log(err);
      return "#";
    }
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            <img src={getUserAvatar(params)} alt='' />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "phone", headerName: "Phone", width: 200 },
    {
      field: "address",
      headerName: "Address",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 80,
    },
    {
      field: "total_price",
      headerName: "Total Price($)",
      width: 120,
      renderCell: (params) => {
        return (
          <div className='productListField'>{params.row.total_price / 100}</div>
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
            <a
              className='tooltips'
              data-placement='top'
              href='#!'
              data-toggle='modal'
              data-target='#quickview_modal_order_detail'
              onClick={() => {
                setOrderId(params.row._id);
                setTotalPrice(params.row.total_price / 100);
              }}
            >
              <button className='editButton'>Order Details</button>
            </a>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className='productListPage'>
        <DataGrid
          getRowId={(row) => row._id}
          loading={data.length === 0}
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
      <QuickViewOrderDetail orderId={orderId} totalPrice={totalPrice} />
    </>
  );
};

export default AdminShowOrderList;
