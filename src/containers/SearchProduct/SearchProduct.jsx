import { useState } from "react";
import { useSelector } from "react-redux";

import Product from "src/components/Product/Product";
import ProductSkeleton from "src/components/Product/ProductSkeleton/ProductSkeleton";
import QuickView from "src/components/QuickView/QuickView";
import FilterSideBar from "src/components/FilterSideBar/FilterSideBar";

import "./styles.css";

const SearchProduct = () => {
  const [limit, setLimit] = useState(48);
  const [sort, setSort] = useState(undefined);

  const handleChangeSort = (value) => {
    setSort(value);
  };

  const products = useSelector((state) => state.productList);
  return (
    <div class='search-mt-120'>
      <div id='thetop'></div>
      <main>
        <section class='product_section sec_ptb_100 clearfix'>
          <div class='container'>
            <div class='row mb_30 align-items-center justify-content-lg-between'>
              <div class='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                <div class='ecommerce_section_title'>
                  <h2 class='title_text mb-0'>Search Products</h2>
                </div>
              </div>

              <div class='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
                <div class='carparts_filetr_bar'>
                  <div class='row align-items-center justify-content-lg-between'>
                    <div class='col-lg-5 col-md-4 col-sm-12 col-xs-12'>
                      <h4 class='result_text text-lg-center'>
                        Showing {products?.count ? 1 : 0} to{" "}
                        {products?.count ? products?.count : 0} of{" "}
                        {products?.total ? products?.total : 0} total
                      </h4>
                    </div>
                    <div class='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                      <form action='#'>
                        <div class='option_select d-flex align-items-center mb-0'>
                          <span class='option_title text-uppercase'>
                            Sort by:
                          </span>
                          <select
                            onChange={(e) => handleChangeSort(e.target.value)}
                          >
                            <option value='title'>Name of product</option>
                            <option value='numReviews'>Number of review</option>
                            <option value='rating'>Rating</option>
                            <option value='price' selected>
                              {" "}
                              Price
                            </option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div class='col-lg-3 col-md-4 col-sm-12 col-xs-12'>
                      <span
                        class='filter_sidebar_btn float-lg-right float-md-right'
                        style={{ backgroundColor: "#f9f9f9" }}
                      >
                        <i class='far fa-bars'></i> FILTER
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class='row mb_50'>
              {products?.loading ? (
                [...Array(8)].map(() => <ProductSkeleton />)
              ) : products?.products.length === 0 ? (
                <img
                  src='images/not-found.png'
                  className='mx-auto'
                  alt='image_not_found'
                />
              ) : (
                products?.products.map((p, index) => (
                  <Product product={p} index={index} />
                ))
              )}
            </div>

            <div class='load_more text-center clearfix'>
              <a
                class='custom_btn bg_gray text-uppercase'
                href='#!'
                onClick={() => setLimit(60)}
              >
                Load More
              </a>
            </div>
          </div>
        </section>
        <FilterSideBar limit={limit} sort={sort} />
      </main>
      <QuickView />
    </div>
  );
};

export default SearchProduct;
