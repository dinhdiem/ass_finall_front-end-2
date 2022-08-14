import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readProduct } from "../../api/Products";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addProduct } from "../../features/Cart/cartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [category, setCategory] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await readProduct(id);
      setProduct(data);
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    const readCategory = async () => {
      const res = await axios.get(
        `http://localhost:3001/categories/${product.categoryId}/products?_page=1&_limit=5`
      );
      setCategory(res.data);
    };
    readCategory();
  }, [product]);

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
      })
    );
  };

  const test = category.filter((item) => item.id !== product.categoryId);
  return (
    <div className="mx-40 mt-5">
      <div className="text-[22px] mb-10">{product?.name}</div>
      <div className="flex">
        <div className="w-[30%]">
          <img src={product.img} alt="phone" />
        </div>
        <div className="w-[70%] pl-14">
          <div className="py-2">
            <span className="text-[#D70018] text-[20px]">
              {new Intl.NumberFormat().format(product?.salePrice)} đ
            </span>
            <span className="text-[15px] text-[#707070] pl-2 line-through">
              {new Intl.NumberFormat().format(product?.price)} đ
            </span>
          </div>
          <p>{product?.descLong}</p>
          <div className="flex space-x-4 mt-[190px]">
            <div className="bg-[#FF3945] w-[180px] text-center py-2 rounded-md text-white cursor-pointer">
              <button className="text-14px">Mua ngay</button>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="text-2xl text-red-600 border-red-600 border-2 p-2 cursor-pointer"
                onClick={handleClick}
              >
                <AiOutlineShoppingCart />
              </div>
              <div>
                Thêm vào <br /> Giỏ hàng
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 mt-14 text-2xl">Sản phẩm cùng loại</div>
      <div className="grid gap-6 grid-cols-5">
        {test?.map((item, index) => {
          return (
            <a key={index} href={item.id}>
              <div className="col-span-1 text-center cursor-pointer border-2 p-2 shadow-lg rounded-md">
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
            </a>
          );
        })}
      </div>
      <div className="mt-5 bg-[#F2F2F2] p-2">
        <h1 className="text-red-600 text-[18px] text-center">
          ĐẶC ĐIỂM NỔI BẬT
        </h1>
        <div>{product.highlight}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
