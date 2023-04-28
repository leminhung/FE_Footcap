import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Chart from "src/admin/components/chart/Chart.jsx";
import { toast } from "react-toastify";
import { Publish } from "@mui/icons-material";
import axios from "axios";

import { updateProduct } from "src/store/product/product.action";
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

  const [title, setTitle] = useState(data?.title);
  const [price, setPrice] = useState(data?.price);
  const [discount, setDiscount] = useState(data?.discount);
  const [size, setSize] = useState(data?.size);
  const [color, setColor] = useState(data?.color);
  const [status, setStatus] = useState(data?.status);
  const [category, setCategory] = useState(data?.category);
  const [categories, setCategories] = useState([]);

  // colors
  const colors = [
    { color: "#ffa037", name: "green" },
    { color: "#6c7ae0", name: "blue" },
    { color: "#f23226", name: "red" },
    { color: "#828664", name: "pink" },
    { color: "#68a3c2", name: "blue" },
    { color: "#009122", name: "green" },
    { color: "#875546", name: "red" },
    { color: "#f74877", name: "pink" },
    { color: "#1f1e29", name: "black" },
    { color: "#dddddd", name: "pink" },
  ];

  // sizes
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  console.log("data-", data);

  const imagePath = data?.assets[0]?.filename;
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

  const dispatch = useDispatch();
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      productId: data._id,
      title,
      price,
      discount,
      size,
      color,
      status,
      category,
      code: data.code,
    };
    dispatch(updateProduct(product));
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
              <img
                src={imagePath ? imagePath : imageDefault}
                alt='product_not_found'
              />
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
                <div className='d-flex'>
                  <label>Code</label>
                  <input type='text' value={data.code} disabled />
                </div>

                <div className='d-flex'>
                  <label>Name</label>
                  <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className='d-flex'>
                  <label>Price</label>
                  <input
                    type='text'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className='d-flex'>
                  <label>Discount</label>
                  <input
                    type='text'
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>

                <div className='d-flex'>
                  <label>NumReviews</label>
                  <input disabled type='text' value={data.numReviews} />
                </div>
              </div>
              <div className='left-item'>
                <div className='d-flex'>
                  <label>Category</label>
                  <div>
                    <select
                      className='select'
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      {categories &&
                        categories.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.title}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className='d-flex fs_size_list'>
                  <label className='pl-0'>Size</label>
                  <ul class='ul_li clearfix'>
                    {sizes.map((size, index) => (
                      <li>
                        <label for={`fs_size_${index}`}>
                          <input
                            id={`fs_size_${index}`}
                            type='radio'
                            name='fs_size_group'
                            // onClick={() => setSize(size)}
                          />
                          {size}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='d-flex fs_color_list'>
                  <label>Color</label>
                  <ul class='ul_li clearfix ml-2'>
                    {colors.map((color) => (
                      <li>
                        <input
                          type='radio'
                          name='fs_color_froup'
                          // onClick={() => setColor(color.name)}
                          style={{ backgroundColor: color.color }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='d-flex'>
                  <label>Rating</label>
                  <input disabled type='text' value={data.rating} />
                </div>

                <div className='d-flex'>
                  <label>Status</label>
                  <div>
                    <select
                      className='select'
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value='còn hàng'>Còn hàng</option>
                      <option value='hết hàng'>Hết hàng</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='upload'>
                <label htmlFor='file'>
                  <img
                    src={imagePath ? imagePath : imageDefault}
                    alt='product_not_found'
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
