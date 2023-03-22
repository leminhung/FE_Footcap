import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { listProducts } from "src/store/product/product.action";

import "antd/dist/antd.css";

import "./styles.scss";

const AdminCreateProduct = ({ history }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [numReviews, setNumReviews] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [rating, setRating] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");

  const [categories, setCategories] = useState([]);
  //load category form the backend
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/categories`)
      .then((res) => {
        console.log(res.data.data);
        setCategories(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, []);

  const userToken = JSON.parse(localStorage.getItem("jwt"))?.token;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/products/add-product`,
        {
          title: name,
          price: price,
          discount: discount,
          numReviews: numReviews,
          size: size,
          color: color,
          rating: rating,
          status: status,
          category: category,
          code: code,
        },
        { headers: headers }
      )
      .then((res) => {
        if (res) {
          // console.log(response);
          toast.success("Product created successfully");
          dispatch(listProducts());
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });

    history.push("/admin/dashboard");
  };

  return (
    <>
      <div className="newProductPage">
        <h1>New Product</h1>
        <form>
          <div className="edit">
            <div className="edit-box">
              <div className="item">
                <label>Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter product name"
                />
              </div>
              <div className="item">
                <label>Code</label>
                <input
                  onChange={(e) => setCode(e.target.value)}
                  type="text"
                  placeholder="Enter product code"
                />
              </div>
              <div className="item">
                <label>Price</label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder="Enter product price"
                />
              </div>
              <div className="item">
                <label>Discount</label>
                <input
                  onChange={(e) => setDiscount(e.target.value)}
                  type="text"
                  placeholder="Enter product discount"
                />
              </div>
              <div className="item">
                <label>Size</label>
                <input
                  onChange={(e) => setSize(e.target.value)}
                  type="text"
                  placeholder="Enter product size"
                />
              </div>
              <div className="item">
                <label>Image</label>
                <input type="file" id="file" />
              </div>
            </div>
            <div className="edit-box">
              <div className="item">
                <label>Color</label>
                <input
                  onChange={(e) => setColor(e.target.value)}
                  type="text"
                  placeholder="Enter product color"
                />
              </div>
              <div className="item">
                <label>Rating</label>
                <input
                  onChange={(e) => setRating(e.target.value)}
                  type="text"
                  placeholder="Enter product rating"
                />
              </div>
              <div className="item">
                <label>NumReviews</label>
                <input
                  onChange={(e) => setNumReviews(e.target.value)}
                  type="text"
                  placeholder="Enter product NumReviews"
                />
              </div>
              <div className="item activeContainer">
                <label> Status </label>
                <select onChange={(e) => setStatus(e.target.value)}>
                  <option value="còn hàng">Còn hàng</option>
                  <option value="hết hàng">Hết hàng</option>
                </select>
              </div>
              <div className="item activeContainer">
                <label> Category </label>
                <select onChange={(e) => setCategory(e.target.value)}>
                  {categories &&
                    categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.title}
                      </option>
                    ))}
                </select>
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

export default AdminCreateProduct;
