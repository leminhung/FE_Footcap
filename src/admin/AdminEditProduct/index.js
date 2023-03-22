import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Chart from "src/admin/components/chart/Chart.jsx";
import { toast } from "react-toastify";
import { Publish } from "@mui/icons-material";
import axios from "axios";
import "antd/dist/antd.css";

import { headers } from "src/utils/getTokenFromLocalStorage";

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
const AdminEditProduct = ({ match, history, props }) => {
  const location = useLocation();
  const { data } = location.state;

  console.log(headers);

  const [title, setTitle] = useState(data?.title);
  const [code, setCode] = useState(data?.code);
  const [price, setPrice] = useState(data?.price);
  const [discount, setDiscount] = useState(data?.discount);
  const [size, setSize] = useState(data?.size);
  const [color, setColor] = useState(data?.color);
  const [status, setStatus] = useState(data?.status);
  const [category, setCategory] = useState(data?.category);
  const [categories, setCategories] = useState([]);

  const imagePath = data?.images[0]?.path;
  const imageDefault = "/images/products/default_image.jpeg";

  const [prodDetails] = useState([
    { label: "Price", value: `${data?.price}` },
    { label: "Discount", value: `${data?.discount}` },
    { label: "Size", value: `${data?.size}` },
    { label: "Color", value: `${data?.color}` },
    { label: "Rating", value: `${data?.rating}` },
    { label: "NumReviews", value: `${data?.numReviews}` },
  ]);

  //load categories
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/categories`)
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const fieldMark = {
      title,
      price,
      discount,
      size,
      color,
      status,
      category,
      code,
    };
    axios
      .put(
        `${process.env.REACT_APP_BASE_URL}/products/${match.params.productId}`,
        fieldMark,
        { headers }
      )
      .then((res) => {
        if (res) {
          toast.success(`Update successfull`);
        }
        history.push("/admin/productlist");
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Update fail`);
      });
  };

  return (
    <>
      <div className='productPage'>
        <div className='titleContainer'>
          <h1>Edit Product</h1>
          <Link to='/newProduct'>
            <button>Create</button>
          </Link>
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
              <img src={imagePath ? imagePath : imageDefault} alt='Hung dz' />
              <span>{data?.title}</span>
            </div>

            <div className='bottomInfo'>
              {prodDetails.map((prod) => (
                <div className='infoItem'>
                  <span className='key'>{prod.label}</span>
                  <span className='value'>{prod.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='bottom'>
          <form>
            <div className='left'>
              <div className='left-item'>
                <label>Product Code</label>
                <input
                  type='text'
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />

                <label>Product Name</label>
                <input
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label>Product Price</label>
                <input
                  type='text'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <label>Product Discount</label>
                <input
                  type='text'
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />

                <label>Product NumReviews</label>
                <input disabled type='text' value={data.numReviews} />
              </div>
              <div className='left-item'>
                <label>Category</label>
                <div>
                  <select className="select" onChange={(e) => setCategory(e.target.value)}>
                    {categories &&
                      categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.title}
                        </option>
                      ))}
                  </select>
                </div>

                <label>Product Size</label>
                <input
                  type='text'
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />

                <label>Product Color</label>
                <input
                  type='text'
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />

                <label>Product Rating</label>
                <input disabled type='text' value={data.rating} />

                <label>Status</label>
                <div>
                  <select className="select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value='còn hàng'>Còn hàng</option>
                    <option value='hết hàng'>Hết hàng</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='upload'>
                <label htmlFor='file'>
                  <img
                    src={imagePath ? imagePath : imageDefault}
                    alt='Hung dz'
                  />
                  <Publish className='publish' />
                </label>
                <input type='file' id='file' style={{ display: "none" }} />
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

export default AdminEditProduct;
