import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

import { listProducts } from "src/store/product/product.action";

import "./featuredInfo.scss";

const FeaturedInfo = ({ ordersData }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  // #2 Sales
  const [sales, setSales] = useState("0");
  useEffect(() => {
    const totalSales = ordersData.reduce((total, order) => {
      return total + order.total_price / 100;
    }, 0);

    setSales(totalSales);
  }, [ordersData]);

  // #3 Total products
  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  return (
    <div className='featuredInfoComponent'>
      <div className='item'>
        <span className='title'>Total Order</span>
        <div>
          <span className='money'>{ordersData.length}</span>
          <span className='moneyRate'>
            +12,4 <ArrowUpward className='icon' />
          </span>
        </div>
      </div>

      <div className='item'>
        <span className='title'>Sales</span>
        <div>
          <span className='money'>{sales}</span>
          <span> USD</span>
          <span className='moneyRate'>
            -1,4 <ArrowDownward className='icon negative' />
          </span>
        </div>
      </div>

      <div className='item'>
        <span className='title'>Total product</span>
        <div>
          <span className='money'>{productList.total}</span>
          <span className='moneyRate'>
            -11,4 <ArrowDownward className='icon negative' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
