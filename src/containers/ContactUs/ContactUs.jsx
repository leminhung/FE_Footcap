import React from "react";

import "./ContactUs.css";

const ContactUs = () => {
  return (
    <main>
      <section
        class='breadcrumb_section text-white text-center text-uppercase d-flex align-items-end clearfix bg-fit'
        style={{
          backgroundImage: `url(../assets/images/breadcrumb/bg_01.jpg)`,
        }}
      >
        <div
          class='overlay'
          style={{
            backgroundColor: `#1d1d1d`,
          }}
        ></div>
        <div class='container'>
          <h1 class='page_title text-white'>Contact Us</h1>
          <ul class='breadcrumb_nav ul_li_center clearfix'>
            <li>
              <a href='#!'>Home</a>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>
      <div class='map_section clearfix'>
        <div
          id='mapBox'
          data-lat='40.701083'
          data-lon='-74.1522848'
          data-zoom='12'
          data-info='PO Box CT16122 Collins Street West, Victoria 8007, Australia.'
          data-mlat='40.701083'
          data-mlon='-74.1522848'
        ></div>
      </div>
      <section class='main_contact_section sec_ptb_100 clearfix'>
        <div class='container'>
          <div class='row justify-content-lg-between'>
            <div class='col-lg-5'>
              <div class='main_contact_content'>
                <h3 class='title_text mb_15'>Get In Touch</h3>
                <p class='mb_50'>
                  If you are interested in working with us, please get in touch.
                </p>
                <ul class='main_contact_info ul_li_block clearfix'>
                  <li>
                    <span class='icon'>
                      <i class='fal fa-map-marked-alt'></i>
                    </span>
                    <p class='mb-0'>
                      75 South Park Avenue, Melbourne, Australia
                    </p>
                  </li>
                  <li>
                    <span class='icon'>
                      <i class='fal fa-phone-volume'></i>
                    </span>
                    <p class='mb-0'>8 800 567.890.11 - Central Office</p>
                  </li>
                  <li>
                    <span class='icon'>
                      <i class='fal fa-paper-plane'></i>
                    </span>
                    <p class='mb-0'>Jthemes@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class='col-lg-7'>
              <div class='main_contact_form'>
                <h3 class='title_text mb_30'>FeedBack</h3>
                <form action='#'>
                  <div class='row'>
                    <div class='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                      <div class='form_item'>
                        <input
                          type='text'
                          name='name'
                          placeholder='Your Name'
                        />
                      </div>
                    </div>

                    <div class='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                      <div class='form_item'>
                        <input
                          type='email'
                          name='email'
                          placeholder='Your Email'
                        />
                      </div>
                    </div>

                    <div class='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                      <div class='form_item'>
                        <input
                          type='text'
                          name='subject'
                          placeholder='Subject'
                        />
                      </div>
                    </div>
                  </div>

                  <div class='form_item'>
                    <textarea
                      name='message'
                      placeholder='Your Message'
                    ></textarea>
                  </div>
                  <button
                    type='submit'
                    class='custom_btn bg_default_red text-uppercase'
                  >
                    view projects
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
