import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const RelateProduct = ({ productTopRated = [{}] }) => {
  let data = productTopRated.map((p) => {
    return {
      product: p.id,
      image: (p.assets && p.assets[0]?.filename) || "/images/product-6.jpg",
      color: p.color,
      price: p.price,
      title: p.title,
      slug: p.slug,
      category: p.category,
    };
  });

  console.log(productTopRated);

  // colors
  const colors = {
    green: "#ffa037",
    blue: "#68a3c2",
    red: "#f23226",
    pink: "#828664",
    black: "#1f1e29",
    brown: "#cc7b4a",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1128,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      {" "}
      <div className='details_description_tab'>
        <ul className='ul_li text-uppercase' role='tablist'>
          <li>
            <a
              className='active font-weight-bold text-dark'
              data-toggle='tab'
              href='#!'
            >
              <h4>Relate products</h4>
            </a>
          </li>
        </ul>
      </div>
      <hr class='mt-0 mb_100' />
      <div class='popular_products arrow_ycenter mt__30'>
        {/* related products */}
        <Slider {...settings}>
          {data.length > 1 &&
            data.map((p) => (
              <div class='col item' key={p.product}>
                <div class='ecommerce_product_grid'>
                  <ul class='product_label ul_li clearfix'>
                    <li class='bg_leafgreen'>New</li>
                  </ul>
                  <div class='tab-content'>
                    <div id='ptab1_1' class='tab-pane fade active'>
                      <div class='item_image'>
                        <img src={p.image} alt='image_not_found' />
                      </div>
                    </div>
                  </div>
                  <div class='item_content'>
                    <h3 class='item_title'>
                      <Link
                        to={{
                          pathname: `/products/${p.slug}`,
                          state: { from: p.product, category: p.category },
                        }}
                      >
                        {p.title}
                      </Link>
                    </h3>
                    <ul class='product_color ul_li nav clearfix'>
                      {p.color.map((c) => (
                        <li>
                          <a
                            style={{ backgroundColor: `${colors[c]}` }}
                            href='#!'
                          >
                            {" "}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <span class='item_price'>
                      <strong>${p.price}</strong> <del>${p.price + 10}</del>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelateProduct;
