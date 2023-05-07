function getSum(total, product) {
  return total + product.quantity;
}

exports.checkQuantityBeforeAddToCart = (
  product = {},
  numberOfItemsToAdd = 0,
  cartItems = []
) => {
  const products = cartItems.filter(
    (p) => p.product === product.product || p.product === product._id
  );
  if (products.length === 0) return true;
  console.log(products);

  const totalQuantity = products.reduce(getSum, 0);

  console.log(totalQuantity + numberOfItemsToAdd, product?.available);
  if (totalQuantity + numberOfItemsToAdd > product?.available) {
    return false;
  }
  return true;
};
