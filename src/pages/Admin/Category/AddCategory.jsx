import React from "react";

const AddCategory = () => {
  return (
    <div>
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto">
          <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
            Thêm danh mục
          </h1>
          <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
            <div>
              <label for="text" class="text-sm font-medium">
                Name
              </label>

              <div class="relative mt-1">
                <input
                  type="text"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder=""
                />
              </div>
            </div>
            <button
              type="submit"
              class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
            >
              Thêm sản phẩm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
