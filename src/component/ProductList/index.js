import { Pagination, Image } from "antd";
import "antd/dist/antd.css";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "src/component/Header";
import Footer from "src/component/Footer";

import { listProducts } from "src/store/product/product.action";

import Card from "../Card";
import Loading from "../Loading";

const List = memo(({ loading, products, keyword }) => {
  return (
    <div className='row' style={{ paddingTop: "2px" }}>
      {loading ? (
        <Loading />
      ) : products && products.length === 0 ? (
        <div className='no-result'>
          <h2>{`Opps, no result found for your search query`}</h2>
          <Image width={450} src={"/images/not-found.png"} />
        </div>
      ) : (
        products &&
        products.map((product) => (
          <Card
            key={product._id}
            product={product}
            id={product._id}
            countStock={product.countStock}
            rating={product.rating}
            numReviews={product.numReviews}
          />
        ))
      )}
    </div>
  );
});

const ProductList = memo(({ keyword }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [sort, setSort] = useState(undefined);
  const [cate, setCate] = useState(undefined);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const productList = useSelector((state) => state.productList);
  const [totalPage, setTotalPage] = useState(1);

  // Khai báo dữ liệu cho select option lọc
  const [items] = useState([
    { label: "New", value: "" },
    { label: "Prices: Low to High", value: "price" },
    { label: "Prices: High to Low", value: "-price" },
  ]);

  // Init data for category to filter
  const [cateItems] = useState([
    { label: "New Arivals", value: "new_arival" },
    { label: "Adidas sport", value: "adidas_sport" },
    { label: "Adidas summer", value: "adidas_summer" },
    { label: "Dressed", value: "dresse" },
    { label: "Shoes", value: "shoes" },
    { label: "Shirts", value: "shirt" },
    { label: "Bags", value: "bag" },
    { label: "Jacket", value: "jacket" },
  ]);

  // Init data for category to filter
  const [sizeItems] = useState([
    { label: "XS", value: "XS" },
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" },
    { label: "XXL", value: "XXL" },
  ]);

  // Init data for category to filter
  const [colorItems] = useState([
    { label: "Beige", value: "beige", background: "" },
    { label: "Black", value: "black", background: "#222" },
    { label: "Blue", value: "blue", background: "#6e8cd5" },
    { label: "Brown", value: "brown", background: "#f56060" },
    { label: "Green", value: "green", background: "#44c28d" },
    { label: "Gray", value: "gray", background: "#999" },
    { label: "Orange", value: "orange", background: "#f79858" },
    { label: "Purple", value: "purple", background: "#b27ef8" },
    { label: "Red", value: "red", background: "#f56060" },
    { label: "White", value: "white", background: "#fff" },
  ]);

  const dispatch = useDispatch();
  const { loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts({ pageNumber, undefined, sort, cate, color, size }));
  }, [dispatch, pageNumber, sort, cate, color, size]);

  useEffect(() => {
    if (!loading) setTotalPage(productList.total);
  }, [productList.total]);

  return (
    <>
      <Header />
      <div className='container justify-content-center mb-50'>
        <div className='product-container'>
          <div id='sidebar'>
            <h3>CATEGORIES</h3>
            <div class='checklist categories'>
              <ul>
                {cateItems.map((cate) => (
                  <li
                    onClick={() => setCate(cate.value)}
                    className='cate_option'
                  >
                    <span></span>
                    {cate.label}
                  </li>
                ))}
              </ul>
            </div>
            <h3>COLORS</h3>
            <div class='checklist colors'>
              <ul>
                {colorItems.slice(0, 5).map((color) => (
                  <li
                    onClick={() => setColor(color.value)}
                    className='color_option'
                  >
                    <span style={{ background: color.background }}></span>
                    {color.label}
                  </li>
                ))}
              </ul>

              <ul>
                {colorItems.slice(5, 10).map((color) => (
                  <li
                    onClick={() => setColor(color.value)}
                    className='color_option'
                  >
                    {color.background !== "#fff" ? (
                      <span style={{ background: color.background }}></span>
                    ) : (
                      <span
                        style={{
                          background: color.background,
                          border: "1px solid #e8e9eb",
                          width: "15px",
                          height: "15px",
                        }}
                      ></span>
                    )}
                    {color.label}
                  </li>
                ))}
              </ul>
            </div>
            <h3>SIZES</h3>
            <div class='checklist sizes'>
              <ul>
                {sizeItems.slice(0, 3).map((size) => (
                  <li
                    onClick={() => setSize(size.value)}
                    className='color_option'
                  >
                    <span></span>
                    {size.label}
                  </li>
                ))}
              </ul>
              <ul>
                {sizeItems.slice(3, 6).map((size) => (
                  <li
                    onClick={() => setSize(size.value)}
                    className='color_option'
                  >
                    <span></span>
                    {size.label}
                  </li>
                ))}
              </ul>
            </div>
            <h3>PRICE RANGE</h3>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/price-range.png'
              alt=''
            />
          </div>
          <div className='product-right'>
            <h1 className='products-title'>LIST OF PRODUCTS</h1>
            <div className='product-fiters'>
              <label>
                <b>Sort: </b>
              </label>
              <select
                class='sort-by dropdown-fiters'
                onChange={(e) => setSort(e.target.value)}
              >
                {items.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <List loading={loading} products={products} />
            <div className='container text-center pt-5'>
              <Pagination
                current={pageNumber}
                total={totalPage}
                onChange={(value) => setPageNumber(value)}
                pageSize={8}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
});

export default ProductList;
