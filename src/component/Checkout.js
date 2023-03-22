
import { ORDER_CART } from "./../constants/cartConstants";
import { Breadcrumb, Button, Input, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import "./../styles/checkout/checkout.scss";
import Footer from "./Footer";
import Header from "./Header";
import ListImage from "./ListImage";
import { useState } from "react";
import axios from "axios";
import ShippingCard from "src/cart/ShippingCard";
export function toVND(x){
    try{
        return  x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
    }catch(err){
        console.log(err);
    }
    
}
const Checkout = () => {

    const productList = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const history = useHistory();
    const [shippingAddress,setShippingAddress] = useState({
        address:"",
        phone:"",
        fullName:"",
    });
    const calcPrice = (pro) => {
        try {
            return pro.price * (100 - pro.discount);
        } catch (err) {
            console.log(err);
            return pro.price;
        }
    }
    const calcTotal = () => {
        let total  =0;
        productList.forEach(val => {
            total +=calcPrice(val);
        });
        return total;
    }

    const handleCheckout = (e) => {
        try {
            
            const requestData={
                email : localStorage.getItem("user_email"),
                total_price:calcTotal(),
                address:shippingAddress.address,
                phone:shippingAddress.phone,
                shippingAddress:{...shippingAddress,country:"Viet Nam" ,city:'Ha noi',postalCode:563,cellPhone:shippingAddress.phone},
                products:JSON.parse( localStorage.getItem("ORDER_CART"))
            }
            console.log("request data",requestData)
           
            axios.post("http://localhost:5000/api/v1/order/create",requestData)
            .then(resp=>{
                console.log("create order",resp);
                toast.success("Đặt hàng thành công");
            })
            .catch(err=>{
                console.log(err);
                toast.error("Có lỗi xẩy ra");
            })
            
           // history.push("/");
           // localStorage.setItem(ORDER_CART, JSON.stringify([]));
        } catch (err) {
            console.log(err);
        }
    }
    const handleInputChange=(e,MODE)=>{
        switch(MODE){
            case "FULL_NAME":
                setShippingAddress((pre)=>{
                    return {
                        ...pre,
                        fullName:e.target.value
                    }
                })
            break;
            case "ADDRESS":
                setShippingAddress((pre)=>{
                    return {
                        ...pre,
                        address:e.target.value
                    }
                })
            break;
            case "PHONE":
                setShippingAddress((pre)=>{
                    return {
                        ...pre,
                        phone:e.target.value
                    }
                })
            break;
        }
    }
    return <>
        <Header></Header>

        <Breadcrumb className="m-breadcrumb">
            <Breadcrumb.Item>
                <a href="/">Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Checkout</a>
            </Breadcrumb.Item>
        </Breadcrumb>
        <div className="checkout-container">

            <div className="address-infor">
                <h2>Thông tin giao hàng</h2>
                <Input value={shippingAddress.fullName} onChange={(e)=>handleInputChange(e,"FULL_NAME")} className="my-input" placeholder="Họ và tên"></Input>
                <Input value={shippingAddress.phone} onChange={(e)=>handleInputChange(e,"PHONE")} className="my-input" placeholder="Số điện thoại"></Input>
                <Input value={shippingAddress.address} onChange={(e)=>handleInputChange(e,"ADDRESS")} className="my-input" placeholder="Địa chỉ"></Input>
                <TextArea rows={4} className="my-input my-textarea" placeholder="Ghi chú"></TextArea>
                <h2>Phương thức giao hàng</h2>
                <div className="mode-of-payment">
                    <div className="my-option">
                        <Radio value={1} checked>
                            Thanh toán khi nhận hàng (COD)</Radio>
                    </div>
                    <div className="description">
                        -  Free ship cho đơn hàng {">"}1 triệu <br />

                        -  Kiểm hàng thoải mái trước khi thanh toán<br />

                        -  Hỗ trợ đổi hàng trong vòng 3 ngày<br />
                    </div>

                </div>
                <a className="back-to-cart" href="/cart">Giỏ hàng</a>
            </div>
            <div className="product-infor">
                {productList.map((product, index) => {

                    return <>
                        <div key={index} className="product-order">
                            <ListImage images={product.images}></ListImage>
                            <div> {product.name}</div>

                            <div>
                                <del>{toVND(product.price)}</del>
                                <span>{toVND( calcPrice(product))}</span>
                            </div>
                        </div>


                    </>
                })}

                <div className="voucher">
                    <Input placeholder="Mã giảm giá"></Input>
                    <Button type="primary" size="lag">Sử dụng</Button>
                </div>
                <div className="ship-fee">
                    <h4>Phí vận chuyển </h4> <h4>_</h4>
                </div>
                <div className="total">
                    <h4>Tổng cộng</h4>
                    <h4>{toVND(calcTotal())}</h4>
                </div>
                <div className="description">
                    shop sẽ xác nhận đơn hàng bằng cách gọi điện thoại. Bạn vui lòng để ý điện thoại khi đặt hàng thành công và chờ nhận hàng. Cảm ơn bạn !
                </div>
                <Button onClick={handleCheckout} type="primary" size="large" className="checkout">Hoàn tất đơn hàng</Button>
            </div>
        </div>
        <Footer></Footer>
    </>

}

export default Checkout;