import LogoImg from "../assets/images/anhhtus-logo 2.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";
import ship from "../assets/frame/1.svg";
import bags from "../assets/frame/bags.svg";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutSuccess } from "../features/auth/authSlice";
import { reset } from "../features/Cart//cartSlice";

type Props = {};

const NavHome = (props: Props) => {
  const user = useSelector((store) => store.auth.login.isLogin?.user);
  const cart = useSelector((store) => store.cart);
  const name = user?.email.slice(0, user.email.indexOf("@"));
  const admin = useSelector((store) => store.auth.login.isLogin?.user.role);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="h-[64px] bg-[#D70018] flex justify-between items-center px-56">
      <NavLink to="/">
        <img src={LogoImg} alt="logo" className="w-[64px] h-[57px]" />
      </NavLink>
      <div className="flex relative">
        <div className="absolute text-xl top-[25%] left-[1%]">
          <BiSearchAlt2 />
        </div>
        <input type="text" className="w-[400px] h-[34px] rounded-md pl-7" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="hover:bg-[hsla(0,0%,100%,.2)] hover:rounded-md cursor-pointer">
          <span className="text-white">
            Gọi mua hàng <br />
            1800.2097
          </span>
        </div>
        <div className="flex items-center text-white hover:bg-[hsla(0,0%,100%,.2)] hover:rounded-md cursor-pointer">
          <div className="text-3xl">
            <GoLocation />
          </div>
          <span>
            Cửa hàng <br />
            gần bạn
          </span>
        </div>
        <div className="flex items-center text-white hover:bg-[hsla(0,0%,100%,.2)] hover:rounded-md cursor-pointer">
          <div className="text-3xl">
            <img src={ship} alt="ship" />
          </div>
          <span>
            Tra cứu <br />
            đơn hàng
          </span>
        </div>
        <NavLink
          to="/cart"
          className="flex items-center text-white hover:bg-[hsla(0,0%,100%,.2)] hover:rounded-md cursor-pointer"
        >
          <div className="text-3xl relative">
            <img src={bags} alt="bags" />
            <span className="text-[15px] absolute top-[-3px] left-[7px]">
              {cart.quantity}
            </span>
          </div>
          <span>
            Giỏ <br />
            hàng
          </span>
        </NavLink>
        {user ? (
          <div className="flex space-x-2">
            <div className="flex items-center justify-center text-white hover:bg-[hsla(0,0%,100%,.2)] hover:rounded-md cursor-pointer">
              <div className="font-sans">
                {admin ? (
                  <NavLink to="/admin/products" className="text-[15px]">
                    Đi đến trang <br /> quản trị
                  </NavLink>
                ) : (
                  <div>
                    Hi <span className="text-[15px]">{name}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center text-white hover:bg-[hsla(0,0%,100%,.2)] hover:rounded-md cursor-pointer">
              <div className="font-sans text-3xl" onClick={handleLogout}>
                <IoMdExit />
              </div>
            </div>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="flex items-center justify-center text-white hover:bg-[hsla(0,0%,100%,.2)] hover:rounded-md cursor-pointer"
          >
            <div className="font-sans">
              <BiUserCircle className="pl-1 text-[25px] inline-block" />
              <br />
              <span className="text-[15px]">Login</span>
            </div>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavHome;
