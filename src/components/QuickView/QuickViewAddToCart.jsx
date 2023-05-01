import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { addToCart } from "src/store/cart/cart.action";

const QuickView = () => {
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);

  const { product = {} } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const handleAction = () => {
    if (!color || !size) {
      toast.error("Please fill in color or size");
    } else {
      const props = {
        product: product._id,
        name: product.title,
        image: product.assets[0]?.filename,
        price: product.price,
        color,
        size,
        quantity: 1,
      };
      dispatch(addToCart(props));
    }
  };

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
    { color: "#1f1e29", name: "black" },
    { color: "#cc7b4a", name: "brown" },
  ];

  // sizes
  const sizesProd = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

  return (
    <div
      className='quickview_modal modal fade pb-0'
      id='quickview_modal_add_to_cart'
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
            <div className='rating_star clearfix'>
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
            <span className='item_price'>${product.price}</span>
            <p>{product.description}</p>
            <div className='quantity_form clearfix'>
              <strong className='list_title'>Status: In stock</strong>
            </div>
            <div className='d-flex mb-3 fs_color_list clearfix'>
              <strong className='list_title'>Color:</strong>
              <ul class='ul_li clearfix ml-2'>
                {colors.map((color) => {
                  if (product?.color?.includes(color.name)) {
                    return (
                      <li>
                        <input
                          type='radio'
                          name='fs_color_froup'
                          style={{ backgroundColor: color.color }}
                          onClick={() => setColor(color.name)}
                        />
                      </li>
                    );
                  } else return "";
                })}
              </ul>
            </div>
            <div className='d-flex mb-3 fs_size_list clearfix'>
              <strong className='list_title'>Size:</strong>
              <ul class='ul_li clearfix'>
                {sizesProd.map((size, index) => {
                  if (product?.size?.includes(size)) {
                    return (
                      <li>
                        <label>
                          <input
                            type='radio'
                            name='fs_size_group'
                            onClick={() => setSize(size)}
                          />
                          {size}
                        </label>
                      </li>
                    );
                  } else return "";
                })}
              </ul>
            </div>
            <ul className='btns_group ul_li clearfix'>
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
                  data-original-title='Add To Wishlist'
                >
                  <i className='fal fa-heart mt-3'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
