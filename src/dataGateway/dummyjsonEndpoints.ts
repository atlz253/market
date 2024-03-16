const baseURL: string = "https://dummyjson.com";

export default {
  cartByID: (id: number) => baseURL + "/carts/" + id,
} as const;
