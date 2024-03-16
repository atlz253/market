export default {
  fetchFail: (statusCode: string) =>
    `Не удалось получить данные с API: ${statusCode}`,
  noProductsInResponse: () =>
    "Возникли проблемы при получении данных о товарах из корзины",
} as const;
