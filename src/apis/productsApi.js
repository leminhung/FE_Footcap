import axiosClient from "src/services/api.service";

const productAPI = {
  getListProducts: (params) => {
    const url = "/api/product";
    return axiosClient.get(url, { params });
  },
  getRelated: (params) => {
    const url = "/api/related";
    return axiosClient.get(url, { params });
  },
  getProductById: (id) => {
    const url = `/api/product/${id}`;
    return axiosClient.get(url);
  },
  getListSimilarProducts: (params) => {
    const url = `/api/products/similar/${params}`;
    return axiosClient.get(url, { params });
  },
};
export default productAPI;
