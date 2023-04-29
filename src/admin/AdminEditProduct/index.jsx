import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Chart from "src/admin/components/chart/Chart.jsx";
import { toast } from "react-toastify";
import { Publish } from "@mui/icons-material";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { updateProduct } from "src/store/product/product.action";
import updateImgProfilePicture from "src/utils/updateImgProductProfile";
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
const AdminEditProduct = ({ match, props }) => {
  const location = useLocation();
  const { data } = location.state;
  const [isCheckeds, setIsCheckeds] = useState([...Array(10)].fill(false));
  const [isCheckedSizes, setIsCheckedSizes] = useState(
    [...Array(6)].fill(false)
  );

  const [title, setTitle] = useState(data?.title);
  const [price, setPrice] = useState(data?.price);
  const [discount, setDiscount] = useState(data?.discount);
  const [status, setStatus] = useState(data?.status);
  const [category, setCategory] = useState(data?.category);
  const [categories, setCategories] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  // colors
  const colors = [
    { color: "#ffa037", name: "green" },
    { color: "#6c7ae0", name: "blue" },
    { color: "#f23226", name: "red" },
    { color: "#828664", name: "pink" },
    { color: "#68a3c2", name: "fountain-blue" },
    { color: "#009122", name: "fun-green" },
    { color: "#875546", name: "spicy-mix" },
    { color: "#f74877", name: "violet-red" },
    { color: "#1f1e29", name: "gray" },
    { color: "#dddddd", name: "alto" },
  ];

  // sizes
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  // set colors product have
  useEffect(() => {
    setIsCheckeds(
      colors.map((color) => {
        if (data.color.includes(color.name)) return true;
        return false;
      })
    );
    setIsCheckedSizes(
      sizes.map((size) => {
        if (data.size.includes(size)) return true;
        return false;
      })
    );
  }, []);

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
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let colorsSelected = colors.map((color, index) =>
      isCheckeds[index] ? color.name : undefined
    );

    let sizesSelected = sizes.map((size, index) =>
      isCheckedSizes[index] ? size : undefined
    );
    const product = {
      productId: data._id,
      title,
      price,
      discount,
      size: sizesSelected.filter(Boolean),
      color: colorsSelected.filter(Boolean),
      status,
      category,
      code: data.code,
    };

    dispatch(updateProduct(product));
    await updateImgProfilePicture(data._id, selectedFile, userInfo.token);
    history.push("/admin/products");
  };

  const handleCheckedColor = (result, index) => {
    isCheckeds[index] = !result;
    setIsCheckeds([...isCheckeds]);
  };

  const handleCheckedSize = (result, index) => {
    isCheckedSizes[index] = !result;
    setIsCheckedSizes([...isCheckedSizes]);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFile(`/images/products/41/${files[0].name}`);
  };

  return (
    <>
      <div className='productPage'>
        <div className='titleContainer'>
          <h1>Edit Product</h1>
          <Link to='/admin/products/create'>
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
                            type='checkbox'
                            name='fs_size_group'
                            onClick={() =>
                              handleCheckedSize(isCheckedSizes[index], index)
                            }
                            checked={isCheckedSizes[index]}
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
                    {colors.map((color, index) => (
                      <li>
                        <input
                          type='checkbox'
                          name='fs_color_froup'
                          onClick={() =>
                            handleCheckedColor(isCheckeds[index], index)
                          }
                          style={{ backgroundColor: color.color }}
                          checked={isCheckeds[index]}
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
                      <option value='còn hàng'>Stock</option>
                      <option value='hết hàng'>Out of stock</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='upload'>
                <label htmlFor='file'>
                  <img
                    src={
                      selectedFile ? selectedFile : imagePath || imageDefault
                    }
                    alt='product_not_found'
                  />
                  <Publish className='publish' />
                </label>
                <input
                  type='file'
                  id='file'
                  style={{ display: "none" }}
                  onChange={(e) => handleFileSelect(e)}
                />
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
