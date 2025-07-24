export const productList = [
  {
    id: 1,
    name: "Product-1",
  },
  {
    id: 2,
    name: "Product-2",
  },
  {
    id: 3,
    name: "Product-3",
  },
  {
    id: 4,
    name: "Product-4",
  },
  {
    id: 5,
    name: "Product-5",
  },
];

export const getProductList = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  return productList;
};

export const addNewProduct = async (productName) => {
  await new Promise((res) => setTimeout(res, 1000));
  const newlyProduct = { id: productList.length + 1, name: productName };
  productList.push(newlyProduct);
};
