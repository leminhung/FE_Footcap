import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "src/store/product/product.action";

const FilterSideBar = ({ limit, sort }) => {
  const [category, setCategory] = useState(undefined);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [price, setPrice] = useState({ from: undefined, to: undefined });

  // categories items
  const categories = [
    {
      class: "fas fa-shoe-prints",
      title: "Shoes",
      id: "620d1c5ae5667cdd09ee7e23",
    },
    {
      class: "fal fa-tshirt",
      title: "Clothes",
      id: "620d1c5ac3badda50a46072c",
    },
    { class: "fal fa-watch", title: "Watch", id: "620d1c5ae5667cdd09ee7e23" },
    {
      class: "fal fa-compact-disc",
      title: "Accessories",
      id: "620d1c5ac3badda50a46072c",
    },
    {
      class: "fas fa-suitcase",
      title: "Bag",
      id: "620d1c5ac3badda50a46072c",
    },
  ];

  // prices
  const prices = [
    { name: "fs_price_1", from: 25, to: 100 },
    { name: "fs_price_2", from: 100, to: 200 },
    { name: "fs_price_3", from: 200, to: 300 },
    { name: "fs_price_4", from: 400, to: 500 },
    { name: "fs_price_5", from: 500, to: 1000 },
  ];

  // colors
  const colors = [
    { color: "#ffa037", name: "green" },
    { color: "#6c7ae0", name: "blue" },
    { color: "#f23226", name: "red" },
    { color: "#828664", name: "pink" },
    { color: "#68a3c2", name: "blue" },
    { color: "#009122", name: "green" },
    { color: "#875546", name: "red" },
    { color: "#f74877", name: "pink" },
    { color: "#1f1e29", name: "black" },
    { color: "#dddddd", name: "pink" },
  ];

  // sizes
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const search = useSelector((state) => state.productSearch.search);

  const dispatch = useDispatch();
  useEffect(() => {
    const params = {
      title: search || undefined,
      category,
      color,
      size,
      price: { gte: price.from, lte: price.to },
      page: 1,
      limit,
      sort: sort ? sort : "-sold",
    };
    console.log(size);
    dispatch(listProducts(params));
  }, [dispatch, category, color, size, price, limit, sort, search]);

  return (
    <div class='sidebar-menu-wrapper'>
      <div class='filter_sidebar'>
        <button type='button' class='close_btn mb_50'>
          <i class='fal fa-times'></i>
        </button>

        {/* categories  */}
        <div class='fs_widget fs_category_list'>
          <h3 class='fs_widget_title text-uppercase'>Top Categories</h3>
          <ul class='ul_li_block clearfix'>
            {categories.map((c) => (
              <li onClick={() => setCategory(c.id)}>
                <a href='#!'>
                  <span>
                    <i class={c.class}></i>
                  </span>
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* prices */}
        <div class='fs_widget fs_price_list'>
          <h3 class='fs_widget_title text-uppercase'>Price filter</h3>
          <form action='#'>
            <ul class='ul_li_block clearfix'>
              {prices.map((p) => (
                <li>
                  <input
                    id='fs_price_1'
                    type='radio'
                    name='fs_price_wroup'
                    onClick={() => setPrice({ from: p.from, to: p.to })}
                  />
                  <label for={p.name}>
                    ${p.from} - ${p.to}
                  </label>
                </li>
              ))}
            </ul>
          </form>
        </div>

        {/* color */}
        <div class='fs_widget fs_color_list'>
          <h3 class='fs_widget_title text-uppercase'>Color filter</h3>
          <form action='#'>
            <ul class='ul_li clearfix'>
              {colors.map((color) => (
                <li>
                  <input
                    type='radio'
                    name='fs_color_froup'
                    onClick={() => setColor(color.name)}
                    style={{ backgroundColor: color.color }}
                  />
                </li>
              ))}
            </ul>
          </form>
        </div>

        {/* size */}
        <div class='fs_widget fs_size_list'>
          <h3 class='fs_widget_title text-uppercase'>Size filter</h3>
          <form action='#'>
            <ul class='ul_li clearfix'>
              {sizes.map((size, index) => (
                <li>
                  <label for={`fs_size_${index}`}>
                    <input
                      id={`fs_size_${index}`}
                      type='radio'
                      name='fs_size_group'
                      onClick={() => setSize(size)}
                    />
                    {size}
                  </label>
                </li>
              ))}
            </ul>
          </form>
        </div>

        {/* related posts */}
        <div class='fs_widget fs_realted_post'>
          <h3 class='fs_widget_title text-uppercase'>Your may also like</h3>
          <div class='small_blog'>
            <a href='blog_details.html' class='item_image'>
              <img
                src='/assets/images/recent_post/img_01.jpg'
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
                src='/assets/images/recent_post/img_01.jpg'
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
                src='/assets/images/recent_post/img_01.jpg'
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
