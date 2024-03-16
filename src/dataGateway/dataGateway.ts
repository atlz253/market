import { Product } from "../cart/types";
import { default as endpoints } from "./dummyjsonEndpoints";
import errorMessages from "./errorMessages";
import { CartFetchResponse } from "./fetchResponse";
import Fetcher from "./fetcher";

class dataGateway {
  public static async tryGetProductsByCartID(id: number): Promise<Product[]> {
    const response = await Fetcher.tryGet<Partial<CartFetchResponse>>(
      endpoints.cartByID(id)
    );

    if (response.message !== undefined) {
      throw new Error(response.message);
    } else if (response.products !== undefined) {
      return response.products;
    } else {
      throw new Error(errorMessages.noProductsInResponse());
    }
  }
}

export default dataGateway;
