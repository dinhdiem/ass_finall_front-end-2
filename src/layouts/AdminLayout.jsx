import React from "react";
import { BsPhone } from "react-icons/bs";
import { BiSearchAlt2, BiCategoryAlt } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/anhhtus-logo 2.png";

type Props = {};

const LayoutAdmin = (props: Props) => {
  return (
    <div className="">
      <header className="bg-[#00B0D7] flex justify-between items-center pr-20 pl-10 w-full">
        <div className="flex items-center space-x-3">
          <NavLink to="/">
            <img src={logo} alt="logo" width={"60px"} />
          </NavLink>
          <span className="text-[#FFFFFF]">Dashboard</span>
        </div>
        <div className="flex items-center relative">
          <div className="absolute left-2">
            <BiSearchAlt2 />
          </div>
          <input type="text" className="w-[533px] h-[34px] rounded-lg px-6" />
        </div>
        <div>
          <span className="text-[18px] font-semibold text-white">
            Xin chào Bùi Tiến Đình
          </span>
        </div>
      </header>
      <div className="flex">
        <div className="flex flex-col justify-between h-screen bg-white border-r w-[250px]">
          <div className="px-4 py-6">
            <nav className="flex flex-col mt-6 space-y-1">
              <NavLink
                to="/admin/products"
                className="flex items-center px-4 py-2 text-gray-500 hover:bg-[#00B0D7] hover:text-white  rounded-lg w-[180px]"
              >
                <div className="text-xl">
                  <BsPhone />
                </div>
                <span className="ml-3 text-sm font-medium">
                  Quẩn lí sản phẩm
                </span>
              </NavLink>
              <NavLink
                to="/admin/categorys"
                className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-[#00B0D7] hover:text-white w-[180px]"
              >
                <div className="text-xl">
                  <BiCategoryAlt />
                </div>

                <span className="ml-3 text-sm font-medium">
                  Quản lí danh mục
                </span>
              </NavLink>
            </nav>
          </div>
        </div>
        <div className="grow bg-gray-100">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
