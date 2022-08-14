import React from "react";
import img from "../assets/images/f1.png";
import img2 from "../assets/images/f2.png";
import img3 from "../assets/images/f3.png";
import img4 from "../assets/images/f4.png";
import img5 from "../assets/images/f5.png";
import img6 from "../assets/images/f6.png";

type Props = {};

const FooterHome = (props: Props) => {
  return (
    <div className="">
      <div className="grid grid-cols-4  text-[13px] gap-6 mt-6 px-[150px]">
        <div>
          <ul>
            <li>Tìm cửa hàng</li>
            <li>Tìm cửa hàng gần nhất</li>
            <li>Mua hàng từ xa</li>
            <li className="text-[#FF0000] text-[12px]">
              Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)
            </li>
            <li>Phương thức thanh toán</li>
            <li className="flex items-center space-x-3 pt-2">
              <img src={img} alt="avt" />
              <img src={img2} alt="avt" />
              <img src={img3} alt="avt" />
              <img src={img4} alt="avt" />
            </li>
            <li className="pt-1">
              <img src={img5} alt="avt" />
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</li>
            <li>Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</li>
            <li>Gọi bảo hành: 1800.2064 (8h00 - 21h00)</li>
            <li>Đối tác dịch vụ bảo hành</li>
            <li>Điện Thoại - Máy tính</li>
            <li>Trung tâm bảo hành uỷ quyền Apple</li>
            <li className="pt-2">
              <img src={img6} alt="avt" />
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Mua hàng và thanh toán Online</li>
            <li>Mua hàng trả góp Online</li>
            <li>Tra thông tin đơn hàng</li>
            <li>Tra điểm Smember</li>
            <li>Tra thông tin bảo hành</li>
            <li>Tra cứu hoá đơn VAT điện tử</li>
            <li>Trung tâm bảo hành chính hãng</li>
            <li>Quy định về việc sao lưu dữ liệu</li>
            <li className="text-[#FF0000]">Dịch vụ bảo hành điện thoại</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Quy chế hoạt động</li>
            <li>Chính sách Bảo hành</li>
            <li>Liên hệ hợp tác kinh doanh</li>
            <li>Khách hàng doanh nghiệp (B2B)</li>
            <li className="text-[#FF0000]">Ưu đãi thanh toán</li>
            <li>Tuyển dụng</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 pt-6 bg-[#F8F8F8] px-[150px] pb-24">
        <div className="grid grid-cols-3 text-[13px] gap-6">
          <div>
            <ul>
              <li className="py-1">
                Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại iPhone
                11
              </li>
              <li className="py-1">
                Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max
              </li>
              <li className="py-1">
                iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ -iPhone 11 cũ
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="py-1">
                Điện thoại iPhone - Điện thoại Samsung -Điện thoại Samsung A
              </li>
              <li className="py-1">
                Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện
                thoại
              </li>
              <li className="py-1">
                Samsung Fold 3 - Samsung S22 - Samsung A73 -Samsung A53
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="py-1">
                Laptop - Laptop HP - Laptop Dell - Laptop Acer
              </li>
              <li className="py-1">
                Microsoft Surface - Laptop Lenovo - Laptop Asus
              </li>
              <li className="py-1">
                Máy tính để bàn - Màn hình máy tính - Camera - Camera hành trình
              </li>
            </ul>
          </div>
        </div>
        <div className="text-[11px] pt-10">
          Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
          0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352
          Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
          Điện thoại: 028.7108.9666.
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
