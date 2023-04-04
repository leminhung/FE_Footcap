import React from "react";

const ImageItem = ({ product, index }) => {
  return (
    <img
      src={
        product?.assets?.length > 2
          ? product.assets[index].filename
          : "/images/products/default_image.jpeg"
      }
      alt='image_not_found'
    />
  );
};

export default ImageItem;
