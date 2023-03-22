import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import Header from "src/component/Header";
import Footer from "src/component/Footer";
import Loading from "src/component/Loading";
import Rating from "src/component/Rating";

import { addItemToCart } from "src/store/cart/cart.action";

import { loadUser } from "src/store/user/user.action";
import { isEmptyArray } from "formik";

import "./styles.css";

const ViewProduct = ({ match, history }) => {
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState(1);
  const {
    title,
    price,
    description,
    status,
    discount,
    size,
    color,
    category,
    countStock,
    comments,
    images,
    _id,
  } = product;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);

  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/products/${match.params.productid}`)
      .then((res) => {
        setProduct(res.data.data);
        setLoading(false);
      });
  }, [rating]);

  const handleClickCard = () => {
    if(sizeChose && sizeChose){
      dispatch(addItemToCart(match.params.productid,1,colorChose,sizeChose));
      history.push("/cart");
    }else{
      toast.error("Phải chọn size và màu!")
    }
   
  };

  //INCREASE VALUE
  const increaseValue = () => {
    const count = Number(document.getElementById("number").value);
    if (count >= countStock) return;
    const quantity = count + 1;
    setQty(quantity);
  };

  //DECREASE VALUE
  const decreaseValue = () => {
    const count = Number(document.getElementById("number").value);
    if (count <= 1) return;
    const quantity = count - 1;
    setQty(quantity);
  };

  //Num Rating
  const [numRating, setNumRating] = useState(5);
  useEffect(() => {
    if (comments) {
      let total = 0;
      for (let i = 0; i < comments.length; i++) {
        total += comments[i].rating;
      }
      setNumRating(total / comments.length);
    }
  }, [comments]);

  // Reverse comments array
  let commentsReverse = []
  if (product) {
    commentsReverse = [...comments].reverse();
  }

  const userToken = JSON.parse(localStorage.getItem("jwt"))?.token;

  // submit rating
  const submitRating = async (e) => {
    e.preventDefault();

    const userId = user.data._id;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };
    const data = { comment, rating, user: userId, product: _id };
    await axios
      .post(`http://localhost:5000/api/v1/comments`, data, { headers: headers })
      .then((res) => {
        console.log("res review", res);
        toast.success("review added");
        setComment("");
        setRating(0);
      })
      .catch((error) => {
        console.log("error review", error.response.data.error);
        toast.error(error.response.data.error);
      });
  };
  console.log(JSON.parse(localStorage.getItem("jwt")));

  useEffect(() => {
    if (!isEmptyArray(user) || user) {
      if (user?.data?.token) {
        dispatch(loadUser(user?.data?.token));
      }
    }
  }, [user?.data]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/v1/auth/profile"
  //     )
  //     .then((res) => {
  //       console.log("haha");
  //       setUserData(res.data.data)
  //     })
  // }, []);

  // useEffect(() => { }, [numReviews]);

  //Chose color
  const [colorChose, setColorChose] = useState(null);
  function handleChoseColor(e,color) {
    const colorItems = document.querySelectorAll(".product-color-item");
    colorItems.forEach((item) => {
      item.classList.remove("color-item-chose");
    });
    e.target.classList.add("color-item-chose");
    setColorChose(color)
  }

  //Chose size
  const [sizeChose, setSizeChose] = useState(null);
  function handleChoseSize(e,size) {
    const sizeItems = document.querySelectorAll(".product-size-item");
    sizeItems.forEach((item) => {
      item.classList.remove("size-item-chose");
    });
    e.target.classList.add("size-item-chose");
    setSizeChose(size);
  }

  // handle slide img
  const [imgCount, setImgCount] = useState(0);
  function handleNextImg() {
    if (imgCount >= images.length - 1) {
      setImgCount(0);
    } else {
      setImgCount((prev) => prev + 1);
    }
  }
  function handlePrevImg() {
    if (imgCount <= 0) {
      setImgCount(images.length - 1);
    } else {
      setImgCount((prev) => prev - 1);
    }
  }
  // handle slide img
  // useEffect(() => {
  //   const timeOutImg = setTimeout(() => {
  //     setImgCount(prev => {
  //       if (imgCount <= 0) {
  //         setImgCount(images.length - 1);
  //       } else {
  //         setImgCount((prev) => prev - 1);
  //       }
  //     })
  //   }, 4000)
  //   return () => {
  //     clearTimeout(timeOutImg);
  //   }
  // }, [imgCount])

  return (
    <>
      <Header></Header>
      <div className='container single_product'>
        {loading ? (
          <Loading />
        ) : (
          <div className='row'>
            <div className='col-sm-12'>
              <p className='menu-nav-link'>
                Home - {category.title} - {title}
              </p>
            </div>
            <div className='col-sm-7 wrap-product-img'>
              <div className='control-img'>
                <div className='prev'>
                  <ion-icon
                    onClick={handlePrevImg}
                    name='chevron-back-outline'
                  ></ion-icon>
                </div>
                <div className='next'>
                  <ion-icon
                    onClick={handleNextImg}
                    name='chevron-forward-outline'
                  ></ion-icon>
                </div>
              </div>
              <img
                id='product-img'
                className='product-img'
                src={images[imgCount]?.path}
                alt=''
              />
            </div>
            <div className='col-sm-5'>
              <div className='product_desc_wrapper'>
                <div className='product_title'>
                  <h1>{title}</h1>

                  <hr />
                  <div className='price-discount-wrap'>
                    <div className='price-wrap'>
                      <h2 className='price-discount'>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((price * (100 - discount / 100)).toFixed(2))}
                      </h2>
                      <h2 className='price-prev'>{price.toFixed(2)}</h2>
                    </div>
                    <h4>-{discount}%</h4>
                  </div>
                  <div className='num-rating-wrap'>
                    <Rating value={numRating} />
                    <span className='num-rating'>{numRating.toFixed(1)}</span>
                  </div>
                </div>

                <div className='qty_and_addtocart'>
                  <div className='qty'>
                    <div
                      onClick={decreaseValue}
                      className='value-button'
                      id='decrease'
                      value='Decrease Value'
                    >
                      -
                    </div>
                    <input type='number' id='number' value={qty} readOnly />
                    <div
                      onClick={increaseValue}
                      className='value-button'
                      id='increase'
                      value='Increase Value'
                    >
                      +
                    </div>
                  </div>
                  <div className='product-color'>
                    <h3 className='color-title'>Màu sắc</h3>
                    <div className='product-color-list'>
                      {color.map((col) => {
                        return (
                          <div
                            className='product-color-item'
                            style={{ backgroundColor: col }}
                            onClick={(e)=>handleChoseColor(e,col)}
                            name='color'
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                  <div className='product-size'>
                    <h3 className='size-title'>Size</h3>
                    <div className='product-size-list'>
                      {size.map((sz) => {
                        return (
                          <div
                            className='product-size-item'
                            onClick={(e)=>handleChoseSize(e,sz)}
                          >
                            {sz}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <button
                    onClick={handleClickCard}
                    className='addtocart btn btn-primary btn-block mb-4'
                  >
                    Add to cart
                  </button>
                </div>
                <div className='stock'>
                  <hr />
                  <p>Status: {status}</p>
                </div>

                <hr />
                <div className='desc'>
                  <h2>Description</h2>
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div className='col-sm-12 mt-40'>
              <hr />
              <h2>REVIEWS</h2>
              <div className='img_div'>
                {/* <img
                          className='img-fluid'
                          src={images[0].path}
                          alt={title}
                        /> */}
                <div className='review'>
                  {commentsReverse && commentsReverse.length === 0 && (
                    <>
                      <div
                        className='alert alert-warning alert_warning_custom'
                        role='alert'
                        data-mdb-color='warning'
                      >
                        {" "}
                        No review added yet{" "}
                      </div>
                    </>
                  )}

                  <div className='review_loop'>
                    {commentsReverse &&
                      commentsReverse.map((cmt) => (
                        <div className='comment-wrap'>
                          <div className='comment-user-icon-div'>
                            <ion-icon
                              className='comment-user-icon'
                              name='person-circle-outline'
                            ></ion-icon>
                          </div>
                          <ul className='review_list'>
                            <li className='comment-username-and-time-wrap'>
                              <span className='comment-user-name'>
                                {cmt.user.name}
                              </span>
                              <p className='comment-time'>
                                {new Date(cmt.createdAt).toLocaleDateString()}
                              </p>
                            </li>
                            <li>
                              <Rating value={cmt.rating} />
                            </li>
                            <li>
                              <p className='comment-content'>{cmt.comment}</p>
                            </li>
                          </ul>
                        </div>
                      ))}
                    <hr />
                    <div className='review_comment'>
                      {user ? (
                        <>
                          <form
                            className='col-sm-6  pt-5'
                            onSubmit={submitRating}
                          >
                            <h4>Leave a review</h4>
                            <div className='mb-2'>
                              <select
                                className='mdb-select'
                                onChange={(e) => setRating(e.target.value)}
                                value={rating}
                                required
                              >
                                <option value='' selected>
                                  Choose your rating
                                </option>
                                <option value='1'> 1 - Poor</option>
                                <option value='2'> 2 - Fair</option>
                                <option value='3'> 3 - Good</option>
                                <option value='4'> 4 - Very Good</option>
                                <option value='5'> 5 - Excellent</option>
                              </select>
                            </div>
                            <div className='mb-4'>
                              <label
                                className='form-label'
                                htmlFor='form4Example1'
                              >
                                Leave a comment
                              </label>
                              <textarea
                                required
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className='form-control'
                                name=''
                                id=''
                                cols='100'
                                rows='3'
                                placeholder='Comment...'
                              ></textarea>
                            </div>
                            <button
                              type='submit'
                              className='btn-add-review btn btn-primary btn-block mb-4'
                            >
                              Add review
                            </button>
                          </form>
                        </>
                      ) : (
                        <>
                          Please <Link to={"/signin"}>Sign In</Link> to leave a
                          review
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ViewProduct;
