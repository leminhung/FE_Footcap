import React from "react";

const FilterSideBar = () => {
  return (
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
                  <input id='fs_size_2' type='radio' name='fs_size_group' />S
                </label>
              </li>
              <li>
                <label for='fs_size_3'>
                  <input id='fs_size_3' type='radio' name='fs_size_group' />M
                </label>
              </li>
              <li>
                <label for='fs_size_4'>
                  <input id='fs_size_4' type='radio' name='fs_size_group' />L
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
  );
};

export default FilterSideBar;
