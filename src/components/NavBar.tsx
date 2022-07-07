import { Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";

const NavBar: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <Header>
      <Row justify="end">
        <Menu theme="dark" mode="horizontal" selectable={false}>
          {isAuth ? (
            <>
              <div style={{ color: "white" }}>nikaiko</div>
              <Menu.Item onClick={() => console.log("Exit")} key={1}>
                Exit
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
