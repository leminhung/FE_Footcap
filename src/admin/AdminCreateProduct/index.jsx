import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Publish } from "@mui/icons-material";
import axios from "axios";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import { createProduct } from "src/store/product/product.action";

import "./styles.scss";

const AdminCreateProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [code, setCode] = useState(uuidv4());
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  let [selectedFiles, setSelectedFiles] = useState(
    [...Array(4)].fill(undefined)
  );
  const [isCheckeds, setIsCheckeds] = useState([...Array(10)].fill(false));
  const [isCheckedSizes, setIsCheckedSizes] = useState(
    [...Array(6)].fill(false)
  );

  const imageDefault = "/images/products/default_image.jpeg";

  //load category form the backend
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/categories`)
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let colorsSelected = colors.map((color, index) =>
      isCheckeds[index] ? color.name : undefined
    );

    let sizesSelected = sizes.map((size, index) =>
      isCheckedSizes[index] ? size : undefined
    );

    if (
      !name ||
      !price ||
      !discount ||
      !category ||
      isCheckedSizes.length === 0 ||
      isCheckeds.length === 0 ||
      selectedFiles.length === 0
    ) {
      toast.error("Please fill in fields before creating product!");
    } else {
      const productToCreate = {
        title: name,
        price,
        code,
        size: sizesSelected.filter(Boolean),
        color: colorsSelected.filter(Boolean),
        status: 1,
        discount,
        featured: 1,
        category,
      };
      dispatch(createProduct(productToCreate, selectedFiles));
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    selectedFiles = [];
    for (let file of files) {
      selectedFiles.push(`/images/products/41/${file.name}`);
    }
    setSelectedFiles([...selectedFiles]);
  };

  const handleCheckedColor = (result, index) => {
    isCheckeds[index] = !result;
    setIsCheckeds([...isCheckeds]);
  };

  const handleCheckedSize = (result, index) => {
    isCheckedSizes[index] = !result;
    setIsCheckedSizes([...isCheckedSizes]);
  };

  // colors
  const colors = [
    { color: "#ffa037", name: "green" },
    { color: "#6c7ae0", name: "blue" },
    { color: "#f23226", name: "red" },
    { color: "#828664", name: "pink" },
    { color: "#68a3c2", name: "fountain-blue" },
    { color: "#009122", name: "fun-green" },
    { color: "#875546", name: "spicy-mix" },
    { color: "#f74877", name: "violet-red" },
    { color: "#1f1e29", name: "gray" },
    { color: "#dddddd", name: "alto" },
  ];

  // sizes
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <>
      <div className='newProductPage'>
        <h1>New Product</h1>
        <form>
          <div className='edit'>
            <div className='edit-box'>
              <div className='item'>
                <label>Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  placeholder='Enter product name'
                />
              </div>
              <div className='item'>
                <label>Code</label>
                <input type='text' disabled value={code} />
              </div>
              <div className='item'>
                <label>Price</label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type='text'
                  placeholder='Enter product price'
                />
              </div>
              <div className='item'>
                <label>Discount</label>
                <input
                  onChange={(e) => setDiscount(e.target.value)}
                  type='text'
                  placeholder='Enter product discount'
                />
              </div>
            </div>
            <div className='edit-box'>
              <div className='item fs_size_list'>
                <label className='justify-content-start pl-0'>Size</label>
                <ul class='ul_li clearfix'>
                  {sizes.map((size, index) => (
                    <li>
                      <label for={`fs_size_${index}`}>
                        <input
                          id={`fs_size_${index}`}
                          type='checkbox'
                          name='fs_size_group'
                          onClick={() =>
                            handleCheckedSize(isCheckedSizes[index], index)
                          }
                          checked={isCheckedSizes[index]}
                        />
                        {size}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='item d-flex fs_color_list mb-4'>
                <label>Color</label>
                <ul class='ul_li clearfix ml-2'>
                  {colors.map((color, index) => (
                    <li>
                      <input
                        type='checkbox'
                        name='fs_color_froup'
                        onClick={() =>
                          handleCheckedColor(isCheckeds[index], index)
                        }
                        style={{ backgroundColor: color.color }}
                        checked={isCheckeds[index]}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className='item activeContainer'>
                <label> Category </label>
                <select onChange={(e) => setCategory(e.target.value)}>
                  {categories &&
                    categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.title}
                      </option>
                    ))}
                </select>
              </div>
              <div className='d-flex mt-4'>
                {selectedFiles.map((file) => (
                  <div className='upload'>
                    <label htmlFor='file'>
                      <img
                        src={file ? file : imageDefault}
                        alt='product_not_found'
                      />
                      <Publish className='publish' />
                    </label>
                  </div>
                ))}
                <input
                  type='file'
                  id='file'
                  style={{ display: "none" }}
                  multiple
                  onChange={(e) => handleFileSelect(e)}
                />
              </div>
            </div>
          </div>
          <div className='buttonWrapper'>
            <button
              onClick={handleSubmit}
              type='submit'
              className='btn btn-primary mb-4'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminCreateProduct;
