import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import moment from "moment";

import { logout } from "src/store/user/user.action";

import "./styles.scss";

export function getList(url, headers) {
  return axios.get(url, { headers });
}

const AdminShowCategoryList = () => {
  const [data, setData] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userInfo.token}`,
  };

  const coupon_defaultImg = "/images/coupon/coupon.jpg";

  useEffect(() => {
    let mounted = true;
    getList(`${process.env.REACT_APP_BASE_URL}/coupons`, headers).then(
      (res) => {
        if (mounted) {
          setData(res.data.data);
        }
      }
    );
    return () => (mounted = false);
  }, []);

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    const isDelete = window.confirm("Do you want to remove this coupon?");
    if (isDelete) {
      setData(data.filter((item) => item._id !== id));
      await axios
        .delete(`${process.env.REACT_APP_BASE_URL}/coupons/${id}`, {
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
  };

  const columns = [
    {
      field: "coupon",
      headerName: "Code",
      width: 160,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            <img src={coupon_defaultImg} alt='' />
            {params.row.coupon_code}
          </div>
        );
      },
    },
    {
      field: "coupon_start_date",
      headerName: "Start Date",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            {moment(params.row.coupon_start_date).format("lll")}
          </div>
        );
      },
    },
    {
      field: "coupon_end_date",
      headerName: "End Date",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListField'>
            {moment(params.row.coupon_end_date).format("lll")}
          </div>
        );
      },
    },
    {
      field: "coupon_value",
      headerName: "Spend",
      width: 80,
    },
    { field: "coupon_spend", headerName: "Value", width: 100 },
    {
      field: "coupon_status",
      headerName: "Status",
      width: 80,
      renderCell: (params) => {
        return (
          <div className='productListField'>{params.row.coupon_status}</div>
        );
      },
    },
    { field: "coupon_uses_per_coupon", headerName: "Max uses", width: 80 },
    { field: "coupon_count_per_coupon", headerName: "Used", width: 80 },

    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: `/admin/couponlist/edit`,
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
        <Link style={{ margin: "10px" }} to={`/admin/couponlist/create`}>
          <div className='buttonWrapper'>
            <button className='btn btn-primary'>Create Coupon</button>
          </div>
        </Link>
        <DataGrid
          getRowId={(row) => row._id}
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
