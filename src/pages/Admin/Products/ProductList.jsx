import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Add from "../../../assets/images/Icon.svg";
import { BiChevronDown } from "react-icons/bi";

// import // removeProduct,
// // getProducts,
// "../../../features/Product/productSlice";

type Props = {
  products: PhoneType[],
  onRemove: (id: any) => void,
};

const PhoneList = ({ onRemove, products }: Props) => {
  // const products = useSelector((data) => data.product.value);
  const category = useSelector((store) => store.category.value);
  console.log(category);
  console.log(products);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  const handleDelete = (id: any) => {
    onRemove(id);
  };

  return (
    <div className="bg-gray-100 mx-auto px-5 pt-8 pr-12">
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-2xl">Điện thoại</h1>
        </div>
        <NavLink to={"/admin/products/add"} className="text-3xl pt-2">
          <img src={Add} alt="add" />
        </NavLink>
      </div>
      <div className="flex mt-5">
        <div>
          <br />
          <span className="text-[#5F5E61] mr-5">Bộ lọc:</span>
        </div>
        <div className="">
          <span className="pb-1 inline-block">Danh mục sản phẩm</span>
          <br />
          <div className="inline-block relative w-[352px]">
            <select
              value={category.id}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Chọn danh mục</option>
              {category?.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <BiChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto mt-5">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  STT
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tên sản phẩm
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Ảnh sản phẩm
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Thành tiền
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Mô tả
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Ẩn hiện
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {index + 1}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {item.name}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <img src={item.img} alt="a" className="w-20 h-14" />
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {new Intl.NumberFormat().format(item.price)} VND
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {item.descLong}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {item.salePrice}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex h-[97px] items-center ">
                      <NavLink
                        className="text-black mr-1 text-2xl"
                        to={`/admin/products/${item.id}/edit`}
                      >
                        <AiFillEdit />
                      </NavLink>
                      <button
                        className="text-red-700 text-2xl"
                        onClick={() => handleDelete(item.id)}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PhoneList;
