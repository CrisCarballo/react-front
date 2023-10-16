import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Dropdown } from "antd";

const MenuUsuario = () => {
  const items = [
    {
      key: 1,
      label: "Ver Perfil",
      route: "/usuarios",
    },
    {
      key: 2,
      label: "Cerrar Sesión",
      route: "/inicio",
    },
  ];

  const handleClick = (e) => {
    //todo: hay que hacer que con el evento clic te lleve haga lo que corresponde a cada item del menu
    console.log(e.key);
  };

  return (
    <Space direction="vertical" size={16}>
      <Space wrap size={16}>
        <Dropdown
          menu={{
            onClick: handleClick,
            items: items,
          }}
          placement="bottomLeft"
        >
          <Avatar
            size="large"
            icon={
              <UserOutlined /> /* todo: reemplazar este logo por la foto de perfil del usuario si la tiene */
            }
          />
        </Dropdown>
      </Space>
    </Space>
  );
};

export default MenuUsuario;
