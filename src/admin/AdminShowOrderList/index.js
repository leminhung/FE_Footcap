import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../component/Footer";
import { listProducts } from "src/store/product/product.action";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "antd/dist/antd.css";
import "./styles.scss"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';

export const getHeader = () => {
  const userToken = JSON.parse(localStorage.getItem("jwt"))?.token;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  };
  return headers;
}
const AdminShowOrderList = () => {

  const [data, setData] = useState([])
  



  useEffect(() => {
    try {
      axios.get('http://localhost:5000/api/v1/order', { headers: getHeader() }).
        then((res) => {
          const data = res.data.data.map((val, index) => {
            return { ...val, id: index };
          })
          setData(data);
        }).catch(err => {
          //history.push("/signin");
          console.log(err);
        })

    } catch (err) {
      console.log("err", err);
    }

  }, [])


  const getUserAvatar = (params) => {
    try {
      return params.row.user.avatar
    } catch (err) {
      console.log(err);
      return "#";
    }
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'username', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <div className='productListField'>
            <img src={getUserAvatar(params)} alt="" />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'phone', headerName: 'Phone', width: 200 },
    {
      field: 'address',
      headerName: 'Address',
      width: 90,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160
    },
    {
      field: 'note',
      headerName: 'Note',
      width: 160
    },
    {
      field: 'total_price',
      headerName: 'Total Price',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
   
        return (
          <>
            <Link to={`/admin/order-detail/${params.row._id}`}>
              <button className="editButton ">Xem Chi Tiết</button>
            </Link>
            {/* <DeleteOutline className='deleteButton' onClick={() => handleDelete(params)} /> */}
          </>
        )
      }
    }
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
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </div>
    </>
  );
};

export default AdminShowOrderList;
