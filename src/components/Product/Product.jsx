import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import ImageItem from "src/components/Image/ImageItem";
import { setProduct } from "src/store/product/product.action";
import { addToCart } from "src/store/cart/cart.action";

const itemDisplay = {
  active: "tab-pane fade active",
  unactive: "tab-pane fade",
};

const btnActions = [
  {
    title: "Add To Wishlist",
    class: "fal fa-heart",
  },
  {
    title: "Add To Cart",
    class: "fal fa-shopping-basket",
  },
  {
    title: "Quick View",
    class: "fal fa-search",
  },
];

const ProductActionButtons = ({ product }) => {
  const dispatch = useDispatch();

  const handleQuickView = () => {
    dispatch(setProduct(product));
  };

  const handleAction = (title) => {
    if (title.includes("Cart")) {
      dispatch(addToCart(product));
    }
  };
  return (
    <ul className='product_action_btns ul_li_center clearfix'>
      {btnActions.map((item, index) => {
        if (index === 2) {
          return (
            <li onClick={() => handleQuickView()}>
              <a
                className='tooltips'
                data-placement='top'
                title={item.title}
                href='#!'
                data-toggle='modal'
                data-target='#quickview_modal'
              >
                <i className={item.class}></i>
              </a>
            </li>
          );
        }
        return (
          <li onClick={() => handleAction(item.title)}>
            <a
              className='tooltips'
              data-placement='top'
              title={item.title}
              href='#!'
            >
              <i className={item.class}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Product = (props) => {
  const { product, index, setRerender, rerender } = props;

  return (
    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
      <div className='ecommerce_product_grid'>
        <ul className='product_label ul_li clearfix'>
          <li
            style={{
              backgroundColor: `#93be2b`,
            }}
          >
            New
          </li>
        </ul>
        <div className='tab-content'>
          {[...Array(3)].map((item, i) => (
            <div
              id={`ptab2_${i + 1}_${index}`}
              className={i === 0 ? itemDisplay.active : itemDisplay.unactive}
            >
              <div className='item_image'>
                <ImageItem product={product} index={i} />
              </div>
            </div>
          ))}
          <ProductActionButtons product={product} />
        </div>
        <div className='item_content'>
          <h3 className='item_title'>
            <Link to={`products/${product.slug}`} state={{ from: product.id }}>
              {product.title}
            </Link>
          </h3>
          <ul className='product_color ul_li nav clearfix'>
            <li className='active'>
              <a
                className='pbg_brown'
                data-toggle='tab'
                href={`#ptab2_1_${index}`}
              ></a>
            </li>
            <li>
              <a
                className='pbg_olivegreen'
                data-toggle='tab'
                href={`#ptab2_2_${index}`}
              ></a>
            </li>
            <li>
              <a
                className='pbg_gray'
                data-toggle='tab'
                href={`#ptab2_3_${index}`}
              ></a>
            </li>
          </ul>
          <span className='item_price'>
            <strong>${product.price}</strong> <del>$35.00</del>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
