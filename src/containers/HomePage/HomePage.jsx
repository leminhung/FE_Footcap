import { useGetListProductsHome } from "src/features/Product/useGetListProductsHome";

import Product from "src/components/Product/Product";
import ProductSkeleton from "src/components/Product/ProductSkeleton/ProductSkeleton";
import QuickView from "src/components/QuickView/QuickView";
import FilterSideBar from "src/components/FilterSideBar/FilterSideBar";

import "./styles.css";

const sort = true;

const HomePage = () => {
  const params = {
    // category: category,
    sort: sort ? sort : "-sold", // high order
    // limit: width < 600 ? 4 : limit ? limit : 10,
    limit: 12,
  };
  const { status, data, error, isFetching } = useGetListProductsHome(params);
  console.log(data);

  return (
    <body class='home_classic_ecommerce'>
      <div id='thetop'></div>
      <main>
        <section
          class='breadcrumb_section classic_ecommerce_breadcrumb d-flex align-items-end clearfix bg-fit'
          style={{
            backgroundImage: `url(/assets/images/slider/classic_ecommerce/test.png)`,
          }}
        >
          <div class='container'>
            <p class='mb_15'>Fresh looks for summer</p>
            <h1 class='ce_page_title mb_30'>New Arrivals</h1>
            <a class='custom_btn bg_white text-uppercase' href='#!'>
              Collection
            </a>
          </div>
        </section>
        <div class='container'>
          <div class='ce_breadcrumb_nav_wrap'>
            <div class='row align-items-center justify-content-lg-between'>
              <div class='col-lg-9 col-md-8 col-sm-12 col-xs-12'>
                <ul class='ce_breadcrumb_nav ul_li clearfix'>
                  <li>
                    <a href='index.html'>
                      <i class='fas fa-home'></i>
                    </a>
                  </li>
                  <li>Shop</li>
                  <li>Classic Ecommerce</li>
                  <li>Shop Page</li>
                </ul>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-12 col-xs-12'>
                <a class='goback_btn float-lg-right float-md-right' href='#!'>
                  <i class='fal fa-long-arrow-left mr-2'></i> Return to previous
                  page
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- breadcrumb_section - end -->


			<!-- category_section - start
			================================================== --> */}
        <section class='category_section sec_ptb_100 pb-0 clearfix'>
          <div class='container'>
            <div class='ecommerce_category_masonry grid'>
              <div class='grid-sizer'></div>

              <div class='grid-item'>
                <div class='ecommerce_category_fullimage'>
                  <img
                    src='/assets/images/category/classic_ecommerce/collection-1.jpg'
                    alt='image_not_found'
                  />
                  {/* <h3 class='item_title'>
                    <a href='#!'>Pouch Pocket Jacket</a>
                  </h3> */}
                </div>
              </div>

              <div class='grid-item'>
                <div class='ecommerce_category_fullimage'>
                  <img
                    src='/assets/images/category/classic_ecommerce/collection-2.jpg'
                    alt='image_not_found'
                  />
                  {/* <h3 class='item_title'>
                    <a href='#!'>Lightweight Quilted</a>
                  </h3> */}
                </div>
              </div>

              <div class='grid-item'>
                <div class='ecommerce_category_fullimage'>
                  <img
                    src='/assets/images/category/classic_ecommerce/collection-3.jpg'
                    alt='image_not_found'
                  />
                  {/* <h3 class='item_title'>
                    <a href='#!'>Faux Leather Biker</a>
                  </h3> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- category_section - end
			================================================== -->


			<!-- product_section - start
			================================================== --> */}
        <section class='product_section sec_ptb_100 clearfix'>
          <div class='container'>
            <div class='row mb_30 align-items-center justify-content-lg-between'>
              <div class='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                <div class='ecommerce_section_title'>
                  <h2 class='title_text mb-0'>Popular Products</h2>
                </div>
              </div>

              <div class='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
                <div class='carparts_filetr_bar'>
                  <div class='row align-items-center justify-content-lg-between'>
                    <div class='col-lg-5 col-md-4 col-sm-12 col-xs-12'>
                      <h4 class='result_text text-lg-center'>
                        Showing 1 to 16 of 17 total
                      </h4>
                    </div>
                    <div class='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                      <form action='#'>
                        <div class='option_select d-flex align-items-center mb-0'>
                          <span class='option_title text-uppercase'>
                            Sort by:
                          </span>
                          <select>
                            <option data-display='Select Your Option'>
                              Nothing
                            </option>
                            <option value='1' selected>
                              {" "}
                              Popularity
                            </option>
                            <option value='2'>Another option</option>
                            <option value='3' disabled>
                              A disabled option
                            </option>
                            <option value='4'>Potato</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div class='col-lg-3 col-md-4 col-sm-12 col-xs-12'>
                      <span
                        class='filter_sidebar_btn float-lg-right float-md-right'
                        data-bg-color='#f9f9f9'
                      >
                        <i class='far fa-bars'></i> FILTER
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class='row mb_50'>
              {status === "loading"
                ? [...Array(8)].map(() => <ProductSkeleton />)
                : data.data.map((p, index) => (
                    <Product product={p} index={index} />
                  ))}
            </div>

            <div class='load_more text-center clearfix'>
              <a class='custom_btn bg_gray text-uppercase' href='#!'>
                Load More
              </a>
            </div>
          </div>
        </section>

        <FilterSideBar />
        {/* <!-- product_section - end
			================================================== -->


			<!-- offer_section - start */}
        <section class='offer_section clearfix'>
          <div class='container-fluid p-0'>
            <div class='row no-gutters justify-content-lg-between'>
              <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <div class='ce_offer_fullimage offer_fullimage text-white text-center'>
                  <img
                    src='/assets/images/offer/classic_ecommerce/imgg_01.jpg'
                    alt='image_not_found'
                  />
                  <div class='item_content'>
                    <h3 class='item_title text-white mb_15'>Read The Blog</h3>
                    <a class='text_btn text-uppercase' href='#!'>
                      <span>View all posts</span>
                    </a>
                  </div>
                </div>
              </div>

              <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <div class='ce_offer_fullimage offer_fullimage text-white text-center'>
                  <img
                    src='/assets/images/offer/classic_ecommerce/imgg_02.jpg'
                    alt='image_not_found'
                  />
                  <div class='item_content'>
                    <h3 class='item_title text-white mb_15'>
                      Follow Our Store On Instagram
                    </h3>
                    <a class='text_btn text-uppercase' href='#!'>
                      <span>@JTHEMES</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* product quick view */}
      <QuickView />
    </body>
  );
};
export default HomePage;
