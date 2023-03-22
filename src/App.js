import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import Header from "src/component/Header";
import Footer from "src/component/Footer";
import Loading from "src/component/Loading";

import { listProducts } from "src/store/product/product.action";

import { Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [categories, setCategories] = useState([]);

  const user = useSelector((state) => state.auth?.user);
  useEffect(() => {
    if (user && user.data?.token) {
      setData(user);
    }
  }, [user]);

  // Get all categories
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/categories`).then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  // Get special product by category
  const [specialProducts, setSpecialProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/categories/620d1c5ae5667cdd09ee7e23/products`
      )
      .then((res) => {
        setSpecialProducts(res.data.data);
      });
  }, []);

  //show product by category
  const [categoryChose, setCategoryChose] = useState("all");
  function handleChoseCategory(e) {
    const categoryItems = document.querySelectorAll(".filter-btn");
    categoryItems.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    setCategoryChose(e.target.getAttribute("data"));
  }

  useEffect(() => {
    let limit = 8;
    if (categoryChose === "all") {
      dispatch(listProducts({ limit }));
    } else {
      let cate = categoryChose;
      dispatch(listProducts({ limit, cate }));
    }
  }, [categoryChose]);
  const productByCategory = useSelector((state) => state.productList);

  const handleIamgeUrl = (val) => {
    try {
      return val.images[0].path;
    } catch (err) {
      console.log(err);
      return "#";
    }
  };
  return (
    <>
      <Header user={data} />
      <main>
        <article>
          <section
            className='section hero'
            style={{ backgroundImage: `url("/images/hero-banner.png")` }}
          >
            <div className='container'>
              <h2 className='h1 hero-title'>
                New Summer <strong>Shoes Collection</strong>
              </h2>

              <p className='hero-text'>
                Competently expedite alternative benefits whereas leading-edge
                catalysts for change. Globally leverage existing an expanded
                array of leadership.
              </p>

              <Link
                to='/productlist'
                className='btn btn-primary custom-btn btn-shop-now'
              >
                <span>Shop Now</span>

                <ion-icon
                  name='arrow-forward-outline'
                  aria-hidden='true'
                ></ion-icon>
              </Link>
            </div>
          </section>

          {/* - #COLLECTION */}

          <section className='section collection'>
            <div className='container'>
              <ul className='collection-list has-scrollbar'>
                {categories.map((category, index) => {
                  return (
                    <li key={index}>
                      <div
                        className='collection-card'
                        style={{
                          backgroundImage: `url(${category.thumbnail})`,
                        }}
                      >
                        <h3 className='h4 card-title'>
                          {category.title} collections
                        </h3>

                        <Link to='/productlist' className='btn btn-secondary'>
                          <span>Explore All</span>

                          <ion-icon
                            name='arrow-forward-outline'
                            aria-hidden='true'
                          ></ion-icon>
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          {/* - #PRODUCT */}

          <section className='section product'>
            <div className='container'>
              <h2 className='h2 section-title'>Outstanding Products</h2>

              <ul className='filter-list'>
                <li>
                  <button
                    data='all'
                    onClick={handleChoseCategory}
                    className='filter-btn active'
                  >
                    All
                  </button>
                </li>

                {categories.map((category, index) => {
                  return (
                    <li key={index}>
                      <button
                        data={category._id}
                        onClick={handleChoseCategory}
                        className='filter-btn'
                      >
                        {category.title}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <ul className='product-list'>
                {productByCategory.loading ? (
                  <Loading />
                ) : (
                  productByCategory.products.map((productByCate, index) => {
                    return (
                      <li key={index} className='product-item'>
                        <div className='product-card' tabIndex='0'>
                          <figure className='card-banner'>
                            <img
                              src={handleIamgeUrl(productByCate)}
                              loading='lazy'
                              alt={productByCate.title}
                              className='image-contain'
                            />
                            <div className='card-badge'>
                              - {productByCate.discount}%
                            </div>

                            <ul className='card-action-list'>
                              {/* <li className='card-action-item'>
                                <button
                                  className='card-action-btn'
                                  aria-labelledby='card-label-1'
                                >
                                  <ion-icon name='cart-outline'></ion-icon>
                                </button>

                                <div
                                  className='card-action-tooltip'
                                  id='card-label-1'
                                >
                                  Add to Cart
                                </div>
                              </li> */}

                              <li className='card-action-item'>
                                <button
                                  className='card-action-btn'
                                  aria-labelledby='card-label-2'
                                >
                                  <ion-icon name='heart-outline'></ion-icon>
                                </button>

                                <div
                                  className='card-action-tooltip'
                                  id='card-label-2'
                                >
                                  Add to Whishlist
                                </div>
                              </li>

                              <li className='card-action-item'>
                                <button
                                  className='card-action-btn'
                                  aria-labelledby='card-label-3'
                                >
                                  <ion-icon name='eye-outline'></ion-icon>
                                </button>

                                <div
                                  className='card-action-tooltip'
                                  id='card-label-3'
                                >
                                  Quick View
                                </div>
                              </li>

                              {/* <li className='card-action-item'>
                                <button
                                  className='card-action-btn'
                                  aria-labelledby='card-label-4'
                                >
                                  <ion-icon name='repeat-outline'></ion-icon>
                                </button>

                                <div
                                  className='card-action-tooltip'
                                  id='card-label-4'
                                >
                                  Compare
                                </div>
                              </li> */}
                            </ul>
                          </figure>

                          <div className='card-content'>
                            {/* <div className='card-cat'>
                              <a href='#' className='card-cat-link'>
                                Men
                              </a>{" "}
                              /
                              <a href='#' className='card-cat-link'>
                                Women
                              </a>
                            </div> */}

                            <h3 className='h3 card-title'>
                              <Link to={`/product/${productByCate.id}`}>
                                {productByCate.title}
                              </Link>
                            </h3>

                            <data className='card-price' value='180.85'>
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(productByCate.price)}
                            </data>
                          </div>
                        </div>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </section>

          {/* - #CTA */}
          <section className='section cta'>
            <div className='container'>
              <ul className='cta-list'>
                <li>
                  <div
                    className='cta-card'
                    style={{ backgroundImage: `url("/images/cta-1.jpg")` }}
                  >
                    <p className='card-subtitle'>Adidas Shoes</p>

                    <h3 className='h2 card-title'>The Summer Sale Off 50%</h3>

                    <Link
                      to='/productlist'
                      className='btn btn-link custom-link'
                    >
                      <span>Shop Now</span>

                      <ion-icon
                        name='arrow-forward-outline'
                        aria-hidden='true'
                      ></ion-icon>
                    </Link>
                  </div>
                </li>

                <li>
                  <div
                    className='cta-card'
                    style={{ backgroundImage: `url("/images/cta-2.jpg")` }}
                  >
                    <p className='card-subtitle'>Nike Shoes</p>

                    <h3 className='h2 card-title'>
                      Makes Yourself Keep Sporty
                    </h3>

                    <a href='#' className='btn btn-link custom-link'>
                      <span>Shop Now</span>

                      <ion-icon
                        name='arrow-forward-outline'
                        aria-hidden='true'
                      ></ion-icon>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* - #SPECIAL */}

          <section className='section special'>
            <div className='container'>
              <div
                className='special-banner'
                style={{ backgroundImage: `url("/images/special-banner.jpg")` }}
              >
                <h2 className='h3 banner-title'>New Trend Edition</h2>

                <Link to='/productlist' className='btn btn-link custom-link'>
                  <span>Explore All</span>

                  <ion-icon
                    name='arrow-forward-outline'
                    aria-hidden='true'
                  ></ion-icon>
                </Link>
              </div>

              <div className='special-product'>
                <h2 className='h2 section-title'>
                  <span className='text'>Nike Special</span>

                  <span className='line'></span>
                </h2>

                <ul className='has-scrollbar'>
                  {specialProducts.map((specialProduct) => {
                    return (
                      <li className='product-item'>
                        <div className='product-card' tabIndex='0'>
                          <figure className='card-banner'>
                            <img
                              src={specialProduct?.images[0]?.path}
                              width='312'
                              height='350'
                              loading='lazy'
                              alt={specialProduct.title}
                              className='image-contain'
                            />

                            <div className='card-badge'>
                              - {specialProduct.discount}%
                            </div>

                            <ul className='card-action-list'>
                              <li className='card-action-item'>
                                <button
                                  className='card-action-btn'
                                  aria-labelledby='card-label-1'
                                >
                                  <ion-icon name='cart-outline'></ion-icon>
                                </button>

                                <div
                                  className='card-action-tooltip'
                                  id='card-label-1'
                                >
                                  Add to Cart
                                </div>
                              </li>

                              <li className='card-action-item'>
                                <button
                                  className='card-action-btn'
                                  aria-labelledby='card-label-2'
                                >
                                  <ion-icon name='heart-outline'></ion-icon>
                                </button>

                                <div
                                  className='card-action-tooltip'
                                  id='card-label-2'
                                >
                                  Add to Whishlist
                                </div>
                              </li>

                              <li className='card-action-item'>
                                <button
                                  className='card-action-btn'
                                  aria-labelledby='card-label-3'
                                >
                                  <ion-icon name='eye-outline'></ion-icon>
                                </button>

                                <div
                                  className='card-action-tooltip'
                                  id='card-label-3'
                                >
                                  Quick View
                                </div>
                              </li>

                              {/* <li className='card-action-item'>
                                <button
                                  className='card-action-btn'
                                  aria-labelledby='card-label-4'
                                >
                                  <ion-icon name='repeat-outline'></ion-icon>
                                </button>

                                <div
                                  className='card-action-tooltip'
                                  id='card-label-4'
                                >
                                  Compare
                                </div>
                              </li> */}
                            </ul>
                          </figure>

                          <div className='card-content'>
                            {/* <div className='card-cat'>
                                <a href='#' className='card-cat-link'>
                                  Men
                                </a>{" "}
                                /
                                <a href='#' className='card-cat-link'>
                                  Women
                                </a>
                              </div> */}

                            <h3 className='h3 card-title'>
                              <Link to='#'>{specialProduct.title}</Link>
                            </h3>
                            <h3 className='h3 card-title'>
                              <Link to={`/product/${specialProduct.id}`}>
                                {specialProduct.title}
                              </Link>
                            </h3>

                            <data className='card-price' value='180.85'>
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(specialProduct.price)}
                            </data>
                          </div>
                        </div>
                      </li>
                    );
                  })}

                  {/* <li className='product-item'>
                    <div className='product-card' tabIndex='0'>
                      <figure className='card-banner'>
                        <img
                          src='/images/product-2.jpg'
                          width='312'
                          height='350'
                          loading='lazy'
                          alt='Leather Mens Slipper'
                          className='image-contain'
                        />

                        <ul className='card-action-list'>
                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-1'
                            >
                              <ion-icon name='cart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-1'
                            >
                              Add to Cart
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-2'
                            >
                              <ion-icon name='heart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-2'
                            >
                              Add to Whishlist
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-3'
                            >
                              <ion-icon name='eye-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-3'
                            >
                              Quick View
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-4'
                            >
                              <ion-icon name='repeat-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-4'
                            >
                              Compare
                            </div>
                          </li>
                        </ul>
                      </figure>

                      <div className='card-content'>
                        <div className='card-cat'>
                          <a href='#' className='card-cat-link'>
                            Men
                          </a>{" "}
                          /
                          <a href='#' className='card-cat-link'>
                            Sports
                          </a>
                        </div>

                        <h3 className='h3 card-title'>
                          <a href='#'>Leather Mens Slipper</a>
                        </h3>

                        <data className='card-price' value='190.85'>
                          $190.85
                        </data>
                      </div>
                    </div>
                  </li>

                  <li className='product-item'>
                    <div className='product-card' tabIndex='0'>
                      <figure className='card-banner'>
                        <img
                          src='/images/product-3.jpg'
                          width='312'
                          height='350'
                          loading='lazy'
                          alt='Simple Fabric Shoe'
                          className='image-contain'
                        />

                        <div className='card-badge'>New</div>

                        <ul className='card-action-list'>
                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-1'
                            >
                              <ion-icon name='cart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-1'
                            >
                              Add to Cart
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-2'
                            >
                              <ion-icon name='heart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-2'
                            >
                              Add to Whishlist
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-3'
                            >
                              <ion-icon name='eye-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-3'
                            >
                              Quick View
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-4'
                            >
                              <ion-icon name='repeat-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-4'
                            >
                              Compare
                            </div>
                          </li>
                        </ul>
                      </figure>

                      <div className='card-content'>
                        <div className='card-cat'>
                          <a href='#' className='card-cat-link'>
                            Men
                          </a>{" "}
                          /
                          <a href='#' className='card-cat-link'>
                            Women
                          </a>
                        </div>

                        <h3 className='h3 card-title'>
                          <a href='#'>Simple Fabric Shoe</a>
                        </h3>

                        <data className='card-price' value='160.85'>
                          $160.85
                        </data>
                      </div>
                    </div>
                  </li>

                  <li className='product-item'>
                    <div className='product-card' tabIndex='0'>
                      <figure className='card-banner'>
                        <img
                          src='/images/product-4.jpg'
                          width='312'
                          height='350'
                          loading='lazy'
                          alt='Air Jordan 7 Retro '
                          className='image-contain'
                        />

                        <div className='card-badge'>-25%</div>

                        <ul className='card-action-list'>
                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-1'
                            >
                              <ion-icon name='cart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-1'
                            >
                              Add to Cart
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-2'
                            >
                              <ion-icon name='heart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-2'
                            >
                              Add to Whishlist
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-3'
                            >
                              <ion-icon name='eye-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-3'
                            >
                              Quick View
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-4'
                            >
                              <ion-icon name='repeat-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-4'
                            >
                              Compare
                            </div>
                          </li>
                        </ul>
                      </figure>

                      <div className='card-content'>
                        <div className='card-cat'>
                          <a href='#' className='card-cat-link'>
                            Men
                          </a>{" "}
                          /
                          <a href='#' className='card-cat-link'>
                            Sports
                          </a>
                        </div>

                        <h3 className='h3 card-title'>
                          <a href='#'>Air Jordan 7 Retro </a>
                        </h3>

                        <data className='card-price' value='170.85'>
                          $170.85 <del>$200.21</del>
                        </data>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </section>

          {/* - #SERVICE */}

          <section className='section service'>
            <div className='container'>
              <ul className='service-list'>
                <li className='service-item'>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <img
                        src='/images/service-1.png'
                        width='53'
                        height='28'
                        loading='lazy'
                        alt='Service icon'
                      />
                    </div>

                    <div>
                      <h3 className='h4 card-title'>Free Shiping</h3>

                      <p className='card-text'>
                        All orders over <span>$150</span>
                      </p>
                    </div>
                  </div>
                </li>

                <li className='service-item'>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <img
                        src='/images/service-2.png'
                        width='43'
                        height='35'
                        loading='lazy'
                        alt='Service icon'
                      />
                    </div>

                    <div>
                      <h3 className='h4 card-title'>Quick Payment</h3>

                      <p className='card-text'>100% secure payment</p>
                    </div>
                  </div>
                </li>

                <li className='service-item'>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <img
                        src='/images/service-3.png'
                        width='40'
                        height='40'
                        loading='lazy'
                        alt='Service icon'
                      />
                    </div>

                    <div>
                      <h3 className='h4 card-title'>Free Returns</h3>

                      <p className='card-text'>Money back in 30 days</p>
                    </div>
                  </div>
                </li>

                <li className='service-item'>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <img
                        src='/images/service-4.png'
                        width='40'
                        height='40'
                        loading='lazy'
                        alt='Service icon'
                      />
                    </div>

                    <div>
                      <h3 className='h4 card-title'>24/7 Support</h3>

                      <p className='card-text'>Get Quick Support</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* - #INSTA POST */}

          <section className='section insta-post'>
            <ul className='insta-post-list has-scrollbar'>
              <li className='insta-post-item'>
                <img
                  src='/images/insta-1.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-2.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-3.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-4.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-5.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-6.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-7.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-8.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default App;
