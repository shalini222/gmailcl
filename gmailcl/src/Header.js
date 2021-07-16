import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__l">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.N3cFVgAShuhUnvU-yBB12AHaEK&pid=Api&P=0&w=291&h=165"
          alt=""
        />
      </div>

      <div className="header__m">
        <SearchIcon />
        <input placeholder="Search Mail" type="text" />
        <ArrowDropDownIcon className="header_input" />
      </div>

      <div className="header__r">
        <IconButton>
          <AppsIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
