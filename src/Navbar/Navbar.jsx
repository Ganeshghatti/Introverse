import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TfiAlignLeft } from "react-icons/tfi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import {
  faBars,
  faCancel,
  faCartShopping,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import logo from "./logo.jpg";

export default function Navbar() {
  const location = useLocation();

  const [menu, setmenu] = useState(false);

  const menuf = () => {
    setmenu(!menu);
  };

  return (
    <nav
      id="navbar"
      className="w-screen flex justify-around lg:justify-between md:justify-between items-center py-6 lg:px-8 z-50 md:px-6"
    >
      {menu ? (
        <>
          <div
            className="fixed w-screen h-screen top-0 left-0 z-30"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.353)" }}
            onClick={menuf}
          />
          <ul
            className="flex flex-col fixed z-50 justify-center gap-12 right-0 top-0 items-center text-white"
            style={{
              width: "70vw",
              height: "100vh",
              backgroundColor: "#242420",
            }}
          >
            <FaXmark
              className={`z-50 absolute cursor-pointer  top-10 text-white right-5 ${
                menu ? "block" : "hidden"
              }`}
              onClick={menuf}
            />
            <li>
              <a href="/#hero" onClick={menuf}>
                HOME
              </a>
            </li>
            <li>
              <a href="/#about" onClick={menuf}>
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="/#team" onClick={menuf}>
                TEAM
              </a>
            </li>
            <li>
              <a href="/#contact" onClick={menuf}>
                CONTACT
              </a>
            </li>
            <div className=" gap-2 hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="27"
                viewBox="0 0 31 27"
                fill="none"
              >
                <ellipse
                  cx="15.3685"
                  cy="13.6363"
                  rx="15.2728"
                  ry="13.3637"
                  fill="#AEB049"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="27"
                viewBox="0 0 31 27"
                fill="none"
              >
                <ellipse
                  cx="15.3685"
                  cy="13.6363"
                  rx="15.2728"
                  ry="13.3637"
                  fill="#E02EF0"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="27"
                viewBox="0 0 31 27"
                fill="none"
              >
                <ellipse
                  cx="15.369"
                  cy="13.6363"
                  rx="15.2728"
                  ry="13.3637"
                  fill="#01C738"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="27"
                viewBox="0 0 31 27"
                fill="none"
              >
                <ellipse
                  cx="15.369"
                  cy="13.6363"
                  rx="15.2728"
                  ry="13.3637"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="27"
                viewBox="0 0 31 27"
                fill="none"
              >
                <ellipse
                  cx="15.369"
                  cy="13.6363"
                  rx="15.2728"
                  ry="13.3637"
                  fill="#EA5602"
                />
              </svg>
            </div>
          </ul>
        </>
      ) : null}
      <img src={logo} className="" />
      <ul
        className="flex z-50 justify-around items-center md:hidden text-white navbar-pc-menu"
        style={{ gap: "4vw" }}
      >
        <li>
          <a href="/#hero" className="opacity-50 hover:opacity-100">
            HOME
          </a>
        </li>
        <li>
          <a href="/#about" className="opacity-50 hover:opacity-100">
            ABOUT ME
          </a>
        </li>
        <li>
          <a href="/#team" className="opacity-50 hover:opacity-100">
            TEAM
          </a>
        </li>
        <li>
          <a href="/#contact" className="opacity-50 hover:opacity-100">
            CONTACT
          </a>
        </li>
      </ul>
      <div className="flex gap-2 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="27"
          viewBox="0 0 31 27"
          fill="none"
        >
          <ellipse
            cx="15.3685"
            cy="13.6363"
            rx="15.2728"
            ry="13.3637"
            fill="#AEB049"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="27"
          viewBox="0 0 31 27"
          fill="none"
        >
          <ellipse
            cx="15.3685"
            cy="13.6363"
            rx="15.2728"
            ry="13.3637"
            fill="#E02EF0"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="27"
          viewBox="0 0 31 27"
          fill="none"
        >
          <ellipse
            cx="15.369"
            cy="13.6363"
            rx="15.2728"
            ry="13.3637"
            fill="#01C738"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="27"
          viewBox="0 0 31 27"
          fill="none"
        >
          <ellipse
            cx="15.369"
            cy="13.6363"
            rx="15.2728"
            ry="13.3637"
            fill="white"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="27"
          viewBox="0 0 31 27"
          fill="none"
        >
          <ellipse
            cx="15.369"
            cy="13.6363"
            rx="15.2728"
            ry="13.3637"
            fill="#EA5602"
          />
        </svg>
      </div>{" "}
      <TfiAlignLeft
        className={`hidden cursor-pointer md:block text-white ${
          !menu ? "block" : "hidden"
        }`}
        onClick={menuf}
      />
    </nav>
  );
}
