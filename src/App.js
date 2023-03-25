import React from "react";
import "./styles/css/fontawesome.css";
import "./styles/css/style.css";

const App = () => {
  return (
    <body class='home_classic_ecommerce'>
      {/* <!-- backtotop - start --> */}
      <div id='thetop'></div>
      <div class='backtotop' data-bg-color='#000000'>
        <a href='#' class='scroll'>
          <i class='far fa-arrow-up'></i>
        </a>
      </div>
      {/* <!-- backtotop - end --> */}

      {/* <!-- preloader - start --> */}
      {/* <!-- <div id="preloader"></div> --> */}
      {/* <!-- preloader - end --> */}

      {/* <!-- header_section - start */}
      {/* ================================================== --> */}
      <header class='header_section classic_ecommerce_header sticky_header clearfix'>
        <div class='header_top bg_black text-white clearfix'>
          <div class='container'>
            <div class='row align-items-center'>
              <div class='col-lg-6'>
                <span class='offer_text'>
                  Free Shipping on Domestic Orders over $150
                </span>
              </div>
              <div class='col-lg-6'>
                <ul class='primary_social_links ul_li_right clearfix'>
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
                      <i class='fab fa-linkedin-in'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <i class='fab fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <i class='fab fa-google-play'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class='header_bottom clearfix'>
          <div class='container'>
            <div class='row align-items-center'>
              <div class='col-lg-3'>
                <div class='brand_logo'>
                  <a class='brand_link' href='#!'>
                    <img
                      src='assets/images/logo/logo_03_1x.png'
                      srcset='assets/images/logo/logo_03_2x.png 2x'
                      alt='logo_not_found'
                    />
                  </a>

                  <ul class='mh_action_btns ul_li clearfix'>
                    <li>
                      <button
                        type='button'
                        class='search_btn'
                        data-toggle='collapse'
                        data-target='#search_body_collapse'
                        aria-expanded='false'
                        aria-controls='search_body_collapse'
                      >
                        <i class='fal fa-search'></i>
                      </button>
                    </li>
                    <li>
                      <button type='button' class='cart_btn'>
                        <i class='fal fa-shopping-cart'></i>
                        <span class='btn_badge'>2</span>
                      </button>
                    </li>
                    <li>
                      <button type='button' class='mobile_menu_btn'>
                        <i class='far fa-bars'></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-6'>
                <nav class='main_menu clearfix'>
                  <ul class='ul_li_center clearfix'>
                    <li class='menu_item_has_child'>
                      <a href='#!'>Home</a>
                      {/* <div class='mega_menu text-center'>
                        <div class='background' data-bg-color='#ffffff'>
                          <div class='container'>
                            <ul class='home_pages ul_li clearfix'>
                              <li>
                                <a href='home_carparts.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/carparts.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Car Parts</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_classic_ecommerce.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/classic_ecommarce.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>
                                    Classic Ecommerce
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href='home_creative_onelook.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/creative_onelook.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>
                                    Creative Onelook
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href='home_electronic.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/electronic.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Electronic</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_fashion.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/fashion.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Fashion</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_fashion_minimal.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/fashion_minimal.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>
                                    Fashion Minimal
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href='home_furniture.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/furniture.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Furniture</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_gadget.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/gadget.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Gadget</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_lookbook_creative.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/lookbook_creative.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>
                                    Lookbook Creative
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href='home_lookbook_slide.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/lookbook_slide.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Lookbook Slide</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_medical.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/medical.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Medical</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_modern.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/modern.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Modern</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_modern_minimal.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/modern_minimal.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Modern Minimal</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_motorcycle.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/motorcycle.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Motorcycle</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_parallax_shop.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/parallax_shop.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Parallax Shop</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_simple_shop.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/simple_shop.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Simple Shop</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_single_story_black.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/single_story_black.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>
                                    Single Story Black
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href='home_single_story_white.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/single_story_white.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>
                                    Single Story White
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href='home_sports.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/sports.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Sports Shop</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_supermarket.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/supermarket.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Supermarket</span>
                                </a>
                              </li>
                              <li>
                                <a href='home_watch.html'>
                                  <span class='item_image'>
                                    <img
                                      src='assets/images/home_pages/watch.png'
                                      alt='image_not_found'
                                    />
                                  </span>
                                  <span class='item_title'>Watch</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div> */}
                    </li>
                    <li class='menu_item_has_child'>
                      <a href='#!'>Shop</a>
                      <div class='mega_menu'>
                        <div class='background' data-bg-color='#ffffff'>
                          <div class='container'>
                            <div class='row mt__30'>
                              <div class='col-lg-3'>
                                <div class='page_links'>
                                  <h3 class='title_text'>Carparts</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='carparts_shop.html'>Shop Page</a>
                                    </li>
                                    <li>
                                      <a href='carparts_shop_grid.html'>
                                        Shop Grid
                                      </a>
                                    </li>
                                    <li>
                                      <a href='carparts_shop_list.html'>
                                        Shop List
                                      </a>
                                    </li>
                                    <li>
                                      <a href='carparts_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class='page_links'>
                                  <h3 class='title_text'>Classic Ecommerce</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='classic_ecommerce_shop.html'>
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href='classic_ecommerce_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class='page_links'>
                                  <h3 class='title_text'>Electronic</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='electronic_shop.html'>
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href='electronic_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class='page_links'>
                                  <h3 class='title_text'>Fashion</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='fashion_shop.html'>Shop Page</a>
                                    </li>
                                    <li>
                                      <a href='fashion_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div class='col-lg-3'>
                                <div class='page_links'>
                                  <h3 class='title_text'>Fashion Minimal</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='fashion_minimal_shop.html'>
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href='fashion_minimal_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class='page_links'>
                                  <h3 class='title_text'>Fashion Minimal</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='fashion_minimal_shop.html'>
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href='fashion_minimal_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class='page_links'>
                                  <h3 class='title_text'>Furniture</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='furniture_shop.html'>
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href='furniture_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class='page_links'>
                                  <h3 class='title_text'>Gadget</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='gadget_shop.html'>Shop Page</a>
                                    </li>
                                    <li>
                                      <a href='gadget_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div class='col-lg-3'>
                                <div class='page_links'>
                                  <h3 class='title_text'>Medical</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='medical_shop.html'>Shop Page</a>
                                    </li>
                                    <li>
                                      <a href='medical_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class='page_links'>
                                  <h3 class='title_text'>Modern Minimal</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='modern_minimal_shop.html'>
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href='modern_minimal_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class='page_links'>
                                  <h3 class='title_text'>Modern</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='modern_shop.html'>Shop Page</a>
                                    </li>
                                    <li>
                                      <a href='modern_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class='page_links'>
                                  <h3 class='title_text'>Motorcycle</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='motorcycle_shop_grid.html'>
                                        Shop Grid
                                      </a>
                                    </li>
                                    <li>
                                      <a href='motorcycle_shop_list.html'>
                                        Shop List
                                      </a>
                                    </li>
                                    <li>
                                      <a href='motorcycle_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div class='col-lg-3'>
                                <div class='page_links'>
                                  <h3 class='title_text'>Simple Shop</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='simple_shop.html'>Shop Page</a>
                                    </li>
                                    <li>
                                      <a href='simple_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class='page_links'>
                                  <h3 class='title_text'>Sports</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='sports_shop.html'>Shop Page</a>
                                    </li>
                                    <li>
                                      <a href='sports_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class='page_links'>
                                  <h3 class='title_text'>Lookbook</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='lookbook_creative_shop.html'>
                                        Shop Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href='lookbook_creative_shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div class='page_links'>
                                  <h3 class='title_text'>Shop Other Pages</h3>
                                  <ul class='ul_li_block'>
                                    <li>
                                      <a href='#!'>
                                        <del>Shop Page</del>
                                      </a>
                                    </li>
                                    <li>
                                      <a href='shop_details.html'>
                                        Shop Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class='menu_item_has_child'>
                      <a href='#!'>Pages</a>
                      <ul class='submenu'>
                        <li class='menu_item_has_child'>
                          <a href='#!'>Shop Inner Pages</a>
                          <ul class='submenu'>
                            <li>
                              <a href='shop_cart.html'>Shopping Cart</a>
                            </li>
                            <li>
                              <a href='shop_checkout.html'>Checkout Step 1</a>
                            </li>
                            <li>
                              <a href='shop_checkout_step2.html'>
                                Checkout Step 2
                              </a>
                            </li>
                            <li>
                              <a href='shop_checkout_step3.html'>
                                Checkout Step 3
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='404.html'>404 Page</a>
                        </li>
                        <li class='menu_item_has_child'>
                          <a href='#!'>Blogs</a>
                          <ul class='submenu'>
                            <li>
                              <a href='blog.html'>Blog Page</a>
                            </li>
                            <li>
                              <a href='blog_details.html'>Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li class='menu_item_has_child'>
                          <a href='#!'>Compare</a>
                          <ul class='submenu'>
                            <li>
                              <a href='compare_1.html'>Compare V.1</a>
                            </li>
                            <li>
                              <a href='compare_2.html'>Compare V.2</a>
                            </li>
                          </ul>
                        </li>
                        <li class='menu_item_has_child'>
                          <a href='#!'>Register</a>
                          <ul class='submenu'>
                            <li>
                              <a href='login.html'>Login</a>
                            </li>
                            <li>
                              <a href='signup.html'>Sign Up</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='#!'>About us</a>
                    </li>
                    <li>
                      <a href='contact.html'>Contact us</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class='col-lg-3'>
                <ul class='action_btns_group ul_li_right clearfix'>
                  <li>
                    <button
                      type='button'
                      class='search_btn'
                      data-toggle='collapse'
                      data-target='#search_body_collapse'
                      aria-expanded='false'
                      aria-controls='search_body_collapse'
                    >
                      <i class='fal fa-search'></i>
                    </button>
                  </li>
                  <li>
                    <button
                      type='button'
                      class='user_btn'
                      data-toggle='collapse'
                      data-target='#use_deropdown'
                      aria-expanded='false'
                      aria-controls='use_deropdown'
                    >
                      <i class='fal fa-user'></i>
                    </button>
                    <div id='use_deropdown' class='collapse_dropdown collapse'>
                      <div class='dropdown_content'>
                        <div class='profile_info clearfix'>
                          <div class='user_thumbnail'>
                            <img
                              src='assets/images/meta/img_01.png'
                              alt='thumbnail_not_found'
                            />
                          </div>
                          <div class='user_content'>
                            <h4 class='user_name'>Jone Doe</h4>
                            <span class='user_title'>Seller</span>
                          </div>
                        </div>
                        <ul class='settings_options ul_li_block clearfix'>
                          <li>
                            <a href='#!'>
                              <i class='fal fa-user-circle'></i> Profile
                            </a>
                          </li>
                          <li>
                            <a href='#!'>
                              <i class='fal fa-user-cog'></i> Settings
                            </a>
                          </li>
                          <li>
                            <a href='#!'>
                              <i class='fal fa-sign-out-alt'></i> Logout
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button type='button' class='cart_btn'>
                      <i class='fal fa-shopping-cart'></i>
                      <span class='btn_badge'>2</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id='search_body_collapse' class='search_body_collapse collapse'>
          <div class='search_body'>
            <div class='container'>
              <form action='#'>
                <div class='form_item mb-0'>
                  <input
                    type='search'
                    name='search'
                    placeholder='Type here...'
                  />
                  <button type='submit'>
                    <i class='fal fa-search'></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header_section - end
		================================================== -->


		<!-- main body - start
		================================================== --> */}
      <main>
        {/* 
			<!-- sidebar mobile menu & sidebar cart - start
			================================================== --> */}
        <div class='sidebar-menu-wrapper'>
          <div class='cart_sidebar'>
            <button type='button' class='close_btn'>
              <i class='fal fa-times'></i>
            </button>

            <ul class='cart_items_list ul_li_block mb_30 clearfix'>
              <li>
                <div class='item_image'>
                  <img
                    src='assets/images/cart/img_01.jpg'
                    alt='image_not_found'
                  />
                </div>
                <div class='item_content'>
                  <h4 class='item_title'>Yellow Blouse</h4>
                  <span class='item_price'>$30.00</span>
                </div>
                <button type='button' class='remove_btn'>
                  <i class='fal fa-trash-alt'></i>
                </button>
              </li>
              <li>
                <div class='item_image'>
                  <img
                    src='assets/images/cart/img_01.jpg'
                    alt='image_not_found'
                  />
                </div>
                <div class='item_content'>
                  <h4 class='item_title'>Yellow Blouse</h4>
                  <span class='item_price'>$30.00</span>
                </div>
                <button type='button' class='remove_btn'>
                  <i class='fal fa-trash-alt'></i>
                </button>
              </li>
              <li>
                <div class='item_image'>
                  <img
                    src='assets/images/cart/img_01.jpg'
                    alt='image_not_found'
                  />
                </div>
                <div class='item_content'>
                  <h4 class='item_title'>Yellow Blouse</h4>
                  <span class='item_price'>$30.00</span>
                </div>
                <button type='button' class='remove_btn'>
                  <i class='fal fa-trash-alt'></i>
                </button>
              </li>
            </ul>

            <ul class='total_price ul_li_block mb_30 clearfix'>
              <li>
                <span>Subtotal:</span>
                <span>$90</span>
              </li>
              <li>
                <span>Vat 5%:</span>
                <span>$4.5</span>
              </li>
              <li>
                <span>Discount 20%:</span>
                <span>- $18.9</span>
              </li>
              <li>
                <span>Total:</span>
                <span>$75.6</span>
              </li>
            </ul>

            <ul class='btns_group ul_li_block clearfix'>
              <li>
                <a href='shop_cart.html'>View Cart</a>
              </li>
              <li>
                <a href='shop_checkout.html'>Checkout</a>
              </li>
            </ul>
          </div>

          <div class='sidebar_mobile_menu'>
            <button type='button' class='close_btn'>
              <i class='fal fa-times'></i>
            </button>

            <div class='msb_widget brand_logo text-center'>
              <a href='index.html'>
                <img
                  src='assets/images/logo/logo_25_1x.png'
                  srcset='assets/images/logo/logo_25_2x.png 2x'
                  alt='logo_not_found'
                />
              </a>
            </div>

            <div class='msb_widget mobile_menu_list clearfix'>
              <h3 class='title_text mb_15 text-uppercase'>
                <i class='far fa-bars mr-2'></i> Menu List
              </h3>
              <ul class='ul_li_block clearfix'>
                <li class='active dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Home
                  </a>
                  <ul class='ul_li_block dropdown-menu'>
                    <li>
                      <a href='home_carparts.html'>Carparts</a>
                    </li>
                    <li>
                      <a href='home_classic_ecommerce.html'>
                        Classic Ecommerce
                      </a>
                    </li>
                    <li>
                      <a href='home_creative_onelook.html'>Creative Onelook</a>
                    </li>
                    <li>
                      <a href='home_electronic.html'>Electronic</a>
                    </li>
                    <li>
                      <a href='home_fashion.html'>Fashion</a>
                    </li>
                    <li>
                      <a href='home_fashion_minimal.html'>Fashion Minimal</a>
                    </li>
                    <li>
                      <a href='home_furniture.html'>Furniture</a>
                    </li>
                    <li>
                      <a href='home_gadget.html'>Gadget</a>
                    </li>
                    <li>
                      <a href='home_lookbook_creative.html'>
                        Lookbook Creative
                      </a>
                    </li>
                    <li>
                      <a href='home_lookbook_slide.html'>Lookbook Slide</a>
                    </li>
                    <li>
                      <a href='home_medical.html'>Medical</a>
                    </li>
                    <li>
                      <a href='home_modern.html'>Modern</a>
                    </li>
                    <li>
                      <a href='home_modern_minimal.html'>Modern Minimal</a>
                    </li>
                    <li>
                      <a href='home_motorcycle.html'>Motorcycle</a>
                    </li>
                    <li>
                      <a href='home_parallax_shop.html'>Parallax Shop</a>
                    </li>
                    <li>
                      <a href='home_simple_shop.html'>Simple Shop</a>
                    </li>
                    <li>
                      <a href='home_single_story_black.html'>
                        Single Story Black
                      </a>
                    </li>
                    <li>
                      <a href='home_single_story_white.html'>
                        Single Story White
                      </a>
                    </li>
                    <li>
                      <a href='home_sports.html'>Sports</a>
                    </li>
                    <li>
                      <a href='home_supermarket.html'>Supermarket</a>
                    </li>
                    <li>
                      <a href='home_watch.html'>Watch</a>
                    </li>
                  </ul>
                </li>
                <li class='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Shop
                  </a>
                  <ul class='dropdown-menu'>
                    <li class='dropdown ul_li_block'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Carparts
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='carparts_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='carparts_shop_grid.html'>Shop Grid</a>
                        </li>
                        <li>
                          <a href='carparts_shop_list.html'>Shop List</a>
                        </li>
                        <li>
                          <a href='carparts_shop_details.html'>Shop Details</a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Classic Ecommerce
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='classic_ecommerce_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='classic_ecommerce_shop_details.html'>
                            Shop Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Electronic
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='electronic_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='electronic_shop_details.html'>
                            Shop Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Fashion
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='fashion_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='fashion_shop_details.html'>Shop Details</a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Fashion Minimal
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='fashion_minimal_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='fashion_minimal_shop_details.html'>
                            Shop Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Fashion Minimal
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='fashion_minimal_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='fashion_minimal_shop_details.html'>
                            Shop Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Furniture
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='furniture_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='furniture_shop_details.html'>Shop Details</a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Gadget
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='gadget_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='gadget_shop_details.html'>Shop Details</a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Medical
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='medical_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='medical_shop_details.html'>Shop Details</a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Modern Minimal
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='modern_minimal_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='modern_minimal_shop_details.html'>
                            Shop Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Modern
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='modern_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='modern_shop_details.html'>Shop Details</a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Motorcycle
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='motorcycle_shop_grid.html'>Shop Grid</a>
                        </li>
                        <li>
                          <a href='motorcycle_shop_list.html'>Shop List</a>
                        </li>
                        <li>
                          <a href='motorcycle_shop_details.html'>
                            Shop Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Simple Shop
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='simple_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='simple_shop_details.html'>Shop Details</a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Sports
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='sports_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='sports_shop_details.html'>Shop Details</a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Lookbook
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='lookbook_creative_shop.html'>Shop Page</a>
                        </li>
                        <li>
                          <a href='lookbook_creative_shop_details.html'>
                            Shop Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Shop Other Pages
                      </a>
                      <ul class='dropdown-menu ul_li_block'>
                        <li>
                          <a href='#!'>
                            <del>Shop Page</del>
                          </a>
                        </li>
                        <li>
                          <a href='shop_details.html'>Shop Details</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Pages
                  </a>
                  <ul class='dropdown-menu'>
                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Shop Inner Pages
                      </a>
                      <ul class='dropdown-menu'>
                        <li>
                          <a href='shop_cart.html'>Shopping Cart</a>
                        </li>
                        <li>
                          <a href='shop_checkout.html'>Checkout Step 1</a>
                        </li>
                        <li>
                          <a href='shop_checkout_step2.html'>Checkout Step 2</a>
                        </li>
                        <li>
                          <a href='shop_checkout_step3.html'>Checkout Step 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='404.html'>404 Page</a>
                    </li>
                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Blogs
                      </a>
                      <ul class='dropdown-menu'>
                        <li>
                          <a href='blog.html'>Blog Page</a>
                        </li>
                        <li>
                          <a href='blog_details.html'>Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Compare
                      </a>
                      <ul class='dropdown-menu'>
                        <li>
                          <a href='compare_1.html'>Compare V.1</a>
                        </li>
                        <li>
                          <a href='compare_2.html'>Compare V.2</a>
                        </li>
                      </ul>
                    </li>
                    <li class='dropdown'>
                      <a
                        href='#!'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Register
                      </a>
                      <ul class='dropdown-menu'>
                        <li>
                          <a href='login.html'>Login</a>
                        </li>
                        <li>
                          <a href='signup.html'>Sign Up</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='contact.html'>Conatct</a>
                </li>
              </ul>
            </div>

            <div class='user_info'>
              <h3 class='title_text mb_30 text-uppercase'>
                <i class='fas fa-user mr-2'></i> User Info
              </h3>
              <div class='profile_info clearfix'>
                <div class='user_thumbnail'>
                  <img
                    src='assets/images/meta/img_01.png'
                    alt='thumbnail_not_found'
                  />
                </div>
                <div class='user_content'>
                  <h4 class='user_name'>Jone Doe</h4>
                  <span class='user_title'>Seller</span>
                </div>
              </div>
              <ul class='settings_options ul_li_block clearfix'>
                <li>
                  <a href='#!'>
                    <i class='fal fa-user-circle'></i> Profile
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <i class='fal fa-user-cog'></i> Settings
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <i class='fal fa-sign-out-alt'></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='overlay'></div>
        </div>
        {/* <!-- sidebar mobile menu & sidebar cart - end
			================================================== -->


			<!-- breadcrumb_section - start
			================================================== --> */}
        <section
          class='breadcrumb_section classic_ecommerce_breadcrumb d-flex align-items-end clearfix'
          data-background='assets/images/breadcrumb/bg_03.jpg'
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
        {/* <!-- breadcrumb_section - end
			================================================== -->


			<!-- category_section - start
			================================================== --> */}
        <section class='category_section sec_ptb_100 pb-0 clearfix'>
          <div class='container'>
            <div class='ecommerce_category_masonry grid'>
              <div class='grid-sizer'></div>

              <div class='grid-item'>
                <div class='ecommerce_category_fullimage'>
                  <img
                    src='assets/images/category/classic_ecommerce/img_03.jpg'
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
                    src='assets/images/category/classic_ecommerce/img_04.jpg'
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
                    src='assets/images/category/classic_ecommerce/img_05.jpg'
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
                          src='assets/images/shop/classic_ecommerce/img_01.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab1_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_02.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab1_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_03.png'
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
                          src='assets/images/shop/classic_ecommerce/img_02.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab2_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_03.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab2_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_04.png'
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
                          src='assets/images/shop/classic_ecommerce/img_03.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab3_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_04.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab3_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_05.png'
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
                          src='assets/images/shop/classic_ecommerce/img_04.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab4_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_05.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab4_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_06.png'
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
                          src='assets/images/shop/classic_ecommerce/img_05.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab5_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_06.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab5_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_07.png'
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
                          src='assets/images/shop/classic_ecommerce/img_06.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab6_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_07.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab6_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_08.png'
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
                          src='assets/images/shop/classic_ecommerce/img_07.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab7_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_08.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab7_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_09.png'
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
                          src='assets/images/shop/classic_ecommerce/img_08.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab8_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_09.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab8_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_10.png'
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
                          src='assets/images/shop/classic_ecommerce/img_09.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab9_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_10.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab9_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_11.png'
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
                          src='assets/images/shop/classic_ecommerce/img_10.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab10_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_11.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab10_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_12.png'
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
                          src='assets/images/shop/classic_ecommerce/img_11.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab11_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_12.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab11_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_01.png'
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
                          src='assets/images/shop/classic_ecommerce/img_12.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab12_2' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_01.png'
                          alt='image_not_found'
                        />
                      </div>
                    </div>
                    <div id='ptab12_3' class='tab-pane fade'>
                      <div class='item_image'>
                        <img
                          src='assets/images/shop/classic_ecommerce/img_02.png'
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
                    src='assets/images/recent_post/img_01.jpg'
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
                    src='assets/images/recent_post/img_01.jpg'
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
                    src='assets/images/recent_post/img_01.jpg'
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


			<!-- offer_section - start
			================================================== --> */}
        <section class='offer_section clearfix'>
          <div class='container-fluid p-0'>
            <div class='row no-gutters justify-content-lg-between'>
              <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <div class='ce_offer_fullimage offer_fullimage text-white text-center'>
                  <img
                    src='assets/images/offer/classic_ecommerce/img_01.jpg'
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
                    src='assets/images/offer/classic_ecommerce/img_02.jpg'
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
      {/* <!-- offer_section - end
			================================================== -->


		<!-- main body - end
		================================================== -->


		<!-- footer_section - start
		================================================== --> */}
      <footer class='footer_section ecommerce_footer bg_black text-white clearfix'>
        <div class='footer_widget_area sec_ptb_100 clearfix'>
          <div class='container'>
            <div class='row justify-content-lg-between'>
              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='footer_widget footer_about'>
                  <div class='brand_logo mb_15'>
                    <a href='index.html'>
                      <img
                        src='assets/images/logo/logo_04_1x.png'
                        srcset='assets/images/logo/logo_04_2x.png 2x'
                        alt='logo_not_found'
                      />
                    </a>
                  </div>

                  <p class='mb_50'>
                    Discover new ways to dress this spring with a selection of
                    the best designer jackets.Discover new ways to dress this
                    spring
                  </p>

                  <div class='payment_methods'>
                    <img
                      src='assets/images/payment_methods_01.png'
                      alt='image_not_found'
                    />
                  </div>
                </div>
              </div>

              <div class='col-lg-2 col-md-4 col-sm-6 col-xs-12'>
                <div class='footer_widget footer_useful_links clearfix'>
                  <h3 class='footer_widget_title text-white'>Find it Fast</h3>
                  <ul class='ul_li_block'>
                    <li>487 Eighth Avenue West Street, New York</li>
                    <li>Phone: 9039212123</li>
                    <li>E-Mail: Simple@mgke</li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-2 col-md-4 col-sm-6 col-xs-12'>
                <div class='footer_widget footer_useful_links clearfix'>
                  <h3 class='footer_widget_title text-white'>Information</h3>
                  <ul class='ul_li_block'>
                    <li>
                      <a href='#!'>About Us</a>
                    </li>
                    <li>
                      <a href='#!'>FAQ Page</a>
                    </li>
                    <li>
                      <a href='#!'>Wish List</a>
                    </li>
                    <li>
                      <a href='#!'>Contact Us</a>
                    </li>
                    <li>
                      <a href='#!'>Work With Us</a>
                    </li>
                    <li>
                      <a href='#!'>Offices</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-2 col-md-4 col-sm-6 col-xs-12'>
                <div class='footer_widget footer_useful_links clearfix'>
                  <h3 class='footer_widget_title text-white'>Discover</h3>
                  <ul class='ul_li_block'>
                    <li>
                      <a href='#!'>Men</a>
                    </li>
                    <li>
                      <a href='#!'>Women</a>
                    </li>
                    <li>
                      <a href='#!'>Home & Living</a>
                    </li>
                    <li>
                      <a href='#!'>Sale</a>
                    </li>
                    <li>
                      <a href='#!'>Private Shopping</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <div class='footer_widget footer_useful_links clearfix'>
                  <h3 class='footer_widget_title text-white'>Contact</h3>
                  <ul class='ul_li_block'>
                    <li>
                      <a href='#!'>Follow Us On Instagram</a>
                    </li>
                    <li>
                      <a href='#!'>Add to Facebook</a>
                    </li>
                    <li>
                      <a href='#!'>Pinterest</a>
                    </li>
                    <li>
                      <a href='#!'>Follow us on Twitter</a>
                    </li>
                    <li>
                      <a href='#!'>Google</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='footer_bottom text-center d-flex align-items-center clearfix'>
          <div class='container'>
            <p class='copyright_text mb-0'>
              ©{" "}
              <a href='#!' class='author_link text-white'>
                Neoncart
              </a>{" "}
              - All rights Reserved
            </p>
          </div>
        </div>
      </footer>
      {/* <!-- footer_section - end
		================================================== -->

      {/* <!-- product quick view - start --> */}
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
                src='assets/images/shop/fashion_minimal/img_07.jpg'
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
      {/* <!-- product quick view - end -->
		<!-- shop_section - end
			================================================== --> */}
    </body>
  );
};

export default App;
