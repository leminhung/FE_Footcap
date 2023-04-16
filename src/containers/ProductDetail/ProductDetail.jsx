import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import OfferSection from "src/components/OfferSection/OfferSection";
import { listProductDetails } from "src/store/product/product.action";
import ProductDetailSkeleton from "src/containers/ProductDetail/ProductDetailSkeleton";
import { capitalizeFirstLetter } from "src/utils/convertFirstLetterToUpperCase";

import { addToCart } from "src/store/cart/cart.action";

import { roundNumber } from "src/utils/roundNumber";

const itemDisplay = {
  active: "tab-pane active",
  unactive: "tab-pane fade",
};

const Product = ({ product = {} }) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);

  console.log("product--", product);

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

              <hr />

              <ul className='product_info ul_li_block clearfix'>
                <li>
                  <strong>SKU:</strong> U2012
                </li>
                <li>
                  <strong>Categories:</strong> <a href='#!'>Dress</a>{" "}
                  <a href='#!'>Handbag</a> <a href='#!'>T-Shirts</a>
                </li>
                <li>
                  <strong>Tags:</strong> <a href='#!'>Hot</a>{" "}
                  <a href='#!'>Women</a>
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

        <hr className='mt-0 mb_100' />

        <div className='popular_products arrow_ycenter mt__30'>
          <div className='slideshow4_slider row' data-slick='{"dots": false}'>
            <div className='col item'>
              <div className='ecommerce_product_grid'>
                <ul className='product_label ul_li clearfix'>
                  <li className='bg_leafgreen'>New</li>
                </ul>
                <div className='tab-content'>
                  <div id='ptab1_1' className='tab-pane fade active'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_01.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab1_2' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_02.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab1_3' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_03.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <ul className='product_action_btns ul_li_center clearfix'>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Wishlist'
                        href='#!'
                      >
                        <i className='fal fa-heart'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Cart'
                        href='#!'
                      >
                        <i className='fal fa-shopping-basket'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Quick View'
                        href='#!'
                        data-toggle='modal'
                        data-target='#quickview_modal'
                      >
                        <i className='fal fa-search'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='item_content'>
                  <h3 className='item_title'>
                    <a href='#!'>Rag & Bone Beck Coat</a>
                  </h3>
                  <ul className='product_color ul_li nav clearfix'>
                    <li className='active'>
                      <a
                        className='pbg_brown'
                        data-toggle='tab'
                        href='#ptab1_1'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_olivegreen'
                        data-toggle='tab'
                        href='#ptab1_2'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_gray'
                        data-toggle='tab'
                        href='#ptab1_3'
                      ></a>
                    </li>
                  </ul>
                  <span className='item_price'>
                    <strong>$25.00</strong> <del>$35.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div className='col item'>
              <div className='ecommerce_product_grid'>
                <ul className='product_label ul_li clearfix'>
                  <li className='bg_leafgreen'>New</li>
                </ul>
                <div className='tab-content'>
                  <div id='ptab2_1' className='tab-pane fade active'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_02.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab2_2' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_03.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab2_3' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_04.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <ul className='product_action_btns ul_li_center clearfix'>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Wishlist'
                        href='#!'
                      >
                        <i className='fal fa-heart'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Cart'
                        href='#!'
                      >
                        <i className='fal fa-shopping-basket'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Quick View'
                        href='#!'
                        data-toggle='modal'
                        data-target='#quickview_modal'
                      >
                        <i className='fal fa-search'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='item_content'>
                  <h3 className='item_title'>
                    <a href='#!'>Rag & Bone Beck Coat</a>
                  </h3>
                  <ul className='product_color ul_li nav clearfix'>
                    <li className='active'>
                      <a
                        className='pbg_brown'
                        data-toggle='tab'
                        href='#ptab1_1'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_olivegreen'
                        data-toggle='tab'
                        href='#ptab2_2'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_gray'
                        data-toggle='tab'
                        href='#ptab2_3'
                      ></a>
                    </li>
                  </ul>
                  <span className='item_price'>
                    <strong>$25.00</strong> <del>$35.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div className='col item'>
              <div className='ecommerce_product_grid'>
                <ul className='product_label ul_li clearfix'>
                  <li className='bg_leafgreen'>New</li>
                </ul>
                <div className='tab-content'>
                  <div id='ptab3_1' className='tab-pane fade active'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_03.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab3_2' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_04.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab3_3' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_05.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <ul className='product_action_btns ul_li_center clearfix'>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Wishlist'
                        href='#!'
                      >
                        <i className='fal fa-heart'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Cart'
                        href='#!'
                      >
                        <i className='fal fa-shopping-basket'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Quick View'
                        href='#!'
                        data-toggle='modal'
                        data-target='#quickview_modal'
                      >
                        <i className='fal fa-search'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='item_content'>
                  <h3 className='item_title'>
                    <a href='#!'>Rag & Bone Beck Coat</a>
                  </h3>
                  <ul className='product_color ul_li nav clearfix'>
                    <li className='active'>
                      <a
                        className='pbg_brown'
                        data-toggle='tab'
                        href='#ptab3_1'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_olivegreen'
                        data-toggle='tab'
                        href='#ptab3_2'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_gray'
                        data-toggle='tab'
                        href='#ptab3_3'
                      ></a>
                    </li>
                  </ul>
                  <span className='item_price'>
                    <strong>$25.00</strong> <del>$35.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div className='col item'>
              <div className='ecommerce_product_grid'>
                <ul className='product_label ul_li clearfix'>
                  <li className='bg_leafgreen'>New</li>
                </ul>
                <div className='tab-content'>
                  <div id='ptab4_1' className='tab-pane fade active'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_04.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab4_2' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_05.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab4_3' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_06.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <ul className='product_action_btns ul_li_center clearfix'>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Wishlist'
                        href='#!'
                      >
                        <i className='fal fa-heart'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Cart'
                        href='#!'
                      >
                        <i className='fal fa-shopping-basket'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Quick View'
                        href='#!'
                        data-toggle='modal'
                        data-target='#quickview_modal'
                      >
                        <i className='fal fa-search'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='item_content'>
                  <h3 className='item_title'>
                    <a href='#!'>Rag & Bone Beck Coat</a>
                  </h3>
                  <ul className='product_color ul_li nav clearfix'>
                    <li className='active'>
                      <a
                        className='pbg_brown'
                        data-toggle='tab'
                        href='#ptab4_1'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_olivegreen'
                        data-toggle='tab'
                        href='#ptab4_2'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_gray'
                        data-toggle='tab'
                        href='#ptab4_3'
                      ></a>
                    </li>
                  </ul>
                  <span className='item_price'>
                    <strong>$25.00</strong> <del>$35.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div className='col item'>
              <div className='ecommerce_product_grid'>
                <ul className='product_label ul_li clearfix'>
                  <li className='bg_leafgreen'>New</li>
                </ul>
                <div className='tab-content'>
                  <div id='ptab5_1' className='tab-pane fade active'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_05.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab5_2' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_06.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab5_3' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_07.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <ul className='product_action_btns ul_li_center clearfix'>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Wishlist'
                        href='#!'
                      >
                        <i className='fal fa-heart'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Cart'
                        href='#!'
                      >
                        <i className='fal fa-shopping-basket'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Quick View'
                        href='#!'
                        data-toggle='modal'
                        data-target='#quickview_modal'
                      >
                        <i className='fal fa-search'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='item_content'>
                  <h3 className='item_title'>
                    <a href='#!'>Rag & Bone Beck Coat</a>
                  </h3>
                  <ul className='product_color ul_li nav clearfix'>
                    <li className='active'>
                      <a
                        className='pbg_brown'
                        data-toggle='tab'
                        href='#ptab5_1'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_olivegreen'
                        data-toggle='tab'
                        href='#ptab5_2'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_gray'
                        data-toggle='tab'
                        href='#ptab5_3'
                      ></a>
                    </li>
                  </ul>
                  <span className='item_price'>
                    <strong>$25.00</strong> <del>$35.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div className='col item'>
              <div className='ecommerce_product_grid'>
                <ul className='product_label ul_li clearfix'>
                  <li className='bg_leafgreen'>New</li>
                </ul>
                <div className='tab-content'>
                  <div id='ptab6_1' className='tab-pane fade active'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_06.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab6_2' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_07.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab6_3' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_08.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <ul className='product_action_btns ul_li_center clearfix'>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Wishlist'
                        href='#!'
                      >
                        <i className='fal fa-heart'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Cart'
                        href='#!'
                      >
                        <i className='fal fa-shopping-basket'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Quick View'
                        href='#!'
                        data-toggle='modal'
                        data-target='#quickview_modal'
                      >
                        <i className='fal fa-search'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='item_content'>
                  <h3 className='item_title'>
                    <a href='#!'>Rag & Bone Beck Coat</a>
                  </h3>
                  <ul className='product_color ul_li nav clearfix'>
                    <li className='active'>
                      <a
                        className='pbg_brown'
                        data-toggle='tab'
                        href='#ptab6_1'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_olivegreen'
                        data-toggle='tab'
                        href='#ptab6_2'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_gray'
                        data-toggle='tab'
                        href='#ptab6_3'
                      ></a>
                    </li>
                  </ul>
                  <span className='item_price'>
                    <strong>$25.00</strong> <del>$35.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div className='col item'>
              <div className='ecommerce_product_grid'>
                <ul className='product_label ul_li clearfix'>
                  <li className='bg_leafgreen'>New</li>
                </ul>
                <div className='tab-content'>
                  <div id='ptab7_1' className='tab-pane fade active'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_07.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab7_2' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_08.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab7_3' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_09.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <ul className='product_action_btns ul_li_center clearfix'>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Wishlist'
                        href='#!'
                      >
                        <i className='fal fa-heart'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Cart'
                        href='#!'
                      >
                        <i className='fal fa-shopping-basket'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Quick View'
                        href='#!'
                        data-toggle='modal'
                        data-target='#quickview_modal'
                      >
                        <i className='fal fa-search'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='item_content'>
                  <h3 className='item_title'>
                    <a href='#!'>Rag & Bone Beck Coat</a>
                  </h3>
                  <ul className='product_color ul_li nav clearfix'>
                    <li className='active'>
                      <a
                        className='pbg_brown'
                        data-toggle='tab'
                        href='#ptab7_1'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_olivegreen'
                        data-toggle='tab'
                        href='#ptab7_2'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_gray'
                        data-toggle='tab'
                        href='#ptab7_3'
                      ></a>
                    </li>
                  </ul>
                  <span className='item_price'>
                    <strong>$25.00</strong> <del>$35.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div className='col item'>
              <div className='ecommerce_product_grid'>
                <ul className='product_label ul_li clearfix'>
                  <li className='bg_leafgreen'>New</li>
                </ul>
                <div className='tab-content'>
                  <div id='ptab8_1' className='tab-pane fade active'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_08.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab8_2' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_09.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <div id='ptab8_3' className='tab-pane fade'>
                    <div className='item_image'>
                      <img
                        src='/assets/images/shop/classic_ecommerce/img_10.png'
                        alt='image_not_found'
                      />
                    </div>
                  </div>
                  <ul className='product_action_btns ul_li_center clearfix'>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Wishlist'
                        href='#!'
                      >
                        <i className='fal fa-heart'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Add To Cart'
                        href='#!'
                      >
                        <i className='fal fa-shopping-basket'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className='tooltips'
                        data-placement='top'
                        title='Quick View'
                        href='#!'
                        data-toggle='modal'
                        data-target='#quickview_modal'
                      >
                        <i className='fal fa-search'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='item_content'>
                  <h3 className='item_title'>
                    <a href='#!'>Rag & Bone Beck Coat</a>
                  </h3>
                  <ul className='product_color ul_li nav clearfix'>
                    <li className='active'>
                      <a
                        className='pbg_brown'
                        data-toggle='tab'
                        href='#ptab8_1'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_olivegreen'
                        data-toggle='tab'
                        href='#ptab8_2'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='pbg_gray'
                        data-toggle='tab'
                        href='#ptab8_3'
                      ></a>
                    </li>
                  </ul>
                  <span className='item_price'>
                    <strong>$25.00</strong> <del>$35.00</del>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel_nav'>
            <button type='button' className='ss4_left_arrow'>
              <i className='fal fa-angle-left'></i>
            </button>
            <button type='button' className='ss4_right_arrow'>
              <i className='fal fa-angle-right'></i>
            </button>
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

  useEffect(() => {
    dispatch(listProductDetails(location.state?.from));
  }, [dispatch, location.state?.from]);

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
      <OfferSection />
    </main>
  );
};

export default ProductDetail;
