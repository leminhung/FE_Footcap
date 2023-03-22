import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Chart from "src/admin/components/chart/Chart.jsx";
import { toast } from "react-toastify";
import { Publish } from "@mui/icons-material";
import axios from "axios";
import "antd/dist/antd.css";


import "./styles.scss";

const productData = [
  {
    name: "Jan",
    Sales: 4000,
  },
  {
    name: "Feb",
    Sales: 2500,
  },
  {
    name: "Mar",
    Sales: 2100,
  },
];
const AdminEditCategory = ({ match, history, props }) => {
  const location = useLocation();
  const { data } = location.state;

  const userToken = JSON.parse(localStorage.getItem("jwt"))?.token;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  };

  const [title, setTitle] = useState(data?.title);
  const [thumbnail, setThumbnail] = useState(data?.thumbnail);

  const imageDefault = "/images/products/default_image.jpeg";

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const isUpdate = window.confirm("Bạn có chắc muốn sửa không?")
    if (isUpdate) {
      const fieldMark = {
        title: title,
        thumbnail: `/images/${imgFileName}`
      };
      axios
        .put(
          `${process.env.REACT_APP_BASE_URL}/categories/${match.params.categoryId}`,
          fieldMark,
          { headers }
        )
        .then((res) => {
          if (res) {
            toast.success(`Update successfull`);
          }
          history.push("/admin/categorylist");
        })
        .catch((error) => {
          console.log(error);
          toast.error(`Update fail`);
        });
    }
  };

  const [img, setImg] = useState("");
  const [imgFileName, setImgFileName] = useState("");
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
    setImgFileName(file.name)
    console.log(file);
  };

  return (
    <>
      <div className='catePage'>
        <div className='titleContainer'>
          <h1>Edit Product</h1>
        </div>

        <div className='top'>
          <div className='topLeft'>
            <Chart
              data={productData}
              dataKey='Sales'
              title='Sales Perfomance'
              grid
            />
          </div>
          <div className='topRight'>
            <div className='topInfo'>
              <img src={thumbnail ? thumbnail : imageDefault} alt='' />
              <span>{data?.title}</span>
            </div>

            <div className='bottomInfo'>
              <div className='infoItem'>
                <span className='key'>ID: </span>
                <span className='value'>{data?._id}</span>
              </div>
              <div className='infoItem'>
                <span className='key'>Slug: </span>
                <span className='value'>{data?.slug}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <form>
            <div className='left'>
              <div className='left-item'>
                <label>Category Name</label>
                <input
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className='right'>
              <div className='upload'>
                <label htmlFor='file'>
                  <img
                    src={thumbnail ? (img ? img : thumbnail) : imageDefault}
                    alt='product thumbnail'
                  />
                  <Publish className='publish' />
                </label>
                <input type='file' id='file' onChange={onImageChange} style={{ display: "none" }} />
              </div>
            </div>
          </form>
          <div className='buttonWrapper'>
            <button onClick={handleSubmit} type='submit'>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEditCategory;
