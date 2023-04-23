import axios from "axios";
import { useSelector } from "react-redux";

const PayButton = ({ cartItems }) => {
  const user = useSelector((state) => state.userLogin?.userInfo?.actor);

  const handleCheckout = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/stripe/create-checkout-session`,
        {
          cartItems,
          userId: user._id,
          discount: 10,
        }
      )
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button
        type='submit'
        class='custom_btn bg_default_red'
        onClick={(e) => handleCheckout(e)}
      >
        PLACE ORDER
      </button>
    </>
  );
};

export default PayButton;
