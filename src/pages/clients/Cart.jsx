import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import removeItem from "../../assets/images/remove.jpg";
import {
  increase,
  decrease,
  remove,
  reset,
} from "../../features/Cart/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  // console.log(cart.totalAmount);

  const increaseItem = (item) => {
    dispatch(increase(item));
  };
  const decreaseItem = (item) => {
    dispatch(decrease(item));
  };

  const handleDelete = (item) => {
    // eslint-disable-next-line no-restricted-globals
    const check = confirm("Bạn có chắc chắc muốn xóa sản phẩm không?");
    if (check) {
      dispatch(remove(item));
    }
  };

  const clearAll = () => {
    // eslint-disable-next-line no-restricted-globals
    const check = confirm("Bạn có chắc muốn xóa hết sản phẩm không?");
    if (check) {
      dispatch(reset());
      toast.success("Đã xóa tất cả sản phẩm trong giỏ hàng");
    }
  };

  return (
    <div className="mx-[500px] mt-3 mb-16">
      <div className="flex mb-5">
        <NavLink to="/" className="flex items-center mr-[150px]">
          <BiLeftArrowAlt />
          <span className="text-[#D70018] hover:underline">Trở về</span>
        </NavLink>
        <span className="text-[#D70018] text-xl font-bold">Giỏ hàng</span>
      </div>
      {cart.products && cart.products.length !== 0 ? (
        cart.products.map((item, index) => {
          return (
            <div key={index} className="flex border p-3 rounded-lg mb-2">
              <div className="w-[180px] h-[190px]">
                <img
                  src={item?.img}
                  alt="san pham"
                  width={"80%"}
                  height={"95%"}
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h1>{item?.name}</h1>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleDelete(item)}
                  >
                    <img src={removeItem} alt="xoa" />
                  </div>
                </div>
                <div className="py-2">
                  <span className="text-[#D70018]">
                    {new Intl.NumberFormat().format(item?.salePrice)} đ
                  </span>
                  <span className="text-[13px] pl-2">
                    {new Intl.NumberFormat().format(item?.price)} đ
                  </span>
                  <span className="text-[13px] pl-2">
                    Giảm 27%
                    {/* {new Intl.NumberFormat().format(item.price)} đ */}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div>Chọn số lượng: </div>
                  <div className="ml-2 flex items-center w-[90px] justify-between border-2">
                    <div>
                      <IoIosRemove onClick={() => decreaseItem(item)} />
                    </div>
                    <span>{item.amount}</span>
                    <div>
                      <IoIosAdd onClick={() => increaseItem(item)} />
                    </div>
                  </div>
                </div>
                <div className="pt-2 px-1 pb-1 rounded-md bg-[#F6F6F6]">
                  <h1>- Chương trình khuyến mại:</h1>
                  <span>{item?.descShort}</span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center my-5 text-[#D70018] text-xl">
          Bạn chưa có sản phẩm nào trong giỏ hàng
        </div>
      )}
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-[15px]">Tổng tiền tạm tính:</h1>
          <span className="text-[#D70018]">
            {new Intl.NumberFormat().format(cart.total)} đ
          </span>
        </div>
        <div
          className="mt-5 p-1 cursor-pointer text-center rounded border w-[100px] mb-1"
          onClick={() => clearAll()}
        >
          Clear All
        </div>
        <div className="w-full h-[40px] bg-[#D70018] mt-1 flex justify-center items-center uppercase text-white text-[13px] rounded-md cursor-pointer">
          Tiến hành đặt hàng
        </div>
        <div className="w-full h-[40px] bg-[#FFFFFF] mt-1 flex justify-center border border-[#D70018] items-center uppercase text-[#D70018] text-[13px] rounded-md cursor-pointer">
          <a href="/">Chọn thêm sản phẩm khác</a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
