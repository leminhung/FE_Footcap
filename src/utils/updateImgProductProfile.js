import axios from "axios";
import { toast } from "react-toastify";

const updateImgProfilePicture = async (productId, img_url, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    await axios.put(
      `${process.env.REACT_APP_BASE_URL}/images/${productId}`,
      {
        filename: img_url,
      },
      config
    );
  } catch (error) {
    let msg =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    toast.error(msg);
  }
};

export default updateImgProfilePicture;
