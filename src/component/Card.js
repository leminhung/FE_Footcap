import { useDispatch } from "react-redux";


import "./ProductList/styles.css";

const Card = ({ product, id, countStock, rating, numReviews }) => {
  const dispatch = useDispatch();


  return (
    <div className='col-md-3 product-box' style={{ marginTop: "20px" }}>
      <li className='product-item'>
        <div className='product-card' tabIndex='0'>
          <figure className='card-banner'>
            <img
              src={
                product.images[0]?.path
                  ? product.images[0].path
                  : "/images/products/default_image.jpeg"
              }
              width='312'
              height='350'
              loading='lazy'
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

                <div className='card-action-tooltip' id='card-label-1'>
                  Add to Cart
                </div>
              </li>

              <li className='card-action-item'>
                <button
                  className='card-action-btn'
                  aria-labelledby='card-label-3'
                >
                  <a href={`/product/${product.id}`}>
                    <ion-icon name='eye-outline'></ion-icon>
                  </a>
                </button>
                <div className='card-action-tooltip' id='card-label-3'>
                  Quick View
                </div>
              </li>
            </ul>
          </figure>
          <div className='card-content'>
            <h3 className='h3 card-title'>
              <a href={`/product/${product.id}`}>{product.title}</a>
            </h3>
            <data className='card-price'>
              {Math.round(
                product.price * (100 - product.discount / 100) * 100
              ) / 100}
              đ
            </data>
            <del className='card-del'>{product.price}đ</del>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Card;
