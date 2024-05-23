import { Select } from "antd";
import React, { useState, useEffect } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";

const { Option } = Select;

const selectOptions = [
  {
    title: "Medical Disposables",
    path: "medical-pisposables",
  },
  {
    title: "Medical Rubber Products",
    path: "rubber-products",
  },
  {
    title: "Blood Collection Tubes",
    path: "blood-collection",
  },
];

export default function MediConsumablesSidebar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState();

  useEffect(() => {
    setActivePath(location.pathname);
  }, []);

  const handleChange = (value) => {
    window.location.href = value;
  };

  return (
    <div>
      <div>
        <div className="hidden lg:block">
          <div className="flex flex-col w-72 text-white">
            {selectOptions.map((props, index) => (
              <NavLink
                key={index}
                to={props.path}
                className={({ isActive }) =>
                  `hover:bg-white hover:text-orange text-xs font-bold  hover:border border border-white text-graydark py-4 px-4 ${isActive || activePath === `/${props.path}` ? "bg-orange text-white hover:text-black hover:bg-orangeshade" : "bg-graypowderlight"}`
                }
                onChange={() => setActivePath(`/${props.path}`)}
              >
                {props.title}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="block lg:hidden">
          <div className="flex justify-center py-5">
            <Select
              style={{ width: "350px" }}
              defaultValue={selectOptions[0].path}
              onChange={(value) => navigate(value)}
            >
              {selectOptions.map((option) => (
                <Option key={option.path} value={option.path}>
                  {option.title}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
