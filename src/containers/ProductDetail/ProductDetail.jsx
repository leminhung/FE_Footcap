import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import StarRating from "star-rating-react";

import ProductDetailSkeleton from "src/containers/ProductDetail/ProductDetailSkeleton";
import RelateProduct from "src/components/RelateProduct/RelateProduct";

import {
  listProductDetails,
  listTopProducts,
} from "src/store/product/product.action";
import { addToCart } from "src/store/cart/cart.action";

import { roundNumber } from "src/utils/roundNumber";
import { capitalizeFirstLetter } from "src/utils/convertFirstLetterToUpperCase";
import { checkQuantityBeforeAddToCart } from "src/utils/checkQuantifyAvailable";

const itemDisplay = {
  active: "tab-pane active",
  unactive: "tab-pane fade",
};

const Product = ({ product = {}, productTopRated = {} }) => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(3);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [cartItems, setCartItems] = useState([]);

  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart]);

  // colors
  const colors = {
    green: "#ffa037",
    blue: "#68a3c2",
    red: "#f23226",
    pink: "#828664",
    black: "#1f1e29",
    brown: "#cc7b4a",
  };

  const dispatch = useDispatch();
  const handleAction = (e) => {
    e.preventDefault();

    // check quantity available
    const quantityAvailable =
      product.data.quantity - product.data?.quantity_purchased || 0;
    if (quantity > quantityAvailable) {
      toast.error(
        `Sorry, the store only has ${quantityAvailable} item available`
      );
      return;
    }

    // make sure all the field are filled in
    if (!size || !color || quantity === 0) {
      toast.error(`Ohh, please fill in all the fields before add to cart`);
      return;
    }

    product.data.available = quantityAvailable;
    if (!checkQuantityBeforeAddToCart(product?.data, quantity, cartItems)) {
      toast.error(
        `Ohh, we only have ${quantityAvailable} items, but your cart already added more than ${quantityAvailable} for this product`
      );
      return;
    }

    let prod = {
      product: product.data._id,
      name: product.data.title,
      image: product.data.assets[0]?.filename,
      price: product.data.price,
      quantity,
      size,
      color,
      available: quantityAvailable,
    };
    dispatch(addToCart(prod));
  };

  return (
    <section className='details_section shop_details sec_ptb_48 clearfix'>
      <div className='container'>
        <div className='row mb_100 justify-content-lg-between'>
          <div className='col-lg-5 col-md-5'>
            <div className='shop_details_image'>
              <div className='tab-content'>
                {product.data.assets.slice(0, 4).map((item, index) => (
                  <div
                    id={`tab_${index + 1}`}
                    className={
                      index === 0 ? itemDisplay.active : itemDisplay.unactive
                    }
                  >
                    <img src={item.filename} alt='image_not_found' />
                  </div>
                ))}
              </div>

              <ul className='nav ul_li clearfix' role='tablist'>
                {product.data.assets.slice(0, 4).map((item, index) => (
                  <li>
                    <a
                      className={index === 0 ? "active" : ""}
                      data-toggle='tab'
                      href={`#tab_${index + 1}`}
                    >
                      <img src={item.filename} alt='image_not_found' />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='col-lg-7 col-md-7'>
            <div className='shop_details_content'>
              <h2 className='item_title'>{product.data.title}</h2>
              <span className='item_price'>
                ${product.data.price} – ${roundNumber(product.data.price * 1.2)}
              </span>
              <hr className='my-4' />
              <div className='row align-items-center justify-content-lg-between'>
                <div className='col-lg-5 col-md-12 col-sm-12 col-xs-12'>
                  <div className='item_brand d-flex align-items-center'>
                    <span className='brand_title'>Brands:</span>
                    <span className='brand_image d-flex align-items-center justify-content-center'>
                      <img
                        src='/images/cate_default.png'
                        alt='image_not_found'
                        width='60px'
                        height='30px'
                      />
                    </span>
                  </div>
                </div>

                <div className='col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                  <div className='rating_review_wrap d-flex align-items-center clearfix'>
                    <span>{product.data.numReviews} Review(s)</span>
                    <ul className='rating_star ul_li'>
                      {[
                        ...Array(product.data.rating ? product.data.rating : 1),
                      ].map(() => (
                        <li>
                          <i className='fas fa-star'></i>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='row align-items-center justify-content-lg-between'>
                <div className='col-lg-5 col-md-12 col-sm-12 col-xs-12'>
                  <div className='item_brand d-flex align-items-center'>
                    <span className='brand_title'>Sold:</span>
                    <span className='brand_image d-flex align-items-center justify-content-center'>
                      {product.data?.quantity_purchased || 0}
                    </span>
                  </div>
                </div>

                <div className='col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                  <div className='d-flex align-items-center clearfix'>
                    <span>Available: </span>
                    <span className='ml-2 text-success'>
                      {product.data.quantity -
                        product.data?.quantity_purchased || 0}
                    </span>
                  </div>
                </div>
              </div>

              <p className='mb-0'>{product.data.description}</p>
              <hr className='my-4' />
              <div className='fs_widget fs_color_list pb-0 mb-4'>
                <h3 className='list_title mb_15 text-uppercase'>Color</h3>
                <form action='#'>
                  <ul className='ul_li clearfix'>
                    {product.data.color.map((c) => (
                      <li>
                        <input
                          type='radio'
                          name='fs_color_froup'
                          onClick={() => setColor(c)}
                          style={{ backgroundColor: `${colors[c]}` }}
                        />
                        <span className='ml-1'>{capitalizeFirstLetter(c)}</span>
                      </li>
                    ))}
                  </ul>
                </form>
              </div>
              <div className='fs_widget fs_size_list item_size_list clearfix py-0 mb-4'>
                <h4 className='list_title text-uppercase'>Size</h4>
                <div className='d-flex'>
                  <form action='#' className='mr-3'>
                    <ul className='ul_li clearfix'>
                      {product.data.size.map((size, index) => (
                        <li className='ml-0'>
                          <label for={`fs_size_${index}`}>
                            <input
                              id={`fs_size_${index}`}
                              type='radio'
                              name='fs_size_group'
                              onClick={() => setSize(size)}
                            />
                            {size}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </form>
                  <a className='size_guide' href='#!'>
                    <i className='far fa-tape mr-1'></i> Size Guide
                  </a>
                </div>
              </div>

              <ul className='btns_group_1 ul_li mb_30 clearfix'>
                <li>
                  <div className='quantity_input pt-3'>
                    <form action='#'>
                      <span
                        className='input_number_decrement'
                        onClick={() => setQuantity(quantity - 1)}
                      >
                        –
                      </span>
                      <input
                        className='input_number'
                        type='text'
                        value={quantity}
                      />
                      <span
                        className='input_number_increment'
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </span>
                    </form>
                  </div>
                </li>
                <li onClick={(e) => handleAction(e)}>
                  <a className='custom_btn bg_black text-uppercase' href='#!'>
                    <i className='fal fa-shopping-bag mr-2'></i> Add To Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='details_description_tab mb_100'>
          <ul className='nav ul_li text-uppercase' role='tablist'>
            <li>
              <a className='active' data-toggle='tab' href='#description_tab'>
                Product Description
              </a>
            </li>
            <li>
              <a data-toggle='tab' href='#reviews_tab'>
                Reviews
              </a>
            </li>
            <li>
              <a data-toggle='tab' href='#add_reviews_tab'>
                Add Your Reviews
              </a>
            </li>
          </ul>

          <div className='tab-content'>
            <div id='description_tab' className='tab-pane active'>
              <div className='row mb_50'>
                <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12'>
                  <div className='image_wrap'>
                    <img
                      src={
                        product.data.assets.length > 1 &&
                        product.data.assets[2].filename
                      }
                      alt='image_not_found'
                    />
                  </div>
                </div>

                <div className='col-lg-9 col-md-8 col-sm-12 col-xs-12'>
                  <div className='content_wrap'>
                    <h4 className='list_title'>Introduction</h4>
                    <p className='mb_30'>
                      {product.data.long_description
                        ? product.data.long_description.split("&&")[0]
                        : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus culpa soluta, incidunt natus quia dicta laudantium exercitationem quisquam voluptatem facilis, velit amet, eveniet vel itaque et minima asperiores optio! Repellat."}
                    </p>

                    <h4 className='list_title'>Unordered list</h4>
                    <p className='mb_30'>
                      {product.data.long_description
                        ? product.data.long_description.split("&&")[1]
                        : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus culpa soluta, incidunt natus quia dicta laudantium exercitationem quisquam voluptatem facilis, velit amet, eveniet vel itaque et minima asperiores optio! Repellat."}
                    </p>

                    <div className='fs_color_list d-flex'>
                      <strong>Color:</strong>
                      <ul className='ul_li clearfix ml-3'>
                        {product.data.color.map((c) => (
                          <li>
                            <input
                              disabled
                              type='radio'
                              name='fs_color_froup'
                              style={{ backgroundColor: `${colors[c]}` }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className='fs_color_list d-flex'>
                      <strong>Size:</strong>
                      <ul className='ul_li clearfix'>
                        {product.data.size.map((size) => (
                          <li className='ml-0'>
                            <label>
                              <input
                                disabled
                                type='radio'
                                name='fs_size_group'
                              />
                              {size}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id='reviews_tab'
              className='row d-flex justify-content-start mt-100 mb-100 tab-pane fade'
            >
              <div className='row mb_50'>
                <div className='col-lg-12'>
                  <div className='comment-widgets'>
                    <div className='d-flex flex-row comment-row m-t-0'>
                      <div className='p-2'>
                        <img
                          src='https://i.imgur.com/Ur43esv.jpg'
                          alt='user'
                          width='50'
                          className='rounded-circle'
                        />
                      </div>
                      <div className='comment-text w-100'>
                        <h6 className='font-medium'>James Thomas</h6>{" "}
                        <span className='m-b-15 d-block'>
                          This is awesome website. I would love to comeback
                          again. This is awesome website. I would love to
                          comeback again.{" "}
                        </span>
                        <div className='comment-footer'>
                          {" "}
                          <span className='text-muted float-right'>
                            April 14, 2019
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className='comment-widgets'>
                    <div className='d-flex flex-row comment-row m-t-0'>
                      <div className='p-2'>
                        <img
                          src='https://i.imgur.com/Ur43esv.jpg'
                          alt='user'
                          width='50'
                          className='rounded-circle'
                        />
                      </div>
                      <div className='comment-text w-100'>
                        <h6 className='font-medium'>James Thomas</h6>{" "}
                        <span className='m-b-15 d-block'>
                          This is awesome website. I would love to comeback
                          again.{" "}
                        </span>
                        <div className='comment-footer'>
                          {" "}
                          <span className='text-muted float-right'>
                            April 14, 2019
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className='comment-widgets'>
                    <div className='d-flex flex-row comment-row m-t-0'>
                      <div className='p-2'>
                        <img
                          src='https://i.imgur.com/Ur43esv.jpg'
                          alt='user'
                          width='50'
                          className='rounded-circle'
                        />
                      </div>
                      <div className='comment-text w-100'>
                        <h6 className='font-medium'>James Thomas</h6>{" "}
                        <span className='m-b-15 d-block'>
                          This is awesome website. I would love to comeback
                          again.{" "}
                        </span>
                        <div className='comment-footer'>
                          {" "}
                          <span className='text-muted float-right'>
                            April 14, 2019
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id='add_reviews_tab' className='tab-pane fade'>
              {userInfo ? (
                <form action='#'>
                  <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                      <div className='form_item d-flex'>
                        <span className='my-auto'>Give your star: </span>
                        <div className='ml-2'>
                          <StarRating
                            size={5}
                            value={rating}
                            onChange={(value) => setRating(value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='form_item'>
                    <textarea
                      name='message'
                      placeholder='Your Message'
                    ></textarea>
                  </div>
                  <button
                    type='submit'
                    className='custom_btn bg_default_red text-uppercase'
                  >
                    Submit Review
                  </button>
                </form>
              ) : (
                <span>
                  Please login to add your review.{" "}
                  <a href='/signin'>Login now?</a>
                </span>
              )}
            </div>
          </div>
        </div>
        <RelateProduct productTopRated={productTopRated.data} />
      </div>
    </section>
  );
};

const ProductDetail = () => {
  let location = useLocation();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetails.product);
  const productTopRated = useSelector(
    (state) => state.productTopRated.products
  );

  useEffect(() => {
    dispatch(listProductDetails(location.state?.from));
    dispatch(
      listTopProducts({
        id: location.state.from,
        cateId: location.state.category,
      })
    );
  }, [dispatch, location.state]);

  return (
    <main className='product-details'>
      <div className='container breadcrumb_nav'>
        <div className='ce_breadcrumb_nav_wrap'>
          <div className='row align-items-center justify-content-lg-between'>
            <div className='col-lg-9 col-md-8 col-sm-12 col-xs-12'>
              <ul className='ce_breadcrumb_nav ul_li clearfix'>
                <li>
                  <a href='/'>
                    <i className='fas fa-home'></i>
                  </a>
                </li>
                <li>Shop</li>
                <li>Classic Ecommerce</li>
                <li>Shop Details</li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12'>
              <a className='goback_btn float-lg-right' href='/'>
                <i className='fal fa-long-arrow-left mr-2'></i> Return to
                previous page
              </a>
            </div>
          </div>
        </div>
      </div>
      {product?.data?.assets ? (
        <Product product={product} productTopRated={productTopRated} />
      ) : (
        <ProductDetailSkeleton />
      )}
    </main>
  );
};

export default ProductDetail;
