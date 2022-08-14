import instance from "./instance";

export const listProducts = () => {
  const url = `/products`;
  return instance.get(url);
};

export const readProduct = (id: any) => {
  const url = `/products/${id}`;
  return instance.get(url);
};

export const createPhone = (data: any) => {
  const url = `/products`;
  return instance.post(url, data);
};

export const updatePhone = (data: any) => {
  const url = `/products/${data.id}`;
  return instance.put(url, data);
};

export const deleteProduct = (id: any) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
