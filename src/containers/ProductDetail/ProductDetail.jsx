import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import ProductDetailSkeleton from "src/containers/ProductDetail/ProductDetailSkeleton";
import ProductRelated from "src/components/ProductRelated/ProductRelated";

import {
  listProductDetails,
  listTopProducts,
} from "src/store/product/product.action";
import { addToCart } from "src/store/cart/cart.action";

import { roundNumber } from "src/utils/roundNumber";
import { capitalizeFirstLetter } from "src/utils/convertFirstLetterToUpperCase";

const itemDisplay = {
  active: "tab-pane active",
  unactive: "tab-pane fade",
};

const Product = ({ product = {} }) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);

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
    let prod = {
      product: product.data._id,
      name: product.data.title,
      image: product.data.assets[0]?.filename,
      price: product.data.price,
      quantity,
      size,
      color,
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
              <hr />
              <div className='row mb_30 align-items-center justify-content-lg-between'>
                <div className='col-lg-5 col-md-12 col-sm-12 col-xs-12'>
                  <div className='item_brand d-flex align-items-center'>
                    <span className='brand_title'>Brands:</span>
                    <span
                      className='brand_image d-flex align-items-center justify-content-center'
                      style={{ backgroundColor: "#f7f7f7" }}
                    >
                      <img
                        src='/assets/images/product_brands/img_01.png'
                        alt='image_not_found'
                      />
                    </span>
                  </div>
                </div>

                <div className='col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                  <div className='rating_review_wrap d-flex align-items-center clearfix'>
                    <ul className='rating_star ul_li'>
                      {[...Array(product.data.rating)].map(() => (
                        <li>
                          <i className='fas fa-star'></i>
                        </li>
                      ))}
                    </ul>
                    <span>{product.data.numReviews} Review(s)</span>
                    <button type='button' className='add_review_btn'>
                      Add Your Review
                    </button>
                  </div>
                </div>
              </div>
              <p className='mb-0'>{product.data.description}</p>
              <hr />
              <div class='fs_widget fs_color_list pb-0 mb-4'>
                <h3 class='list_title mb_15 text-uppercase'>Color</h3>
                <form action='#'>
                  <ul class='ul_li clearfix'>
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
                    <ul class='ul_li clearfix'>
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

              <ul className='btns_group_2 ul_li clearfix'>
                <li>
                  <a href='#!'>
                    <span>
                      <i className='far fa-heart'></i>
                    </span>{" "}
                    Add to Wishlist
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <span>
                      <i className='fal fa-repeat'></i>
                    </span>{" "}
                    Compare
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
          </ul>

          <div className='tab-content'>
            <div id='description_tab' className='tab-pane active'>
              <div className='row mb_50'>
                <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12'>
                  <div className='image_wrap'>
                    <img
                      src='/assets/images/details/shop/img_06.jpg'
                      alt='image_not_found'
                    />
                  </div>
                </div>

                <div className='col-lg-9 col-md-8 col-sm-12 col-xs-12'>
                  <div className='content_wrap'>
                    <p className='mb_30'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>

                    <h4 className='list_title'>Pretium turpis et arcu</h4>
                    <p className='mb_30'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>

                    <h4 className='list_title'>Unordered list</h4>
                    <p className='mb_30'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <ul className='product_info ul_li_block clearfix'>
                      <li>
                        <strong>Color:</strong> Brown, Grey, Nude, Red
                      </li>
                      <li>
                        <strong>Size:</strong> L, M, S, XL, XS
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id='reviews_tab' className='tab-pane fade'>
              <form action='#'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                    <div className='form_item'>
                      <input type='text' name='name' placeholder='Your Name' />
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                    <div className='form_item'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                      />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className='form_item'>
                      <input type='text' name='subject' placeholder='Subject' />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductDetail = () => {
  let location = useLocation();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetails.product);
  // const productTopRated = useSelector(
  //   (state) => state.productTopRated.products
  // );

  useEffect(() => {
    dispatch(listProductDetails(location.state?.from));
    // dispatch(
    //   listTopProducts({
    //     id: location.state.from,
    //     cateId: location.state.category,
    //   })
    // );
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
        <Product product={product} />
      ) : (
        <ProductDetailSkeleton />
      )}
      {/* <ProductRelated productTopRated={productTopRated} /> */}
    </main>
  );
};

export default ProductDetail;
