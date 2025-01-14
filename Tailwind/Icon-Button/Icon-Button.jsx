"use client";
import { Icon } from "..";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { signOut } from "next-auth/react";

const btnSize = {
  sm: "w-10 h-10 rounded-full",
  md: "w-12 h-12 rounded-full",
  lg: "w-14 h-14 rounded-full",
  xl: "w-16 h-16 rounded-full",
};

const sample = {
  "o-primary": "border border-teal-600 text-teal-600 shadow-lg",
  "o-secondary": "border border-blue-600 text-blue-600 shadow-lg",
  "o-info": "border border-cyan-600 text-cyan-600 shadow-lg",
  "o-error": "border border-red-600 text-red-600 shadow-lg",
  "o-warning": "border border-orange-600 text-orange-600 shadow-lg",
  "o-success": "border border-green-600 text-green-600 shadow-lg",

  primary: "bg-teal-600 text-white shadow-lg",
  secondary: "bg-blue-600 text-white shadow-lg",
  info: "bg-cyan-600 text-white shadow-lg",
  error: "bg-red-600 text-white shadow-lg",
  warning: "bg-orange-600 text-white shadow-lg",
  success: "bg-green-600 text-white shadow-lg",

  "t-primary": "text-teal-600",
  "t-secondary": "text-blue-600",
  "t-info": "text-cyan-600",
  "t-error": "text-red-600",
  "t-warning": "text-orange-600",
  "t-success": "text-green-600",
};

const IconButton = ({
  children,
  theme = "primary",
  className = "",
  size = "md",
  dropdown = false,
  dropdownMenu = [],
  onClick = null,
  ...rest
}) => {
  const [toggle, setToggle] = useState(false);

  const Menu = ({ item }) => {
    return (
      <>
        {item.logout ? (
          <button
            onClick={() => signOut()}
            className="
                     flex items-center gap-3 
                     text-black pl-3 w-full py-2 capitalize 
                     hover:bg-red-500 hover:text-white"
          >
            <Icon>{item.icon}</Icon>
            {item.label}
          </button>
        ) : (
          <Link href={item.href}>
            <button
              className="
                         flex items-center gap-3 
                         text-black pl-3 w-full py-2 capitalize 
                         hover:bg-red-500 hover:text-white"
            >
              <Icon>{item.icon}</Icon>
              {item.label}
            </button>
          </Link>
        )}
      </>
    );
  };

  const Dropdown = () => {
    return (
      <>
        <Transition show={toggle}>
          <div
            style={{
              marginTop: "63px",
              minWidth: "180px",
            }}
            className="absolute top-0 right-0 z-50 bg-white py-3 px-0 flex flex-col"
          >
            {dropdownMenu.map((item, index) => {
              return <Menu item={item} key={index} />;
            })}
          </div>
        </Transition>
      </>
    );
  };

  const design = (
    <>
      <button
        {...rest}
        onClick={dropdown ? () => setToggle(!toggle) : onClick}
        className={
          "sm:relative flex items-center justify-center  " +
          sample[theme] +
          " " +
          btnSize[size] +
          " " +
          className
        }
      >
        <Icon>{children}</Icon>
        {dropdown ? <Dropdown /> : null}
      </button>
    </>
  );
  return design;
};

export default IconButton;
