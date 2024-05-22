import { Select } from "antd";

import { Link, NavLink } from "react-router-dom";

const { Option } = Select;

const selectOptions = [
  {
    title: "Medical & Surgical Equipment One",
    path: "",
  },
  {
    title: "Medical & Surgical Equipment Two",
    path: "ProductTwo",
  },
  {
    title: "Medical & Surgical Equipment Three",
    path: "ProductThree",
  },
];

export default function LsSidebar() {
  
  const handleChange = (value) => {
    window.location.href = value;
  };

  return (
    <div>
      <div>
        <div className="hidden lg:block">
          <div className="flex flex-col  k  w-72  text-white">
            {selectOptions.map((props, index) => (
              <NavLink
                key={index}
                to={props.path}
                className={({ isActive }) =>
                  `hover:bg-white text-xs font-bold px-4 hover:border border border-white text-graydark py-4 ${isActive ? "bg-orange text-white hover:bg-orangeshade" : "bg-graypowderlight"}`
                }
              >
                {props.title}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="block lg:hidden">
          <div className="flex justify-center py-5">
            <Select style={{ width: "350px" }}
            defaultValue={selectOptions[0].title}
            onChange={handleChange}>
              {selectOptions.map((option) => (
                <Option key={option.path}>
                  <div>
                    <Link to={option.path}>{option.title}</Link>
                  </div>
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
