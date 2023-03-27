import React from "react";

export default function HeaderDark() {
  return (
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
                    <div class='mega_menu text-center'>
                      <div
                        class='background'
                        style={{
                          backgroundColor: `#ffffff`,
                        }}
                      >
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
                                <span class='item_title'>Creative Onelook</span>
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
                                <span class='item_title'>Fashion Minimal</span>
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
                    </div>
                  </li>
                  <li class='menu_item_has_child'>
                    <a href='#!'>Shop</a>
                    <div class='mega_menu'>
                      <div
                        class='background'
                        style={{
                          backgroundColor: `#ffffff`,
                        }}
                      >
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
                                    <a href='electronic_shop.html'>Shop Page</a>
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
                                    <a href='furniture_shop.html'>Shop Page</a>
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
                                    <a href='shop_details.html'>Shop Details</a>
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
                <input type='search' name='search' placeholder='Type here...' />
                <button type='submit'>
                  <i class='fal fa-search'></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
