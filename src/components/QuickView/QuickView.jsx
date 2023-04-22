import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "src/store/cart/cart.action";

const QuickView = () => {
  const [quantity, setQuantity] = useState(1);
  const { product = {} } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const handleAction = () => {
    const props = {
      product: product._id,
      name: product.title,
      image: product.assets[0]?.filename,
      price: product.price,
      quantity,
      size: product.size[0],
      color: product.color[0],
    };
    dispatch(addToCart(props));
  };
  return (
    <div
      className='quickview_modal modal fade'
      id='quickview_modal'
      tabindex='-1'
      role='dialog'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content clearfix'>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'
          >
            <span aria-hidden='true'>&times;</span>
          </button>
          <div className='item_image'>
            <img
              src={
                product?.assets?.length > 0
                  ? product?.assets[1]?.filename
                  : "/assets/images/shop/fashion_minimal/img_07.jpg"
              }
              alt='image_not_found'
            />
          </div>
          <div className='item_content'>
            <h2 className='item_title mb_15'>{product.title}</h2>
            <div className='rating_star mb_30 clearfix'>
              <ul className='float-left ul_li mr-2'>
                <li className='active'>
                  <i className='las la-star'></i>
                </li>
                <li className='active'>
                  <i className='las la-star'></i>
                </li>
                <li className='active'>
                  <i className='las la-star'></i>
                </li>
                <li className='active'>
                  <i className='las la-star'></i>
                </li>
                <li>
                  <i className='las la-star'></i>
                </li>
              </ul>
              <span className='review_text'>
                ({product.numReviews} Reviews)
              </span>
            </div>
            <span className='item_price mb_15'>${product.price}</span>
            <p className='mb_30'>{product.description}</p>
            <div className='quantity_form mb_30 clearfix'>
              <strong className='list_title'>Quantity:</strong>
              <div className='quantity_input'>
                <form action='#' className='mt-3'>
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
            </div>
            <ul className='btns_group ul_li mb_30 clearfix'>
              <li onClick={() => handleAction()}>
                <a href='#!' className='custom_btn bg_carparts_red'>
                  Add to Cart
                </a>
              </li>
              <li>
                <a
                  href='#!'
                  data-toggle='tooltip'
                  data-placement='top'
                  title=''
                  data-original-title='Compare Product'
                >
                  <i className='fal fa-sync mt-3'></i>
                </a>
              </li>
              <li>
                <a
                  href='#!'
                  data-toggle='tooltip'
                  data-placement='top'
                  title=''
                  data-original-title='Add To Wishlist'
                >
                  <i className='fal fa-heart mt-3'></i>
                </a>
              </li>
            </ul>
            <ul className='info_list ul_li_block clearfix'>
              <li>
                <strong className='list_title'>Category:</strong>{" "}
                <a href='#!'>Medical Equipment</a>
              </li>
              <li className='social_icon'>
                <strong className='list_title'>Share:</strong>
                <ul className='ul_li clearfix'>
                  <li>
                    <a href='#!'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <i className='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <i className='fab fa-pinterest-p'></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
