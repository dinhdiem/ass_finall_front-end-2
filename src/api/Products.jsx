import instance from "./instance";

export const listProducts = () => {
  const url = `/products`;
  return instance.get(url);
};

export const readProduct = (id: any) => {
  const url = `/products/${id}`;
  return instance.get(url);
};

export const createProduct = (data: any) => {
  const url = `/products`;
  return instance.post(url, data);
};

export const update = (data: any) => {
  const url = `/products/${data.id}`;
  return instance.put(url, data);
};

export const deleteProduct = (id: any) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};

export const getProductByCate = (category: any) => {
  const url = `/product?category=${category}`;
  return instance.get(url);
};
