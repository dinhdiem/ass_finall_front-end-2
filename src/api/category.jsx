import instance from "./instance";

export const list = () => {
  const url = `/categories`;
  return instance.get(url);
};

export const read = (id: any) => {
  const url = `/categories/${id}`;
  return instance.get(url);
};

export const create = (data: any) => {
  const url = `/categories`;
  return instance.post(url, data);
};

export const updateCategory = (data: any) => {
  const url = `/categories/${data.id}`;
  return instance.put(url, data);
};

export const remove = (id: any) => {
  const url = `/categories/${id}`;
  return instance.delete(url);
};
