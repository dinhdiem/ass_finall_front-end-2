import React, { useEffect, useState } from "react";
import add from "../../../assets/images/Icon.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { PhoneType } from "../../../types/ProductType";
import { BiChevronDown } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { readProduct } from "../../../api/Products";
import { CategorType } from "../../../types/CategoryType";
import styled from "styled-components";
import { toast } from "react-toastify";
import { list } from "../../../api/category";

type Props = {
  onUpdate: (data: PhoneType) => void,
  categors: CategorType[],
};

type FormInput = {
  name: string,
  img: string,
  descShort: string,
  descLong: string,
  price: number,
  salePrice?: number,
  highlight?: string,
  categoryId: number,
};
const EditPhone = ({ onUpdate, categors }: Props) => {
  const [loadImg, setLoading] = useState("");
  const { id } = useParams();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const getPhone = async () => {
      const { data } = await readProduct(id);
      setLoading(data.img);
      console.log(data);

      reset(data);
    };
    getPhone();
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await list();
      reset(data);
    };
    getCategory();
  }, []);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    onUpdate(data);
    navigate(-1);
    toast.success("Cập nhật sản phẩm thành công");
  };

  const HiddenDiv = styled.div`
    display: ${loadImg ? "none" : "block"};
  `;
  const HiddenSpan = styled.span`
    display: ${loadImg ? "none" : "block"};
  `;

  return (
    <div className="mx-auto px-5 pt-8 mb-10">
      <div className="title-page">
        <h1 className="text-2xl font-poppins">Cập nhật Sản phẩm</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="w-[375px] mr-3 mt-11">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl border-b">
              <div className="md:flex">
                <div className="w-full bg-[#FFFFFF]">
                  <div className="relative rounded-lg flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        <HiddenDiv className="block text-gray-400 font-normal">
                          <img src={add} alt="" />
                        </HiddenDiv>
                      </div>
                    </div>
                    <div className="absolute top-[58%]">
                      <div className="flex flex-col items-center">
                        <HiddenSpan className="block text-gray-400 font-normal text-[20px]">
                          Thêm ảnh
                        </HiddenSpan>
                      </div>
                    </div>
                    <input type="file" className="h-[259px] w-full " name="" />
                    {loadImg && (
                      <img
                        src={loadImg}
                        className="h-[259px] w-full"
                        alt="anh"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <form className="w-full max-w-sm bg-white">
              <div className="border-b border-[#E1E5EB] py-2">
                <label
                  className="block tracking-wide text-gray-700 text-xs mb-2 ml-[9px] bg-white"
                  htmlFor="grid-first-name"
                >
                  Mô tả ngắn:
                </label>
                <input
                  {...register("descShort", { required: true })}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  aria-label="Full name"
                />
                {errors.descShort && (
                  <span className="text-red-700 mt-1 pl-1">
                    Bạn chưa nhập mô tả ngắn
                  </span>
                )}
              </div>
            </form>
          </div>
          <div className="content-add w-full">
            <span className="w-full border-b-2 block pb-5">
              Thông tin sản phẩm
            </span>
            <div className="mt-5 mr-3">
              <div className="mb-5">
                <label className="block text-[13px] pb-2">Tên sản phẩm</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="w-full h-8 px-2 rounded-sm"
                  placeholder="Nhập tên điện thoại"
                />
                {errors.name && (
                  <span className="text-red-700 mt-1">
                    Bạn chưa điền tên sản phẩm
                  </span>
                )}
              </div>
              <div className="flex w-full">
                <div className="w-[50%] mr-1">
                  <label htmlFor="" className="block text-[13px] pb-2">
                    Giá gốc
                  </label>
                  <input
                    type="number"
                    className="px-2 w-full h-8 rounded-sm"
                    {...register("price", { required: true })}
                  />
                  {errors.price && (
                    <span className="text-red-700 mt-1">
                      Bạn phải điền giá sản phẩm
                    </span>
                  )}
                </div>
                <div className="w-[50%] ml-1">
                  <label htmlFor="" className="block text-[13px] pb-2">
                    Giá khuyến mãi
                  </label>
                  <input
                    type="number"
                    className="saleOffPrice px-2 w-full h-8 rounded-sm"
                    {...register("salePrice")}
                  />
                </div>
              </div>
              <div className="mt-5">
                <span className="pb-1 inline-block">Danh mục sản phẩm</span>
                <br />
                <div className="inline-block relative w-[437px]">
                  <select
                    {...register("categoryId")}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {categors?.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {errors.category && <span>Ban k duoc de trong</span>}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <BiChevronDown />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <span className="block mb-1">Đặc điểm nổi bật</span>
                <textarea
                  className="w-full h-[121px] p-2"
                  {...register("highlight", { required: true })}
                ></textarea>
                {errors.highlight && (
                  <span className="text-red-700 mt-1">
                    Bạn chưa điền đặc điểm nổi bật
                  </span>
                )}
              </div>
              <div className="mt-5">
                <span className="block mb-1">Mô tả dài</span>
                <textarea
                  className="w-full h-[121px] p-2"
                  {...register("descLong", { required: true })}
                ></textarea>
                {errors.descLong && (
                  <span className="text-red-700 mt-1">
                    Bạn chưa viết mô tả dài
                  </span>
                )}
              </div>
              <div className="flex items-center mt-5">
                <button className="bg-[#00B0D7] w-[94px] h-[34px] text-white rounded">
                  Chỉnh sửa
                </button>
                <NavLink
                  to={"/admin/products"}
                  className="bg-black inline-block py-[6px] px-4 ml-1 text-white rounded"
                >
                  Quay lại
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPhone;
