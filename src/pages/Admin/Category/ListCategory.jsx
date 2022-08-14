import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CategoryType } from "../../../types/CategoryType";

type ListCategory = {
  category: CategoryType[],
  ondelete: (id: any) => void,
};

const ListCategoryPage = ({ category, ondelete }: ListCategory) => {
  const handleDelete = (id: any) => {
    ondelete(id);
  };
  const navigate = useNavigate();
  return (
    <div className="pl-[300px]">
      <div className="">
        <h1 className="py-2 h3 mb-0 text-red-600 text-3xl pl-[150px] mt-[100px]">
          Quản lý danh mục
        </h1>
      </div>
      <NavLink className="text-[#2596be] text-xl" to="/admin/categorys/add">
        Thêm
      </NavLink>
      <div class="overflow-x-auto w-[600px] mt-24 bg-white rounded">
        <table class="min-w-full text-sm divide-y-2 divide-gray-200">
          <thead>
            <tr>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                STT
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Tên danh mục
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Chức năng
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {category?.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    <button
                      className="btn btn-primary px-2"
                      onClick={() => {
                        navigate(`/admin/categorys/${item.id}/edit`);
                      }}
                    >
                      Sửa
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCategoryPage;
