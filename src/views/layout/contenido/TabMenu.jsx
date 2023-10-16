import { Tabs } from "antd";
import CuentasIndex from "../../cuentas/CuentasIndex";
import GruposIndex from "../../grupos/GruposIndex";
import DashboardIndex from "../../dashboard/DashboardIndex";

function TabMenu() {
  const tabItems = [
    {
      key: 1,
      label: "Cuentas",
      route: "/cuentas",
      children: <CuentasIndex />,
    },
    {
      key: 2,
      label: "Grupos",
      route: "/grupos",
      children: <GruposIndex />,
    },
    {
      key: 3,
      label: "Informes",
      route: "/dashboard",
      children: <DashboardIndex />,
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" type="card">
        {tabItems.map((item) => (
          <Tabs.TabPane tab={item.label} key={item.key}>
            {item.children}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export default TabMenu;
