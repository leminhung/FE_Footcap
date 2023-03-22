import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { listProducts } from "src/store/product/product.action";

import "antd/dist/antd.css";

import "./styles.scss";

const AdminCreateCategory = ({ history }) => {
  const [title, setTitle] = useState("");



  const userToken = JSON.parse(localStorage.getItem("jwt"))?.token;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/categories`,
        {
          title: title,
          thumbnail: `/images/${imgFileName}`
        },
        { headers: headers }
      )
      .then((res) => {
        if (res) {
          toast.success("Category created successfully");
        }
        history.push("/admin/categorylist");
      })
      .catch((error) => {
        toast.error("Category created fail");
        console.log(error);
        toast.error(error.message);
      });

  };

  const [img, setImg] = useState();
  const [imgFileName, setImgFileName] = useState("");
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
    setImgFileName(file.name)
    console.log(file);
  };

  return (
    <>
      <div className="newCatePage">
        <h1>New Category</h1>
        <form>
          <div className="edit">
            <div className="edit-box">
              <div className="item">
                <label>Title</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter category title"
                />
              </div>

              <div className="item">
                <label>Thumbnail</label>
                <input type="file" id="file" onChange={onImageChange} />
                <img src={img} alt="" />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary btn-block mb-4"
              >
                Create
              </button>
            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default AdminCreateCategory;
