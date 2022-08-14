import React, { useState } from "react";
import add from "../../../assets/images/Icon.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { CategorType } from "../../../types/CategoryType";
import { PhoneType } from "../../../types/ProductType";
import { upload } from "../../../api/uploadImage";
import styled from "styled-components";
import { toast } from "react-toastify";

type Props = {
  onAdd: (phone: PhoneType) => void,
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
  amount: number,
};
const AddProduct = ({ onAdd, categors }: Props) => {
  const [uploadedImage, setUploadedImage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    data.img = uploadedImage;
    data.amount = 1;
    if (data) {
      onAdd(data);
      navigate(-1);
      toast.success("Thêm sản phẩm thành công.");
    }
  };

  const handlerChangeImage = (event: any) => {
    const file = event.target.files[0];
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadedImage(reader.result);
    };
    const uploadedImage = async (base64: string) => {
      try {
        const res = await upload(base64);
        const data = res.data;
        setUploadedImage(data.url);
      } catch (error) {
        toast.error("Lỗi: " + error);
      }
    };
  };

  const imgField = register("img", { required: true });

  const HiddenInput = styled.input`
    display: ${uploadedImage ? "none" : "block"};
  `;
  const HiddenDiv = styled.div`
    display: ${uploadedImage ? "none" : "block"};
  `;
  const HiddenSpan = styled.span`
    display: ${uploadedImage ? "none" : "block"};
  `;
  return (
    <div className="mx-auto px-5 pt-8 mb-10">
      <div className="title-page">
        <h1 className="text-2xl font-poppins">Thêm mới Sản phẩm</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
                    <HiddenInput
                      {...imgField}
                      type="file"
                      accept="image/png, image/jpg, image/jpeg, image/gif"
                      onChange={handlerChangeImage}
                      className="h-[259px] w-full opacity-0"
                      name="imageUrl"
                    />
                    <HiddenDiv className="absolute left-[75px] top-[90%]">
                      {errors.img && (
                        <span className="text-red-700">Bạn chưa thêm ảnh</span>
                      )}
                    </HiddenDiv>
                  </div>
                  {uploadedImage && (
                    <img
                      className="h-[259px] w-full"
                      src={uploadedImage}
                      {...register("img", { required: true })}
                      alt="anh"
                    />
                  )}
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
                  placeholder="Viết mô tả dài của sản phẩm"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  aria-label="Full name"
                />
                {errors.descShort && (
                  <span className="text-red-700 mt-1">
                    Bạn chưa điền mô tả ngắn
                  </span>
                )}
              </div>
            </form>
          </div>
          <div className="content-add w-full">
            <span className="w-full border-b-2 block pb-5 text-xl">
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
                    placeholder="Nhập giá cửa sản phẩm"
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
                    placeholder="Giảm giá"
                    className="px-2 w-full h-8 rounded-sm"
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
                  placeholder="Viết đặc điểm nổi bật"
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
                  placeholder="Viết mô tả dài của sản phẩm"
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
                  Thêm mới
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

export default AddProduct;
