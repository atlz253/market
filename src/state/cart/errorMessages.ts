export default {
  productWIthIDNotFound: (id: number) =>
    `В корзине отсутствует товар с ID ${id}`,
} as const;
