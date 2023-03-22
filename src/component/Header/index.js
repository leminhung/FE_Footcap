import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { listProducts } from "src/store/product/product.action";
import { logOut } from "src/store/user/user.action.js";

import "./styles.scss";

const Header = ({ user }) => {
  const refNavOpenBtn = useRef(null);
  const refNavCloseBtn = useRef(null);
  const refOverlay = useRef(null);
  const refNavbar = useRef(null);
  const refHeader = useRef(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", function () {
      try {
        if (window.scrollY >= 50) {
          refHeader.current.classList.add("active");
        } else {
          refHeader.current.classList.remove("active");
        }
      } catch (err) {
        console.log(err);
      }
    });
  });

  const toggleNavbar = () => {
    try {
      refNavbar.current.classList.toggle("active");
      refOverlay.current.classList.toggle("active");
    } catch (err) {
      console.log(err);
    }
  };

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logOut());
    setTimeout(() => window.location.reload(), 1000);
  };

  const handleSubmit = (key) => {
    if (key === "Enter") {
      dispatch(listProducts({ title }));
    }
  };

  console.log(user?.data);

  return (
    <header className='header' data-header ref={refHeader}>
      <div className='container'>
        <div
          className='overlay'
          data-overlay
          ref={refOverlay}
          onClick={toggleNavbar}
        ></div>
        <Link to='/' className='logo'>
          <img
            src='/images/logo.svg'
            width='160'
            height='45'
            alt='Footcap logo'
          />
        </Link>
        <button
          className='nav-open-btn'
          data-nav-open-btn
          aria-label='Open Menu'
          ref={refNavOpenBtn}
          onClick={toggleNavbar}
        >
          <ion-icon name='menu-outline'></ion-icon>
        </button>
        <nav className='navbar' data-navbar ref={refNavbar}>
          <button
            className='nav-close-btn'
            data-nav-close-btn
            aria-label='Close Menu'
            ref={refNavCloseBtn}
            onClick={toggleNavbar}
          >
            <ion-icon name='close-outline'></ion-icon>
          </button>

          <a href='#' className='logo'>
            <img
              src='/images/logo.svg'
              width='190'
              height='50'
              alt='Footcap logo'
            />
          </a>

          <ul className='navbar-list'>
            <li className='navbar-item'>
              <Link to='/' className='navbar-link'>
                Home
              </Link>
            </li>

            <li className='navbar-item'>
              <a href='#footer-nav' className='navbar-link'>
                About
              </a>
            </li>

            <li className='navbar-item'>
              <Link to='/productlist' className='navbar-link'>
                Products
              </Link>
            </li>

            <li className='navbar-item'>
              <Link to='/productlist' className='navbar-link'>
                Shop
              </Link>
            </li>

            <li className='navbar-item'>
              <a href='#' className='navbar-link'>
                Blog
              </a>
            </li>

            <li className='navbar-item'>
              <a href='#footer-nav' className='navbar-link'>
                Contact
              </a>
            </li>
          </ul>

          <ul className='nav-action-list'>
            {/* <li>
              <button className='nav-action-btn'>
                <ion-icon name='search-outline' aria-hidden='true'></ion-icon>

                <span className='nav-action-text'>Search</span>
              </button>
            </li> */}
            <li className='cntr'>
              <div className='cntr-innr'>
                <label className='search' for='inpt_search'>
                  <ion-icon
                    className='search-outline'
                    name='search-outline'
                    aria-hidden='true'
                  ></ion-icon>
                  <input
                    id='inpt_search'
                    type='text'
                    value={title}
                    onKeyUp={(e) => handleSubmit(e.key)}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
              </div>
            </li>

            <li>
              <button className='nav-action-btn'>
                <ion-icon name='heart-outline' aria-hidden='true'></ion-icon>

                <span className='nav-action-text'>Wishlist</span>

                <data className='nav-action-badge' value='5' aria-hidden='true'>
                  5
                </data>
              </button>
            </li>

            <li>
              <button className='nav-action-btn'>
                <Link
                  to={{
                    pathname: "/cart",
                  }}
                >
                  <ion-icon name='bag-outline' aria-hidden='true'></ion-icon>
                </Link>
                <data className='nav-action-text' value='318.00'>
                  Basket: <strong>$318.00</strong>
                </data>

                <data className='nav-action-badge' value='4' aria-hidden='true'>
                  4
                </data>
              </button>
            </li>
            <li>
              <Link
                className='nav-action-btn dropdown-toggle d-flex align-items-center hidden-arrow'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-mdb-toggle='dropdown'
                aria-expanded='false'
              >
                <ion-icon name='person-outline' aria-hidden='true'></ion-icon>
                <span className='nav-action-text custom_options'>Options</span>
              </Link>
              <ul
                className='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdownMenuLink'
              >
                {user?.data ? (
                  <li>
                    <Link className='dropdown-item' to='/user/dashboard'>
                      My profile
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                <li>
                  <Link className='dropdown-item' to='/signin'>
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/signup'>
                    Sign up
                  </Link>
                </li>
                {user?.data?.token ? (
                  <li onClick={() => signOut()} style={{ cursor: "pointer" }}>
                    <div className='dropdown-item'>Sign out</div>
                  </li>
                ) : (
                  ""
                )}

                {user?.data?.actor?.role === "admin" ? (
                  <li>
                    <Link className='dropdown-item' to='/admin/dashboard'>
                      Admin Dashboard
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
