import React from "react";

const ProductDetailSkeleton = () => {
  return (
    <section class='details_section shop_details sec_ptb_140 clearfix'>
      <div class='container'>
        <div class='product-skeleton'>
          <div class='product-source'>
            <div class='lines'>
              <div class='thumb pulse'></div>
            </div>
          </div>
          <div class='product-detail'>
            <div class='line-breadcrumb pulse'></div>
            <div class='line-product-title pulse'></div>
            <div class='line-product-cost pulse'></div>
          </div>
        </div>
        <div class='details_description_tab mb_100'>
          <ul class='nav ul_li text-uppercase' role='tablist'>
            <li>
              <a class='active' data-toggle='tab' href='#description_tab'>
                Product Description
              </a>
            </li>
            <li>
              <a data-toggle='tab' href='#reviews_tab'>
                Reviews
              </a>
            </li>
          </ul>

          <div class='tab-content'>
            <div id='description_tab' class='tab-pane active'>
              <div class='row mb_50'>
                <div class='product-skeleton'>
                  <div class='product-source'>
                    <div class='lines'>
                      <div class='thumb pulse'></div>
                    </div>
                  </div>
                  <div class='product-detail'>
                    <div class='line-breadcrumb pulse'></div>
                    <div class='line-product-title pulse'></div>
                    <div class='line-product-cost pulse'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSkeleton;
