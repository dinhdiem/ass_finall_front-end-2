import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutAdmin from "./layouts/AdminLayout";
import LayoutWebsite from "./layouts/LayoutWebsite";
import ProductList from "./pages/Admin/Products/ProductList";
import Cart from "./pages/clients/Cart";
import ListProducts from "./pages/clients/ListProducts";
import ProductDetail from "./pages/clients/ProductDetail";
import { ToastContainer } from "react-toastify";
import Login from "./pages/clients/Login";
import Register from "./pages/clients/Register";
import PrivateRouter from "./utils/PrivateRouter";
import AddProduct from "./pages/Admin/Products/AddProduct";
import EditProduct from "./pages/Admin/Products/EditProduct";
import NotFound from "./pages/404";
import { CategorType } from "./types/CategoryType";
import { PhoneType } from "./types/ProductType";
import { create, list, remove } from "./api/category";
import {
  createProduct,
  deleteProduct,
  listProducts,
  update,
} from "./api/Products";
import { toast } from "react-toastify";
import ListCategoryPage from "./pages/Admin/Category/ListCategory";
import AddCategory from "./pages/Admin/Category/AddCategory";

function App() {
  const [categorys, setCategorys] = useState<CategorType[]>([]);
  const [products, setProducts] = useState<PhoneType[]>([]);

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await list();
      setCategorys(data);
    };
    getCategory();
  }, []);
  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await listProducts();
      setProducts(data);
    };
    getAllProducts();
  }, []);

  const onHandleCreate = async (cate: PhoneType) => {
    const { data } = await createProduct(cate);
    return setProducts([...products, data]);
  };

  const ondeleteCategory = (id: any) => {
    remove(id);
    setCategorys(categorys.filter((item) => item.id !== id));
  };

  const removeProduct = (id: number) => {
    try {
      const confirm = window.confirm("Bạn có chắc muốn xóa sản phẩm này?");
      if (confirm) {
        deleteProduct(id);
        setProducts(products.filter((item) => item.id !== id));
        toast.success("Xóa thành công!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Xóa thất bại!");
    }
  };
  const onUpdateCategory = async (category: PhoneType) => {
    const { data } = await update(category);
    setCategorys(categorys.map((item) => (item.id === data.id ? data : item)));
  };

  // const onAddCategory = async (cate: CategorType) => {
  //   const { data } = await create(cate);
  //   return setProducts([...products, data]);
  // };

  return (
    <div>
      <Routes>
        <Route
          path="/admin"
          element={
            <PrivateRouter>
              <LayoutAdmin />
            </PrivateRouter>
          }
        >
          <Route index element={<Navigate to="products"></Navigate>} />
          <Route path="products">
            <Route
              index
              element={
                <ProductList onRemove={removeProduct} products={products} />
              }
            />
            <Route
              path="add"
              element={
                <AddProduct categors={categorys} onAdd={onHandleCreate} />
              }
            />
            <Route
              path=":id/edit"
              element={
                <EditProduct onUpdate={onUpdateCategory} categors={categorys} />
              }
            />
          </Route>
          <Route path="categorys">
            <Route
              index
              element={
                <ListCategoryPage
                  category={categorys}
                  ondelete={ondeleteCategory}
                />
              }
            />
            <Route path="add" element={<AddCategory />} />
          </Route>
        </Route>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<ListProducts />} />
          <Route path=":id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
