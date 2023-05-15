import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ExcelJS from "exceljs";

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

  // export func
  const exportExcelFile = () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("My Sheet");
    sheet.properties.defaultRowHeight = 40;

    sheet.getRow(1).border = {
      top: { style: "thick", color: { argb: "FFFF0000" } },
      left: { style: "thick", color: { argb: "000000FF" } },
      bottom: { style: "thick", color: { argb: "F08080" } },
      right: { style: "thick", color: { argb: "FF00FF00" } },
    };

    sheet.getRow(1).fill = {
      type: "pattern",
      pattern: "darkVertical",
      fgColor: { argb: "FFFF00" },
    };

    sheet.getRow(1).font = {
      name: "Comic Sans MS",
      family: 4,
      size: 16,
      bold: true,
    };

    sheet.columns = [
      {
        header: "Code",
        key: "id",
        width: 30,
      },
      { header: "Username", key: "username", width: 32 },
      {
        header: "Phone",
        key: "phone",
        width: 20,
      },
      {
        header: "Address",
        key: "address",
        width: 60,
      },
      {
        header: "Status",
        key: "status",
        width: 30,
      },
      {
        header: "Total Price($)",
        key: "total",
        width: 30,
      },
    ];

    const promise = Promise.all(
      data?.map(async (order) => {
        sheet.addRow({
          id: order?._id,
          username: order?.username,
          phone: order?.phone,
          address: order?.address,
          status: order?.status,
          total: order?.total_price,
        });
      })
    );

    let total = [];
    sheet.eachRow((row, index) => {
      if (index !== 0) {
        total.push(row.getCell(6).value);
        row.border = {
          top: { style: "thick", color: { argb: "e0e0e0" } },
          left: { style: "thick", color: { argb: "e0e0e0" } },
          bottom: { style: "thick", color: { argb: "e0e0e0" } },
          right: { style: "thick", color: { argb: "e0e0e0" } },
        };
        row.alignment = {
          wrapText: true,
          vertical: "middle",
          horizontal: "center",
        };
      }
    });

    total.splice(0, 1);
    total = total.reduce(function (prev, cur) {
      return prev + cur;
    });

    // add sum price
    sheet.addRow({
      id: "",
      username: "",
      phone: "",
      address: "",
      status: "",
      total,
    });
    sheet.lastRow.getCell(6).fill = {
      type: "pattern",
      bgColor: { argb: "FF6347" },
      fgColor: { argb: "FF6347" },
    };
    sheet.lastRow.alignment = {
      wrapText: true,
      vertical: "middle",
      horizontal: "center",
    };
    sheet.lastRow.font = {
      name: "Comic Sans MS",
      family: 4,
      size: 16,
      bold: true,
    };

    promise.then(() => {
      workbook.xlsx.writeBuffer().then(function (data) {
        const blob = new Blob([data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "revenue.xlsx";
        anchor.click();
        window.URL.revokeObjectURL(url);
      });
    });
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return <div className='orderListField'>{params.row.username}</div>;
      },
    },
    { field: "phone", headerName: "Phone", width: 160 },
    {
      field: "address",
      headerName: "Address",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    },
    {
      field: "total_price",
      headerName: "Total Price($)",
      width: 120,
      renderCell: (params) => {
        return <div className='productListField'>{params.row.total_price}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
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
                setTotalPrice(params.row.total_price);
              }}
            >
              <button className='editButton'>Order Details</button>
            </a>
            <Link
              to={{
                pathname: `/admin/orderslist/edit`,
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
        <div className='buttonWrapper my-2 d-flex justify-content-start ml-3'>
          <button onClick={() => exportExcelFile()}>Export</button>
        </div>
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
