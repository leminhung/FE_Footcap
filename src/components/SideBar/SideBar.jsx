import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "src/store/cart/cart.action";

export default function SideBar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleDeleteItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className='sidebar-menu-wrapper'>
      <div className='cart_sidebar'>
        <button type='button' className='close_btn'>
          <i className='fal fa-times'></i>
        </button>

        <ul className='cart_items_list ul_li_block mb_30 clearfix'>
          {cart.cartItems.length > 0 &&
            cart.cartItems.map((item) => (
              <li key={item.product}>
                <div className='item_image'>
                  <img src={item?.image} alt='image_not_found' />
                </div>
                <div className='item_content'>
                  <h4 className='item_title'>{item?.name}</h4>
                  <span className='item_price'>${item?.price}</span>
                </div>
                <button
                  type='button'
                  className='remove_btn'
                  onClick={() => handleDeleteItem(item.product)}
                >
                  <i className='fal fa-trash-alt'></i>
                </button>
              </li>
            ))}
        </ul>

        <ul className='total_price ul_li_block mb_30 clearfix'>
          <li>
            <span>Subtotal:</span>
            <span>${cart.subtotal}</span>
          </li>
          <li>
            <span>Discount 10%:</span>
            <span>- ${cart.subtotal * 0.1}</span>
          </li>
          <li>
            <span>Total:</span>
            <span>${cart.total}</span>
          </li>
        </ul>

        <ul className='btns_group ul_li_block clearfix'>
          <li>
            <a href='/cart'>View Cart</a>
          </li>
          <li>
            <a href='/checkout-shopping-cart'>Checkout</a>
          </li>
        </ul>
      </div>

      <div className='sidebar_mobile_menu'>
        <button type='button' className='close_btn'>
          <i className='fal fa-times'></i>
        </button>

        <div className='msb_widget brand_logo text-center'>
          <a href='index.html'>
            <img
              src='/assets/images/logo/logo_25_1x.png'
              srcSet='/assets/images/logo/logo_25_2x.png 2x'
              alt='logo_not_found'
            />
          </a>
        </div>

        <div className='msb_widget mobile_menu_list clearfix'>
          <h3 className='title_text mb_15 text-uppercase'>
            <i className='far fa-bars mr-2'></i> Menu List
          </h3>
          <ul className='ul_li_block clearfix'>
            <li className='active dropdown'>
              <a
                href='#!'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Home
              </a>
              <ul className='ul_li_block dropdown-menu'>
                <li>
                  <a href='home_carparts.html'>Carparts</a>
                </li>
                <li>
                  <a href='home_classic_ecommerce.html'>Classic Ecommerce</a>
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
                  <a href='home_lookbook_creative.html'>Lookbook Creative</a>
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
                  <a href='home_single_story_black.html'>Single Story Black</a>
                </li>
                <li>
                  <a href='home_single_story_white.html'>Single Story White</a>
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
            <li className='dropdown'>
              <a
                href='#!'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Shop
              </a>
              <ul className='dropdown-menu'>
                <li className='dropdown ul_li_block'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Carparts
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
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

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Classic Ecommerce
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
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

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Electronic
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
                    <li>
                      <a href='electronic_shop.html'>Shop Page</a>
                    </li>
                    <li>
                      <a href='electronic_shop_details.html'>Shop Details</a>
                    </li>
                  </ul>
                </li>

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Fashion
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
                    <li>
                      <a href='fashion_shop.html'>Shop Page</a>
                    </li>
                    <li>
                      <a href='fashion_shop_details.html'>Shop Details</a>
                    </li>
                  </ul>
                </li>

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Fashion Minimal
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
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

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Fashion Minimal
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
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

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Furniture
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
                    <li>
                      <a href='furniture_shop.html'>Shop Page</a>
                    </li>
                    <li>
                      <a href='furniture_shop_details.html'>Shop Details</a>
                    </li>
                  </ul>
                </li>

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Gadget
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
                    <li>
                      <a href='gadget_shop.html'>Shop Page</a>
                    </li>
                    <li>
                      <a href='gadget_shop_details.html'>Shop Details</a>
                    </li>
                  </ul>
                </li>

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Medical
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
                    <li>
                      <a href='medical_shop.html'>Shop Page</a>
                    </li>
                    <li>
                      <a href='medical_shop_details.html'>Shop Details</a>
                    </li>
                  </ul>
                </li>

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Modern Minimal
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
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

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Modern
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
                    <li>
                      <a href='modern_shop.html'>Shop Page</a>
                    </li>
                    <li>
                      <a href='modern_shop_details.html'>Shop Details</a>
                    </li>
                  </ul>
                </li>

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Motorcycle
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
                    <li>
                      <a href='motorcycle_shop_grid.html'>Shop Grid</a>
                    </li>
                    <li>
                      <a href='motorcycle_shop_list.html'>Shop List</a>
                    </li>
                    <li>
                      <a href='motorcycle_shop_details.html'>Shop Details</a>
                    </li>
                  </ul>
                </li>

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Simple Shop
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
                    <li>
                      <a href='simple_shop.html'>Shop Page</a>
                    </li>
                    <li>
                      <a href='simple_shop_details.html'>Shop Details</a>
                    </li>
                  </ul>
                </li>

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Sports
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
                    <li>
                      <a href='sports_shop.html'>Shop Page</a>
                    </li>
                    <li>
                      <a href='sports_shop_details.html'>Shop Details</a>
                    </li>
                  </ul>
                </li>

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Lookbook
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
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

                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Shop Other Pages
                  </a>
                  <ul className='dropdown-menu ul_li_block'>
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
            <li className='dropdown'>
              <a
                href='#!'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Pages
              </a>
              <ul className='dropdown-menu'>
                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Shop Inner Pages
                  </a>
                  <ul className='dropdown-menu'>
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
                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Blogs
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a href='blog.html'>Blog Page</a>
                    </li>
                    <li>
                      <a href='blog_details.html'>Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Compare
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a href='compare_1.html'>Compare V.1</a>
                    </li>
                    <li>
                      <a href='compare_2.html'>Compare V.2</a>
                    </li>
                  </ul>
                </li>
                <li className='dropdown'>
                  <a
                    href='#!'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Register
                  </a>
                  <ul className='dropdown-menu'>
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

        <div className='user_info'>
          <h3 className='title_text mb_30 text-uppercase'>
            <i className='fas fa-user mr-2'></i> User Info
          </h3>
          <div className='profile_info clearfix'>
            <div className='user_thumbnail'>
              <img
                src='/assets/images/meta/img_01.png'
                alt='thumbnail_not_found'
              />
            </div>
            <div className='user_content'>
              <h4 className='user_name'>Jone Doe</h4>
              <span className='user_title'>Seller</span>
            </div>
          </div>
          <ul className='settings_options ul_li_block clearfix'>
            <li>
              <a href='#!'>
                <i className='fal fa-user-circle'></i> Profile
              </a>
            </li>
            <li>
              <a href='#!'>
                <i className='fal fa-user-cog'></i> Settings
              </a>
            </li>
            <li>
              <a href='#!'>
                <i className='fal fa-sign-out-alt'></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='overlay'></div>
    </div>
  );
}
