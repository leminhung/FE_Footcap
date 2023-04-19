import './featuredInfo.scss'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import axios from "axios";


import { listProducts } from "src/store/product/product.action";



const FeaturedInfo = ({ ordersData }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList)
  const userToken = JSON.parse(localStorage.getItem("jwt"))?.token;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  };



  // #1 Total orders 
  // #2 Sales
  const [sales, setSales] = useState("0")

  useEffect(() => {
    const totalSales = ordersData.reduce((total, order) => {
      return total + order.total_price
    }, 0)

    setSales(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalSales))

  }, [ordersData])

  // useEffect(() => {

  //   axios
  //     .get(`http://localhost:5000/api/v1/order`, { headers: headers })
  //     .then((res) => {
  //       setOrdersData(res.data.data);
  //     })
  //     .catch((error) => {
  //       console.log("error order", error.response.data.error);
  //     });

  // }, [])



  // #3 Total products
  useEffect(() => {
    dispatch(listProducts());
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
        {/* <span className='sub'>Compared to last month</span> */}
      </div>

      <div className='item'>
        <span className='title'>Sales</span>
        <div>
          <span className='money'>{sales}</span>
          <span> VNĐ</span>
          <span className='moneyRate'>
            -1,4 <ArrowDownward className='icon negative' />
          </span>
        </div>
        {/* <span className='sub'>Compared to last month</span> */}
      </div>

      <div className='item'>
        <span className='title'>Total product</span>
        <div>
          <span className='money'>{productList.total}</span>
          <span className='moneyRate'>
            -11,4 <ArrowDownward className='icon negative' />
          </span>
        </div>
        {/* <span className='sub'>Compared to last month</span> */}
      </div>




    </div>
  )
}

export default FeaturedInfo