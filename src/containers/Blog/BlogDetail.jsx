import React from "react";

import SideBar from "src/components/SideBar/SideBar";
import HeaderDark from "src/components/Header/HeaderDark";
import BackToTop from "src/components/BackToTop/BackToTop";
import Footer from "src/components/Footer/Footer";

import "./Blog.css";

export default function BlogDetail() {
  return (
    <div>
      <div id='thetop'></div>
      <BackToTop />
      <HeaderDark />
      <main>
        <SideBar />
        <section
          className='breadcrumb_section text-white text-center text-uppercase d-flex align-items-end clearfix bg-fit'
          style={{
            backgroundImage: `url(assets/images/breadcrumb/bg_01.jpg)`,
          }}
        >
          <div
            className='overlay'
            style={{
              backgroundColor: `#1d1d1d`,
            }}
          ></div>
          <div className='container'>
            <h1 className='page_title text-white'>Blog Details</h1>
            <ul className='breadcrumb_nav ul_li_center clearfix'>
              <li>
                <a href='#!'>Home</a>
              </li>
              <li>Blog</li>
              <li>Blog Details</li>
            </ul>
          </div>
        </section>
        <section className='details_section blog_details sec_ptb_140 clearfix'>
          <div className='container'>
            <div className='row justify-content-lg-between'>
              <div className='col-lg-9 col-md-12 col-sm-12 col-xs-12'>
                <div className='details_image mb_30'>
                  <img
                    src='assets/images/blog/main_blog/img_07.jpg'
                    alt='image_not_found'
                  />
                </div>
                <div className='row mb_15 align-items-center justify-content-lg-between'>
                  <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                    <ul className='post_meta ul_li clearfix'>
                      <li>
                        <a className='post_admin' href='#!'>
                          <span className='admin_thumbnail'>
                            <img
                              src='assets/images/meta/img_01.png'
                              alt='image_not_found'
                            />
                          </span>{" "}
                          by Admin
                        </a>
                      </li>
                      <li>May 25, 2020</li>
                      <li>
                        <a href='#!'>Business</a>
                      </li>
                    </ul>
                  </div>

                  <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12'>
                    <ul className='post_meta ul_li_right clearfix'>
                      <li>
                        <a href='#!'>
                          <i className='fas fa-heart'></i> 20
                        </a>
                      </li>
                      <li>
                        <a href='#!'>
                          <i className='fas fa-comment-alt-lines'></i> 9
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 className='item_title mb_30'>Blog Single Left SideBar</h2>
                <p className='mb_30'>
                  Morbi rutrum est quam, nec hendrerit nulla fringilla vitae. In
                  lacinia cursus felis, et fringilla augue sagittis eu. Sed
                  volutpat mattis suscipit. Nulla facilisi. Sed ac porta elit.
                  Sed congue nisi non ipsum tincidunt, nec consectetur ipsum
                  convallis.
                </p>
                <p className='mb_30'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus eget mi sem. Nulla facilisi. Sed ultricies eros a nibh
                  tempus, in sodales mi vestibulum. Nullam quis dui ac nisl
                  ultrices euismod et sit amet urna. Morbi semper sapien quis ex
                  tempor, sit amet scelerisque eros rhoncus. Cras scelerisque
                  auctor gravida. Nunc fermentum luctus rhoncus. Nulla vulputate
                  fermentum convallis. In quis pellentesque tortor. Cras metus
                  nibh, gravida vitae ante vel, finibus semper tellus. Nulla vel
                  tincidunt magna. Morbi tempor velit lectus, eu commodo quam
                  volutpat vitae.
                </p>
                <ul className='dotted_info_list ul_li_block mb_50 clearfix'>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li>
                    Fusce dignissim tortor et elit dapibus cursus. Aenean lorem
                    ligula, egestas et magna
                  </li>
                  <li>Nunc sed vulputate velit quis luctus lectus</li>
                  <li>
                    Aenean lectus mauris, fermentum sed turpis eget, condimentum
                    molestie leo
                  </li>
                  <li>
                    Proin suscipit, justo sit amet tristique ultrices, ex magna
                    efficitur lectus, at rutrum dui ex id nulla
                  </li>
                  <li>Integer in elementum risus. Fusce nec metus leo. </li>
                  <li>
                    Quisque vel pretium neque. Proin hendrerit, ante molestie
                    eleifend mattis, tellus nunc elementum felis
                  </li>
                  <li>
                    Sollicitudin sapien magna quis est. Quisque non vestibulum
                    libero
                  </li>
                </ul>

                <blockquote className='mb_50'>
                  <p className='mb_15'>
                    Cras nec odio facilisis, suscipit sem sit amet, tincidunt
                    turpis. Praesent diam eros, consectetur ac viverra vitae,
                    imperdiet ut est.
                  </p>
                  <h4 className='blockquote_title text-uppercase mb-0'>
                    John Doe, Envato
                  </h4>
                </blockquote>

                <ul className='item_tag_list ul_li clearfix'>
                  <li>
                    <h4 className='list_title text-uppercase mb-0'>Tags:</h4>
                  </li>
                  <li>
                    <a href='#!'>Design</a>
                  </li>
                  <li>
                    <a href='#!'>Theme</a>
                  </li>
                  <li>
                    <a href='#!'>Mobile</a>
                  </li>
                  <li>
                    <a href='#!'>WordPress</a>
                  </li>
                  <li>
                    <a href='#!'>Responsive</a>
                  </li>
                  <li>
                    <a href='#!'>Development</a>
                  </li>
                </ul>

                <div className='post_share_box mb_50' data-bg-color='#da0a2c'>
                  <h4 className='wrap_title text-uppercase text-white'>
                    Share this Article
                  </h4>
                  <ul className='circle_social_links ul_li clearfix'>
                    <li>
                      <a href='#!'>
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#!'>
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#!'>
                        <i className='fab fa-pinterest-p'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#!'>
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#!'>
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='other_post_wrap mb_50'>
                  <a className='other_post' href='#!'>
                    <small className='text-uppercase'>
                      <i className='fal fa-angle-left mr-2'></i> Prev
                    </small>
                    <span>
                      15 Notable Products at Borvo Interior Design Contest
                    </span>
                  </a>
                  <a className='other_post' href='#!'>
                    <small className='text-uppercase'>
                      Next <i className='fal fa-angle-right ml-2'></i>
                    </small>
                    <span>5 Small Studio Apartments With Beautiful Design</span>
                  </a>
                </div>

                <div
                  className='post_author mb_100 clearfix'
                  data-bg-color='#e6e6e6'
                >
                  <div className='author_image'>
                    <img
                      src='assets/images/meta/img_05.png'
                      alt='image_not_found'
                    />
                  </div>
                  <div className='author_info_content'>
                    <h4 className='author_name text-uppercase'>
                      John Doe / <span>About author</span>
                    </h4>
                    <p className='mb-0'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus eget mi sem. Nulla facilisi. Sed ultricies eros a
                      nibh tempus, in sodales mi vestibulum. Nullam quis dui ac
                      nisl ultrices euismod et sit amet urna. Morbi semper
                      sapien quis ex te
                    </p>
                  </div>
                </div>

                {/* <div className='related_post_carousel position-relative mb_100'>
                  <h3 className='title_text text-uppercase mb_30'>
                    Related Articles
                  </h3>
                  <div className='carousel_nav'>
                    <button type='button' className='ss3_left_arrow'>
                      <i className='fal fa-angle-left'></i>
                    </button>
                    <button type='button' className='ss3_right_arrow'>
                      <i className='fal fa-angle-right'></i>
                    </button>
                  </div>
                </div> */}

                <div className='comment_form'>
                  <form action='#'>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='form_item'>
                          <input
                            type='text'
                            name='name'
                            placeholder='Your Name *'
                          />
                        </div>
                      </div>

                      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='form_item'>
                          <input
                            type='email'
                            name='email'
                            placeholder='Email Address *'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='form_item'>
                      <input
                        type='text'
                        name='website'
                        placeholder='Website *'
                      />
                    </div>

                    <div className='form_item'>
                      <textarea
                        name='comment'
                        placeholder='Your Comment *'
                      ></textarea>
                    </div>

                    <button
                      type='submit'
                      className='custom_btn bg_default_red text-uppercase'
                    >
                      Send Now <i className='fal fa-paper-plane ml-2'></i>
                    </button>
                  </form>
                </div>
              </div>

              <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                <aside className='sidebar_section clearfix'>
                  <div className='sb_widget sb_search'>
                    <form action='#'>
                      <div className='form_item mb-0'>
                        <input
                          type='search'
                          name='search'
                          placeholder='Search...'
                        />
                        <button type='submit' className='submit_btn'>
                          <i className='fal fa-search'></i>
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className='sb_widget sb_recent_post'>
                    <h3 className='sb_widget_title'>Recent Posts</h3>
                    <div className='small_blog'>
                      <a href='blog_details.html' className='item_image'>
                        <img
                          src='assets/images/recent_post/img_01.jpg'
                          alt='image_not_found'
                        />
                      </a>
                      <div className='item_content'>
                        <h3 className='item_title'>
                          <a href='blog_details.html'>
                            A Sound Way To Treat Hearing Loss
                          </a>
                        </h3>
                        <span className='post_date'>March 12, 2020</span>
                      </div>
                    </div>

                    <div className='small_blog'>
                      <a href='blog_details.html' className='item_image'>
                        <img
                          src='assets/images/recent_post/img_02.jpg'
                          alt='image_not_found'
                        />
                      </a>
                      <div className='item_content'>
                        <h3 className='item_title'>
                          <a href='blog_details.html'>
                            A Sound Way To Treat Hearing Loss
                          </a>
                        </h3>
                        <span className='post_date'>March 12, 2020</span>
                      </div>
                    </div>

                    <div className='small_blog'>
                      <a href='blog_details.html' className='item_image'>
                        <img
                          src='assets/images/recent_post/img_03.jpg'
                          alt='image_not_found'
                        />
                      </a>
                      <div className='item_content'>
                        <h3 className='item_title'>
                          <a href='blog_details.html'>
                            A Sound Way To Treat Hearing Loss
                          </a>
                        </h3>
                        <span className='post_date'>March 12, 2020</span>
                      </div>
                    </div>

                    <div className='small_blog'>
                      <a href='blog_details.html' className='item_image'>
                        <img
                          src='assets/images/recent_post/img_04.jpg'
                          alt='image_not_found'
                        />
                      </a>
                      <div className='item_content'>
                        <h3 className='item_title'>
                          <a href='blog_details.html'>
                            A Sound Way To Treat Hearing Loss
                          </a>
                        </h3>
                        <span className='post_date'>March 12, 2020</span>
                      </div>
                    </div>

                    <div className='small_blog'>
                      <a href='blog_details.html' className='item_image'>
                        <img
                          src='assets/images/recent_post/img_05.jpg'
                          alt='image_not_found'
                        />
                      </a>
                      <div className='item_content'>
                        <h3 className='item_title'>
                          <a href='blog_details.html'>
                            A Sound Way To Treat Hearing Loss
                          </a>
                        </h3>
                        <span className='post_date'>March 12, 2020</span>
                      </div>
                    </div>
                  </div>

                  <div className='sb_widget sb_instagram'>
                    <h3 className='sb_widget_title'>Instagram</h3>
                    <ul className='zoom-gallery ul_li clearfix'>
                      <li>
                        <a
                          className='popup_image'
                          href='assets/images/instagram/img_48.jpg'
                        >
                          <img
                            src='assets/images/instagram/img_48.jpg'
                            alt='image_not_found'
                          />
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className='popup_image'
                          href='assets/images/instagram/img_49.jpg'
                        >
                          <img
                            src='assets/images/instagram/img_49.jpg'
                            alt='image_not_found'
                          />
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className='popup_image'
                          href='assets/images/instagram/img_50.jpg'
                        >
                          <img
                            src='assets/images/instagram/img_50.jpg'
                            alt='image_not_found'
                          />
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className='popup_image'
                          href='assets/images/instagram/img_51.jpg'
                        >
                          <img
                            src='assets/images/instagram/img_51.jpg'
                            alt='image_not_found'
                          />
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className='popup_image'
                          href='assets/images/instagram/img_52.jpg'
                        >
                          <img
                            src='assets/images/instagram/img_52.jpg'
                            alt='image_not_found'
                          />
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className='popup_image'
                          href='assets/images/instagram/img_53.jpg'
                        >
                          <img
                            src='assets/images/instagram/img_53.jpg'
                            alt='image_not_found'
                          />
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className='sb_widget sb_category'>
                    <h3 className='sb_widget_title'>Category</h3>
                    <ul className='ul_li_block clearfix'>
                      <li>
                        <a href='#!'>
                          Business <span>(161)</span>
                        </a>
                      </li>
                      <li>
                        <a href='#!'>
                          Technology <span>(52)</span>
                        </a>
                      </li>
                      <li>
                        <a href='#!'>
                          Art & Design <span>(120)</span>
                        </a>
                      </li>
                      <li>
                        <a href='#!'>
                          Life Style <span>(35)</span>
                        </a>
                      </li>
                      <li>
                        <a href='#!'>
                          Sport <span>(6)</span>
                        </a>
                      </li>
                      <li>
                        <a href='#!'>
                          Music <span>(2)</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className='sb_widget sb_tags'>
                    <h3 className='sb_widget_title'>Tags</h3>
                    <ul className='ul_li clearfix'>
                      <li>
                        <a href='#!'>Design</a>
                      </li>
                      <li>
                        <a href='#!'>Theme</a>
                      </li>
                      <li>
                        <a href='#!'>Mobile</a>
                      </li>
                      <li>
                        <a href='#!'>WordPress</a>
                      </li>
                      <li>
                        <a href='#!'>Responsive</a>
                      </li>
                      <li>
                        <a href='#!'>Development</a>
                      </li>
                      <li>
                        <a href='#!'>Design</a>
                      </li>
                      <li>
                        <a href='#!'>Theme</a>
                      </li>
                      <li>
                        <a href='#!'>Mobile</a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
