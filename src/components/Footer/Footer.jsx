import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className='footer_section default_footer clearfix'>
      <div
        className='footer_widget_area sec_ptb_100 clearfix'
        style={{
          backgroundColor: `#1f1f1f`,
        }}
      >
        <div className='container'>
          <div className='row justify-content-lg-between'>
            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
              <div className='footer_widget df_about_area'>
                <div className='brand_logo mb_30'>
                  <a href='/' className='brand_logo_cus'>
                    <span className='cus_first_letter'>F</span>
                    <span className='cus_second_letter'>ootcap</span>
                  </a>
                </div>

                <p className='mb_15'>
                  We’ve completed 1000+ demo site for more than one million of
                  our customers.
                </p>

                <ul className='df_contact_info ul_li_block clearfix'>
                  <li>
                    <i className='fas fa-phone-alt'></i> 0843-987-789
                  </li>
                  <li>
                    <i className='fas fa-envelope'></i> leminhung@gmail.com
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
              <div className='footer_widget product_list clearfix'>
                <h3 className='df_widget_title text-white text-uppercase'>
                  Hot Products
                </h3>
                <ul className='ul_li_block'>
                  <li>
                    <div className='small_product'>
                      <div className='item_image'>
                        <img
                          src='/images/insta-1.jpg'
                          alt='image_not_found'
                          width='100px'
                        />
                      </div>
                      <div className='item_content'>
                        <h3 className='item_title'>
                          <a className='text-white' href='#!'>
                            Island Club Adilette Premium Slides
                          </a>
                        </h3>
                        <span className='item_price'>$140.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='small_product'>
                      <div className='item_image'>
                        <img
                          src='/images/insta-2.jpg'
                          alt='image_not_found'
                          width='100px'
                        />
                      </div>
                      <div className='item_content'>
                        <h3 className='item_title'>
                          <a className='text-white' href='#!'>
                            Adizero Suner Adios Pro 3.0 Shoes
                          </a>
                        </h3>
                        <span className='item_price'>$120.00</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
              <div className='footer_widget product_list clearfix'>
                <h3 className='df_widget_title text-white text-uppercase'>
                  Sale Products
                </h3>
                <ul className='ul_li_block'>
                  <li>
                    <div className='small_product'>
                      <div className='item_image'>
                        <img
                          src='/images/insta-3.jpg'
                          alt='image_not_found'
                          width='100px'
                        />
                      </div>
                      <div className='item_content'>
                        <h3 className='item_title'>
                          <a className='text-white' href='#!'>
                            Forum Low CL x Indigo Herz Shoes
                          </a>
                        </h3>
                        <span className='item_price'>$200.00</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='small_product'>
                      <div className='item_image'>
                        <img
                          src='/images/insta-5.jpg'
                          alt='image_not_found'
                          width='100px'
                        />
                      </div>
                      <div className='item_content'>
                        <h3 className='item_title'>
                          <a className='text-white' href='#!'>
                            Superstar Hero x Indigo Hez Shoes
                          </a>
                        </h3>
                        <span className='item_price'>$230.00</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
              <div className='footer_widget df_newsletter'>
                <h3 className='df_widget_title text-white text-uppercase'>
                  Newsletter
                </h3>
                <p className='mb_30'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ex tortor
                </p>
                <form action='#'>
                  <div className='form_item mb-0'>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email Address'
                    />
                    <button type='submit' className='submit_btn'>
                      <i className='fal fa-paper-plane'></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='footer_bottom clearfix'
        style={{
          backgroundColor: `#1a1a1a`,
        }}
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
              <p className='copyright_text mb-0'>
                @2023 Sports Store{" "}
                <a href='#!' className='author_link text-white'>
                  Ecommerce
                </a>
                .
              </p>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
              <ul className='circle_social_links ul_li_right clearfix'>
                <li>
                  <a href='https://www.facebook.com/leminh.hung.9256'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.facebook.com/leminh.hung.9256'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.facebook.com/leminh.hung.9256'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.facebook.com/leminh.hung.9256'>
                    <i className='fab fa-whatsapp'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
