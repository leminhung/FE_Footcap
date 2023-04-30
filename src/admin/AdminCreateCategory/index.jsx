import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./styles.scss";
import { logout } from "src/store/user/user.action";

const AdminCreateCategory = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(undefined);

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userInfo.token}`,
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/categories`,
        {
          title,
          thumbnail,
        },
        { headers: headers }
      )
      .then((res) => {
        if (res) {
          toast.success("Category created successfully");
        }
        history.push("/admin/categorieslist");
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          toast.error(
            "You are not authorized or maybe token expired, pls login again"
          );
          setTimeout(() => {
            dispatch(logout());
          }, 1500);
        } else {
          toast.error(error?.message);
        }
      });
  };

  const handleChangeThumbnail = (e) => {
    const files = Array.from(e.target.files);
    setThumbnail(`/images/categories/${files[0].name}`);
  };

  const cate_defaultImg = "/images/cate_default.png";

  return (
    <>
      <div className='newCatePage'>
        <h1>New Category</h1>
        <form>
          <div className='edit'>
            <div className='edit-box'>
              <div className='item'>
                <label>Title</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type='text'
                  placeholder='Enter category title'
                />
              </div>

              <div className='item'>
                <label>Thumbnail</label>
                <input
                  type='file'
                  id='file'
                  onChange={(e) => handleChangeThumbnail(e)}
                />
                <img
                  className='mt-3'
                  src={thumbnail ? thumbnail : cate_defaultImg}
                  alt=''
                />
              </div>
              <div className='buttonWrapper'>
                <button
                  onClick={handleSubmit}
                  type='submit'
                  className='btn btn-primary mb-4'
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminCreateCategory;
