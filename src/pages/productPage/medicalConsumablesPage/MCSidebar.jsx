import { Select } from "antd";
import { NavLink, useLocation } from "react-router-dom";

const { Option } = Select;

const selectOptions = [
  {
    title: "Medical Disposables",
    path: "",
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
  const currentPath = location.pathname;

  return (
    <div>
      <div>
        <div className="hidden lg:block">
          <div className="flex flex-col w-72 text-white">
            {selectOptions.map((props, index) => (
              <NavLink
                key={index}
                to={props.path}
                className={`text-xs font-bold px-4 py-4 ${
                  currentPath === `/${props.path}`
                    ? "bg-orange-500 text-white" 
                    : "bg-graypowderlight text-graydark hover:bg-gray-200"
                }`
                }
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
