const HomePage = () => {
  return (
    <body class='home_classic_ecommerce'>
      <main>
        <section
          class='breadcrumb_section classic_ecommerce_breadcrumb d-flex align-items-end clearfix bg-fit'
          style={{
            backgroundImage: `url(../assets/images/breadcrumb/bg_03.jpg)`,
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
                    src='../assets/images/category/classic_ecommerce/img_03.jpg'
                    alt='image_not_found'
                  />
                  <h3 class='item_title'>
                    <a href='#!'>Pouch Pocket Jacket</a>
                  </h3>
                </div>
              </div>

              <div class='grid-item'>
                <div class='ecommerce_category_fullimage'>
                  <img
                    src='../assets/images/category/classic_ecommerce/img_04.jpg'
                    alt='image_not_found'
                  />
                  <h3 class='item_title'>
                    <a href='#!'>Lightweight Quilted</a>
                  </h3>
                </div>
              </div>

              <div class='grid-item'>
                <div class='ecommerce_category_fullimage'>
                  <img
                    src='../assets/images/category/classic_ecommerce/img_05.jpg'
                    alt='image_not_found'
                  />
                  <h3 class='item_title'>
                    <a href='#!'>Faux Leather Biker</a>
                  </h3>
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
              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li data-bg-color='#93be2b'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab1_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_01.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab1_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_02.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab1_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_03.png'
                          alt='image_not_found'
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
                      <a href='#!'>Rag & Bone Beck Coat</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab1_1'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_olivegreen'
                          data-toggle='tab'
                          href='#ptab1_2'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_gray'
                          data-toggle='tab'
                          href='#ptab1_3'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>$25.00</strong> <del>$35.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li data-bg-color='#93be2b'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab2_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_02.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab2_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_03.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab2_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_04.png'
                          alt='image_not_found'
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
                      <a href='#!'>Rag & Bone Beck Coat</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab1_1'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_olivegreen'
                          data-toggle='tab'
                          href='#ptab2_2'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_gray'
                          data-toggle='tab'
                          href='#ptab2_3'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>$25.00</strong> <del>$35.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li data-bg-color='#93be2b'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab3_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_03.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab3_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_04.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab3_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_05.png'
                          alt='image_not_found'
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
                      <a href='#!'>Rag & Bone Beck Coat</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab3_1'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_olivegreen'
                          data-toggle='tab'
                          href='#ptab3_2'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_gray'
                          data-toggle='tab'
                          href='#ptab3_3'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>$25.00</strong> <del>$35.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li data-bg-color='#93be2b'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab4_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_04.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab4_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_05.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab4_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_06.png'
                          alt='image_not_found'
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
                      <a href='#!'>Rag & Bone Beck Coat</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab4_1'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_olivegreen'
                          data-toggle='tab'
                          href='#ptab4_2'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_gray'
                          data-toggle='tab'
                          href='#ptab4_3'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>$25.00</strong> <del>$35.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li data-bg-color='#93be2b'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab5_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_05.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab5_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_06.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab5_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_07.png'
                          alt='image_not_found'
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
                      <a href='#!'>Rag & Bone Beck Coat</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab5_1'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_olivegreen'
                          data-toggle='tab'
                          href='#ptab5_2'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_gray'
                          data-toggle='tab'
                          href='#ptab5_3'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>$25.00</strong> <del>$35.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li data-bg-color='#93be2b'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab6_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_06.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab6_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_07.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab6_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_08.png'
                          alt='image_not_found'
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
                      <a href='#!'>Rag & Bone Beck Coat</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab6_1'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_olivegreen'
                          data-toggle='tab'
                          href='#ptab6_2'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_gray'
                          data-toggle='tab'
                          href='#ptab6_3'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>$25.00</strong> <del>$35.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li data-bg-color='#93be2b'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab7_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_07.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab7_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_08.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab7_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_09.png'
                          alt='image_not_found'
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
                      <a href='#!'>Rag & Bone Beck Coat</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab7_1'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_olivegreen'
                          data-toggle='tab'
                          href='#ptab7_2'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_gray'
                          data-toggle='tab'
                          href='#ptab7_3'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>$25.00</strong> <del>$35.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li data-bg-color='#93be2b'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab8_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_08.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab8_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_09.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab8_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_10.png'
                          alt='image_not_found'
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
                      <a href='#!'>Rag & Bone Beck Coat</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab8_1'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_olivegreen'
                          data-toggle='tab'
                          href='#ptab8_2'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_gray'
                          data-toggle='tab'
                          href='#ptab8_3'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>$25.00</strong> <del>$35.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li data-bg-color='#93be2b'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab9_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_09.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab9_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_10.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab9_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_11.png'
                          alt='image_not_found'
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
                      <a href='#!'>Rag & Bone Beck Coat</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab9_1'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_olivegreen'
                          data-toggle='tab'
                          href='#ptab9_2'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_gray'
                          data-toggle='tab'
                          href='#ptab9_3'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>$25.00</strong> <del>$35.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li data-bg-color='#93be2b'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab10_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_10.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab10_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_11.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab10_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_12.png'
                          alt='image_not_found'
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
                      <a href='#!'>Rag & Bone Beck Coat</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab10_1'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_olivegreen'
                          data-toggle='tab'
                          href='#ptab10_2'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_gray'
                          data-toggle='tab'
                          href='#ptab10_3'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>$25.00</strong> <del>$35.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li data-bg-color='#93be2b'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab11_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_11.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab11_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_12.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab11_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_01.png'
                          alt='image_not_found'
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
                      <a href='#!'>Rag & Bone Beck Coat</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab11_1'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_olivegreen'
                          data-toggle='tab'
                          href='#ptab11_2'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_gray'
                          data-toggle='tab'
                          href='#ptab11_3'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>$25.00</strong> <del>$35.00</del>
                    </span>
                  </div>
                </div>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li data-bg-color='#93be2b'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab12_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_12.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab12_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_01.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab12_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='../assets/images/shop/classic_ecommerce/img_02.png'
                          alt='image_not_found'
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
                      <a href='#!'>Rag & Bone Beck Coat</a>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      <li class='active'>
                        <a
                          class='pbg_brown'
                          data-toggle='tab'
                          href='#ptab12_1'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_olivegreen'
                          data-toggle='tab'
                          href='#ptab12_2'
                        ></a>
                      </li>
                      <li>
                        <a
                          class='pbg_gray'
                          data-toggle='tab'
                          href='#ptab12_3'
                        ></a>
                      </li>
                    </ul>
                    <span class='item_price'>
                      <strong>$25.00</strong> <del>$35.00</del>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class='load_more text-center clearfix'>
              <a class='custom_btn bg_gray text-uppercase' href='#!'>
                Load More
              </a>
            </div>
          </div>
        </section>

        <div class='sidebar-menu-wrapper'>
          <div class='filter_sidebar'>
            <button type='button' class='close_btn mb_50'>
              <i class='fal fa-times'></i>
            </button>
            <div class='fs_widget fs_category_list'>
              <h3 class='fs_widget_title text-uppercase'>Top Categories</h3>
              <ul class='ul_li_block clearfix'>
                <li>
                  <a href='#!'>
                    <span>
                      <i class='fab fa-black-tie'></i>
                    </span>
                    Andy
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <span>
                      <i class='fal fa-tshirt'></i>
                    </span>
                    Ariadne’s Thread
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <span>
                      <i class='fal fa-watch'></i>
                    </span>
                    Black Swan
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <span>
                      <i class='fal fa-compact-disc'></i>
                    </span>
                    Disco
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <span>
                      <i class='fas fa-gem'></i>
                    </span>
                    Discovering Greece
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <span>
                      <i class='fal fa-bicycle'></i>
                    </span>
                    Folding the News
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <span>
                      <i class='far fa-laptop'></i>
                    </span>
                    George C.
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <span>
                      <i class='fas fa-mobile-alt'></i>
                    </span>
                    Helen of Troy
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <span>
                      <i class='fab fa-black-tie'></i>
                    </span>
                    Hi-Tech
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <span>
                      <i class='fab fa-black-tie'></i>
                    </span>
                    Yokoso
                  </a>
                </li>
              </ul>
            </div>

            <div class='fs_widget fs_price_list'>
              <h3 class='fs_widget_title text-uppercase'>Price filter</h3>
              <form action='#'>
                <ul class='ul_li_block clearfix'>
                  <li>
                    <input
                      id='fs_price_1'
                      type='radio'
                      name='fs_price_wroup'
                      checked
                    />
                    <label for='fs_price_1'>$25 - $100</label>
                  </li>
                  <li>
                    <input id='fs_price_2' type='radio' name='fs_price_wroup' />
                    <label for='fs_price_2'>$100 - $200</label>
                  </li>
                  <li>
                    <input id='fs_price_3' type='radio' name='fs_price_wroup' />
                    <label for='fs_price_3'>$200 - $300</label>
                  </li>
                  <li>
                    <input id='fs_price_4' type='radio' name='fs_price_wroup' />
                    <label for='fs_price_4'>$400 - $500</label>
                  </li>
                  <li>
                    <input id='fs_price_5' type='radio' name='fs_price_wroup' />
                    <label for='fs_price_5'>$500 - $1000</label>
                  </li>
                </ul>
              </form>
            </div>

            <div class='fs_widget fs_color_list'>
              <h3 class='fs_widget_title text-uppercase'>Color filter</h3>
              <form action='#'>
                <ul class='ul_li clearfix'>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#ffa037'
                    />
                  </li>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#6c7ae0'
                    />
                  </li>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#f23226'
                    />
                  </li>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#828664'
                    />
                  </li>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#68a3c2'
                    />
                  </li>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#009122'
                    />
                  </li>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#0099f7'
                    />
                  </li>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#bb8c80'
                    />
                  </li>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#ffa037'
                    />
                  </li>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#875546'
                    />
                  </li>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#f74877'
                    />
                  </li>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#1f1e29'
                    />
                  </li>
                  <li>
                    <input
                      type='radio'
                      name='fs_color_froup'
                      data-bg-color='#dddddd'
                    />
                  </li>
                </ul>
              </form>
            </div>

            <div class='fs_widget fs_size_list'>
              <h3 class='fs_widget_title text-uppercase'>Size filter</h3>
              <form action='#'>
                <ul class='ul_li clearfix'>
                  <li>
                    <label for='fs_size_1'>
                      <input id='fs_size_1' type='radio' name='fs_size_group' />
                      XS
                    </label>
                  </li>
                  <li>
                    <label for='fs_size_2'>
                      <input id='fs_size_2' type='radio' name='fs_size_group' />
                      S
                    </label>
                  </li>
                  <li>
                    <label for='fs_size_3'>
                      <input id='fs_size_3' type='radio' name='fs_size_group' />
                      M
                    </label>
                  </li>
                  <li>
                    <label for='fs_size_4'>
                      <input id='fs_size_4' type='radio' name='fs_size_group' />
                      L
                    </label>
                  </li>
                  <li>
                    <label for='fs_size_5'>
                      <input id='fs_size_5' type='radio' name='fs_size_group' />
                      XL
                    </label>
                  </li>
                  <li>
                    <label for='fs_size_6'>
                      <input id='fs_size_6' type='radio' name='fs_size_group' />
                      XXL
                    </label>
                  </li>
                </ul>
              </form>
            </div>

            <div class='fs_widget fs_realted_post'>
              <h3 class='fs_widget_title text-uppercase'>Your may also like</h3>
              <div class='small_blog'>
                <a href='blog_details.html' class='item_image'>
                  <img
                    src='../assets/images/recent_post/img_01.jpg'
                    alt='image_not_found'
                  />
                </a>
                <div class='item_content'>
                  <h3 class='item_title'>
                    <a href='blog_details.html'>
                      A Sound Way To Treat Hearing Loss
                    </a>
                  </h3>
                  <span class='post_date'>March 12, 2020</span>
                </div>
              </div>

              <div class='small_blog'>
                <a href='blog_details.html' class='item_image'>
                  <img
                    src='../assets/images/recent_post/img_01.jpg'
                    alt='image_not_found'
                  />
                </a>
                <div class='item_content'>
                  <h3 class='item_title'>
                    <a href='blog_details.html'>
                      A Sound Way To Treat Hearing Loss
                    </a>
                  </h3>
                  <span class='post_date'>March 12, 2020</span>
                </div>
              </div>

              <div class='small_blog'>
                <a href='blog_details.html' class='item_image'>
                  <img
                    src='../assets/images/recent_post/img_01.jpg'
                    alt='image_not_found'
                  />
                </a>
                <div class='item_content'>
                  <h3 class='item_title'>
                    <a href='blog_details.html'>
                      A Sound Way To Treat Hearing Loss
                    </a>
                  </h3>
                  <span class='post_date'>March 12, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- product_section - end
			================================================== -->


			<!-- offer_section - start */}
        <section class='offer_section clearfix'>
          <div class='container-fluid p-0'>
            <div class='row no-gutters justify-content-lg-between'>
              <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <div class='ce_offer_fullimage offer_fullimage text-white text-center'>
                  <img
                    src='../assets/images/offer/classic_ecommerce/img_01.jpg'
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
                    src='../assets/images/offer/classic_ecommerce/img_02.jpg'
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
      <div
        class='quickview_modal modal fade'
        id='quickview_modal'
        tabindex='-1'
        role='dialog'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-dialog-centered' role='document'>
          <div class='modal-content clearfix'>
            <button
              type='button'
              class='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div class='item_image'>
              <img
                src='../assets/images/shop/fashion_minimal/img_07.jpg'
                alt='image_not_found'
              />
            </div>
            <div class='item_content'>
              <h2 class='item_title mb_15'>Digital Infrared Thermometer</h2>
              <div class='rating_star mb_30 clearfix'>
                <ul class='float-left ul_li mr-2'>
                  <li class='active'>
                    <i class='las la-star'></i>
                  </li>
                  <li class='active'>
                    <i class='las la-star'></i>
                  </li>
                  <li class='active'>
                    <i class='las la-star'></i>
                  </li>
                  <li class='active'>
                    <i class='las la-star'></i>
                  </li>
                  <li>
                    <i class='las la-star'></i>
                  </li>
                </ul>
                <span class='review_text'>(12 Reviews)</span>
              </div>
              <span class='item_price mb_15'>$49.50</span>
              <p class='mb_30'>
                Best Electronic Digital Thermometer adipiscing elit, sed do
                eiusmod teincididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse us ultrices gravidaes.
              </p>
              <div class='quantity_form mb_30 clearfix'>
                <strong class='list_title'>Quantity:</strong>
                <div class='quantity_input'>
                  <form action='#'>
                    <span class='input_number_decrement'>–</span>
                    <input class='input_number' type='text' value='1' />
                    <span class='input_number_increment'>+</span>
                  </form>
                </div>
              </div>
              <ul class='btns_group ul_li mb_30 clearfix'>
                <li>
                  <a href='#!' class='custom_btn bg_carparts_red'>
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
                    <i class='fal fa-sync'></i>
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
                    <i class='fal fa-heart'></i>
                  </a>
                </li>
              </ul>
              <ul class='info_list ul_li_block clearfix'>
                <li>
                  <strong class='list_title'>Category:</strong>{" "}
                  <a href='#!'>Medical Equipment</a>
                </li>
                <li class='social_icon'>
                  <strong class='list_title'>Share:</strong>
                  <ul class='ul_li clearfix'>
                    <li>
                      <a href='#!'>
                        <i class='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#!'>
                        <i class='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#!'>
                        <i class='fab fa-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#!'>
                        <i class='fab fa-pinterest-p'></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
export default HomePage;
