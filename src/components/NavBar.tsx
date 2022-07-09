import { Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";

const NavBar: FC = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <Header>
      <Row justify="end">
        <Menu theme="dark" mode="horizontal" selectable={false}>
          {isAuth ? (
            <>
              <div style={{ color: "white" }}>{user.username}</div>
              <Menu.Item onClick={() => logout()} key={1}>
                Выйти
              </Menu.Item>
            </>
          ) : (
            <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>
              Логин
            </Menu.Item>
          )}
        </Menu>
      </Row>
    </Header>
  );
};

export default NavBar;
