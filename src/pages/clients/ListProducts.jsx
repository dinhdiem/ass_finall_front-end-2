import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../features/Product/productSlice";
import { useNavigate } from "react-router-dom";
import { getAllCategory } from "../../features/categories/categorySlice";
import { read } from "../../api/category";
import Banner from "../../components/Banner";

const ListProducts = () => {
  const [phone, setPhone] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [tablet, setTablet] = useState([]);
  const [accessory, setAccessory] = useState([]);
  // const categories = useSelector((store) => store.category.value);
  // console.log("category: ", categories);
  // const products = useSelector((store) => store.product.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  useEffect(() => {
    const getPhone = async () => {
      const { data } = await read(`1/products`);
      setPhone(data);
    };
    getPhone();
  }, []);
  useEffect(() => {
    const getLaptop = async () => {
      const { data } = await read(`2/products`);
      setLaptop(data);
    };
    getLaptop();
  }, []);
  useEffect(() => {
    const getTablet = async () => {
      const { data } = await read(`3/products`);
      setTablet(data);
    };
    getTablet();
  }, []);
  useEffect(() => {
    const getAccessory = async () => {
      const { data } = await read(`4/products`);
      setAccessory(data);
    };
    getAccessory();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="mt-3">
      <div className="px-[250px]">
        <Banner />
      </div>
      <div className="mt-10 px-[150px]">
        <div className="mb-10 text-[22px]">ĐIỆN THOẠI</div>
        <div className="grid gap-6 grid-cols-5">
          {phone?.map((item, index) => {
            return (
              <div
                key={index}
                className="col-span-1 text-center cursor-pointer border-2 p-2 shadow-lg rounded-md"
                onClick={() => navigate(`/${item.id}`)}
              >
                <img
                  className="w-full"
                  src={item.img}
                  alt="phone"
                  height={"160px"}
                />
                <h1>{item.name}</h1>
                <div className="py-2">
                  <span className="text-[#D70018]">
                    {new Intl.NumberFormat().format(item.salePrice)} đ
                  </span>
                  <span className="text-[13px] pl-2">
                    {new Intl.NumberFormat().format(item.price)} đ
                  </span>
                </div>
                <p className="bg-[#E5E7EB] px-1 rounded-sm">{item.descShort}</p>
              </div>
            );
          })}
        </div>
        <div className="mb-10 text-[22px] mt-5">LAPTOP</div>
        <div className="grid gap-6 grid-cols-5">
          {laptop?.map((item, index) => {
            return (
              <div
                key={index}
                className="col-span-1 text-center cursor-pointer border-2 p-2 shadow-lg rounded-md"
                onClick={() => navigate(`/${item.id}`)}
              >
                <img
                  className="w-full"
                  src={item.img}
                  alt="phone"
                  height={"160px"}
                />
                <h1>{item.name}</h1>
                <div className="py-2">
                  <span className="text-[#D70018]">
                    {new Intl.NumberFormat().format(item.salePrice)} đ
                  </span>
                  <span className="text-[13px] pl-2">
                    {new Intl.NumberFormat().format(item.price)} đ
                  </span>
                </div>
                <p className="bg-[#E5E7EB] px-1 rounded-sm">{item.descShort}</p>
              </div>
            );
          })}
        </div>
        <div className="mb-10 text-[22px] mt-5">MÁY TÍNH BẢNG</div>
        <div className="grid gap-6 grid-cols-5">
          {tablet?.map((item, index) => {
            return (
              <div
                key={index}
                className="col-span-1 text-center cursor-pointer border-2 p-2 shadow-lg rounded-md"
                onClick={() => navigate(`/${item.id}`)}
              >
                <img
                  className="w-full"
                  src={item.img}
                  alt="phone"
                  height={"160px"}
                />
                <h1>{item.name}</h1>
                <div className="py-2">
                  <span className="text-[#D70018]">
                    {new Intl.NumberFormat().format(item.salePrice)} đ
                  </span>
                  <span className="text-[13px] pl-2">
                    {new Intl.NumberFormat().format(item.price)} đ
                  </span>
                </div>
                <p className="bg-[#E5E7EB] px-1 rounded-sm">{item.descShort}</p>
              </div>
            );
          })}
        </div>
        <div className="mb-10 text-[22px] mt-5">PHỤ KIỆN</div>
        <div className="grid gap-6 grid-cols-5">
          {accessory?.map((item, index) => {
            return (
              <div
                key={index}
                className="col-span-1 text-center cursor-pointer border-2 p-2 shadow-lg rounded-md"
                onClick={() => navigate(`/${item.id}`)}
              >
                <img
                  className="w-full"
                  src={item.img}
                  alt="phone"
                  height={"160px"}
                />
                <h1>{item.name}</h1>
                <div className="py-2">
                  <span className="text-[#D70018]">
                    {new Intl.NumberFormat().format(item.salePrice)} đ
                  </span>
                  <span className="text-[13px] pl-2">
                    {new Intl.NumberFormat().format(item.price)} đ
                  </span>
                </div>
                <p className="bg-[#E5E7EB] px-1 rounded-sm">{item.descShort}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
