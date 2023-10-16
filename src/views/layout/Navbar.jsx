import { Link } from "react-router-dom";
import { Tabs } from "antd";
import {
  TeamOutlined,
  DollarOutlined,
  BarChartOutlined,
  HomeOutlined,
  SettingOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

function Navbar() {
  const tabData = [
    {
      key: "1",
      icon: <HomeOutlined />,
      title: "Inicio",
      path: "/",
    },
    {
      key: "2",
      icon: <DollarOutlined />,
      title: "Cuentas",
      path: "/cuentas",
    },
    {
      key: "3",
      icon: <TeamOutlined />,
      title: "Grupos",
      path: "/grupos",
    },
    {
      key: "4",
      icon: <BarChartOutlined />,
      title: "Informes",
      path: "/dashboard",
    },
    {
      key: "5",
      icon: <SettingOutlined />,
      title: "Configuración",
      path: "/configuracion",
    },
    {
      key: "6",
      icon: <CloseCircleOutlined />,
      title: "Cerrar Sesión",
      path: "/inicio",
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      centered
      items={tabData.map((tab) => {
        return {
          label: (
            <Link to={tab.path}>
              <span>
                {tab.icon}
                {tab.title}
              </span>
            </Link>
          ),
          key: tab.key,
        };
      })}
    />
  );
}

export default Navbar;
