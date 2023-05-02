import React from "react";

const ProductRelated = ({ productTopRated }) => {
  return (
    <div>
      {" "}
      <hr class='mt-0 mb_100' />
      <div class='popular_products arrow_ycenter mt__30 row d-flex'>
        {productTopRated.data?.length > 0 &&
          productTopRated.data.map((product) => (
            <div class='slideshow4_slider ' data-slick='{"dots": false}'>
              <div class='col item'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li class='bg_leafgreen'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab1_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src={product?.assets[0]?.filename}
                          alt='image_not_found'
                          width='120px'
                        />
                      </div>
                    </div>
                    <ul class='product_action_btns ul_li_center clearfix'>
                      <li>
                        <a
                          class='tooltips'
                          data-placement='top'
                          title='Add To Wishlist'
                          href='#!'
                        >
                          <i class='fal fa-heart'></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class='tooltips'
                          data-placement='top'
                          title='Add To Cart'
                          href='#!'
                        >
                          <i class='fal fa-shopping-basket'></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class='tooltips'
                          data-placement='top'
                          title='Quick View'
                          href='#!'
                          data-toggle='modal'
                          data-target='#quickview_modal'
                        >
                          <i class='fal fa-search'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class='item_content'>
                    <h3 class='item_title'>
                      <a href='#!'>{product.title}</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab1_1'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>${product.price}</strong>{" "}
                      <del>${product.price * 1.1}</del>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div class='carousel_nav'>
          <button type='button' class='ss4_left_arrow'>
            <i class='fal fa-angle-left'></i>
          </button>
          <button type='button' class='ss4_right_arrow'>
            <i class='fal fa-angle-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductRelated;
