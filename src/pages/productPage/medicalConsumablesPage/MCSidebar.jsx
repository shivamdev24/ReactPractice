import { Select } from "antd";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


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

export default function MCSidebar() {
  const location = useLocation();

  const navigate = useNavigate();
  const currentPath = location.pathname === "/" ? "" : location.pathname.slice(1);

  useEffect(() => {
    if (currentPath === "") {
      navigate(selectOptions[0].path);
    }
  }, [currentPath, navigate]);


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
                  currentPath === props.path
                    ? "bg-orange-500 text-white" 
                    : "bg-graypowderlight text-graydark hover:bg-gray-200"
                }`}

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
              value={currentPath}
              onChange={(value) => navigate(value)}
            >
              {selectOptions.map((option) => (
                <Option key={option.path} value={option.path}>
                  <Link to={option.path}>{option.title}</Link>
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
