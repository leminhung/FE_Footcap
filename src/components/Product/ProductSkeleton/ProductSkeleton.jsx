import React from "react";

const ProductSkeleton = () => {
  return (
    <>
      <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12 product-skeleton'>
        <div className='ecommerce_product_grid'>
          <div class='ecommerce_product_grid product-source'>
            <div class='lines'>
              <div class='thumb pulse'></div>
            </div>
          </div>
          <div class='product-detail'>
            <div class='line-product-title pulse'></div>
            <div class='line-breadcrumb pulse'></div>
            <div class='line-product-cost pulse'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSkeleton;
