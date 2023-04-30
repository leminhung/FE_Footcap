import { Publish } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Chart from "src/admin/components/chart/Chart.jsx";

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
const AdminEditCategory = () => {
  const location = useLocation();
  const history = useHistory();
  const { data } = location.state;
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userInfo.token}`,
  };

  const [title, setTitle] = useState(data?.title);
  const [thumbnail, setThumbnail] = useState(data?.thumbnail);

  const imageDefault = "/images/products/default_image.jpeg";

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const isUpdate = window.confirm("Are you want to edit?");
    if (isUpdate) {
      const fieldMark = {
        title,
        thumbnail,
      };
      axios
        .put(
          `${process.env.REACT_APP_BASE_URL}/categories/${data?._id}`,
          fieldMark,
          { headers }
        )
        .then((res) => {
          if (res) {
            toast.success(`Update successfull`);
          }
          history.push("/admin/categorieslist");
        })
        .catch((error) => {
          console.log(error);
          toast.error(`Update fail`);
        });
    }
  };

  const handleChangeThumbnail = (e) => {
    const files = Array.from(e.target.files);
    setThumbnail(`/images/categories/${files[0].name}`);
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
                    src={thumbnail ? thumbnail : imageDefault}
                    alt='product thumbnail'
                  />
                  <Publish className='publish' />
                </label>
                <input
                  type='file'
                  id='file'
                  onChange={(e) => handleChangeThumbnail(e)}
                  style={{ display: "none" }}
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

export default AdminEditCategory;
