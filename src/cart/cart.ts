import dataGateway from "../dataGateway/dataGateway";
import { Product } from "./types";
import Cache from "../utils/cache";

const getProductsByCartIDCache = new Cache<Product[]>(60000);

export async function getProductsByCartID(id: number): Promise<Product[]> {
  try {
    const cache = getProductsByCartIDCache.get(id.toString());

    if (cache !== undefined) {
      return cache;
    } else {
      const products = await dataGateway.tryGetProductsByCartID(id);

      getProductsByCartIDCache.set(id.toString(), products);

      return products;
    }
  } catch (error) {
    alert(error);
    return [];
  }
}
