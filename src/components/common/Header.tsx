"use client";

import { themes, useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Button from "./buttons/SmallButton";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { menuItem } from "../../../constants";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const Logo = "/images/female-logo.png";

const Header = () => {
  const { toggleTheme, theme } = useTheme();
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  
  return (
    <div className="shadow-sm flex justify-between py-2 px-4 dark:shadow-white md:px-20">
      <Image
        src={Logo}
        alt="Logo"
        height={50}
        width={50}
      />
      <div className="hidden md:flex gap-5 my-auto">
        {menuItem.map((item, index) => (
          <div key={index} className="my-auto text-lg">
            {item.link ? (
              <Link href={item.link}>{item.name}</Link>
            ) : (
              <div className={`flex flex-col gap-1 relative`}>
                <span className="cursor-pointer flex my-auto gap-2">{item.name} <RiArrowDropDownLine className="my-auto" size={20} /></span>
                <div className={`absolute flex-col gap-1 ${openDropDown ? "flex" : "hidden"}`}>
                  {item.subMenu?.map((subItem, index) => (
                    <Link href={subItem.link!} key={index}>{subItem.name}</Link>
                  ))}
                </div>
              </div>
            )}
            </div>
          ))}
          </div>
          <div className="flex gap-10 my-auto">
              <div className="my-auto">
                <button
                  onClick={toggleTheme}
                  className="relative w-14 h-8 bg-gray-300 rounded-full shadow-inner transition-colors duration-300 ease-in-out my-auto"
                >
                  <span
                    className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 p-1 justify-center items-center my-auto flex ease-in-out ${theme === themes.dark ? "translate-x-6 bg-gray-800 text-white" : ""}`}
                  >
                    {theme === themes.light ? <MdOutlineLightMode /> : <IoMdMoon color="black" />}
                  </span>
                </button>
              </div>
              <button className="my-auto cursor-pointer flex md:hidden">
                <BiMenu size={30} className="my-auto" color="black" />
              </button>
              <Button
                text="Join Movement"
                className="bg-[#2a66ec] h-fit shadow-sm hover:shadow-md cursor-pointer py-2 hidden md:flex" />
            </div>
    </div>
  );
};

export default Header;