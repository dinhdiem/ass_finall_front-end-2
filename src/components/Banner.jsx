import React from "react";
import banner from "../assets/images/banner.png";
import arrow from "../assets/images/arrow.png";
import phone from "../assets/images/phone.png";
import laptop from "../assets/images/laptop.png";
import tablet from "../assets/images/tablet.png";
import phukien from "../assets/images/phukien.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-[1fr,75%]">
      <div className="px-5">
        <ul>
          <li className="flex items-center cursor-pointer py-2">
            <div>
              <img src={phone} alt="phone" />
            </div>
            <span className="w-[75%] pl-1">Điện thoại</span>
            <div>
              <img src={arrow} alt="phone" />
            </div>
          </li>
          <li className="flex items-center cursor-pointer py-2">
            <div>
              <img src={laptop} alt="phone" />
            </div>
            <span className="w-[75%] pl-1">Laptop</span>
            <div>
              <img src={arrow} alt="phone" />
            </div>
          </li>
          <li className="flex items-center cursor-pointer py-2">
            <div>
              <img src={tablet} alt="phone" />
            </div>
            <span className="w-[75%] pl-1">Máy tính bảng</span>
            <div>
              <img src={arrow} alt="phone" />
            </div>
          </li>
          <li className="flex items-center cursor-pointer py-2">
            <div>
              <img src={phukien} alt="phone" />
            </div>
            <span className="w-[75%] pl-1">Phụ kiện</span>
            <div>
              <img src={arrow} alt="phone" />
            </div>
          </li>
        </ul>
      </div>
      <div>
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
