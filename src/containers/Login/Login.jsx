import React from "react";

import SideBar from "src/components/SideBar/SideBar";
import HeaderDark from "src/components/Header/HeaderDark";
import BackToTop from "src/components/BackToTop/BackToTop";
import Footer from "src/components/Footer/Footer";

import "./Login.css";

export default function Login() {
  return (
    <div>
      <div id='thetop'></div>
      <BackToTop />
      <HeaderDark />
      <main>
        <SideBar />
        <section
          class='breadcrumb_section text-white text-center text-uppercase d-flex align-items-end clearfix bg-fit'
          style={{
            backgroundImage: `url(assets/images/breadcrumb/bg_01.jpg)`,
          }}
        >
          <div
            class='overlay'
            style={{
              backgroundColor: `#1d1d1d`,
            }}
          ></div>
          <div class='container'>
            <h1 class='page_title text-white'>Login Page</h1>
            <ul class='breadcrumb_nav ul_li_center clearfix'>
              <li>
                <a href='#!'>Home</a>
              </li>
              <li>Pages</li>
              <li>Login</li>
            </ul>
          </div>
        </section>
        <section
          class='register_section sec_ptb_140 has_overlay parallaxie clearfix bg-fit bg-fit-signin'
          style={{
            backgroundImage: `url(assets/images/backgrounds/bg_22.jpg)`,
          }}
        >
          <div class='overlay' data-bg-color='rgba(55, 55, 55, 0.75)'></div>
          <div class='container'>
            <div
              class='reg_form_wrap login_form'
              style={{
                backgroundImage: `url(assets/images/reg_bg_01.png)`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <form action='#'>
                <div class='reg_form'>
                  <h2 class='form_title text-uppercase text-center'>Login</h2>
                  <div class='form_item'>
                    <input
                      id='username_input'
                      type='text'
                      name='username'
                      placeholder='username'
                    />
                    <label for='username_input'>
                      <i class='fal fa-user'></i>
                    </label>
                  </div>
                  <div class='form_item'>
                    <input
                      id='password_input'
                      type='password'
                      name='password'
                      placeholder='password'
                    />
                    <label for='password_input'>
                      <i class='fal fa-unlock-alt'></i>
                    </label>
                  </div>
                  <a class='forget_pass text-uppercase mb_30' href='#!'>
                    Forgot password?
                  </a>
                  <button
                    type='submit'
                    class='custom_btn bg_default_red text-uppercase mb_50'
                  >
                    Login
                  </button>

                  <div class='social_wrap mb_100'>
                    <h4 class='small_title_text mb_15 text-center text-uppercase'>
                      Or Login With
                    </h4>
                    <ul class='circle_social_links ul_li_center clearfix'>
                      <li>
                        <a
                          style={{
                            backgroundColor: `#3b5998`,
                          }}
                          href='#!'
                        >
                          <i class='fab fa-facebook-f'></i>
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            backgroundColor: `#1da1f2`,
                          }}
                          href='#!'
                        >
                          <i class='fab fa-twitter'></i>
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            backgroundColor: `#ea4335`,
                          }}
                          href='#!'
                        >
                          <i class='fab fa-google-plus-g'></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class='create_account text-center'>
                    <h4 class='small_title_text text-center text-uppercase'>
                      Have not account yet?
                    </h4>
                    <a class='create_account_btn text-uppercase' href='#!'>
                      Sign Up
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
