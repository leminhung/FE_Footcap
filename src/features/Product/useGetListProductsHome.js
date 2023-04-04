import { useQuery } from "react-query";
import productsApi from "src/apis/productsApi";
import { productKeys } from "src/features/Product/queryKeys";

export function useGetListProductsHome(param) {
  const getListProductsHome = async (param) => {
    return await productsApi.getListProducts(param);
  };
  return useQuery(productKeys.list(param), () => getListProductsHome(param), {
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}
