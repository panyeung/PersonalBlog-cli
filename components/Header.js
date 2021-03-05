import React, { useEffect, useState } from "react";
import { Row, Col, Menu } from "antd";
import {
  SmileOutlined,
  YoutubeOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import styles from "../public/static/style/components/header.module.css";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import servicePath from "../config/apiUrl";

const Header = () => {
  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push("/");
    } else {
      Router.push("/list?id=" + e.key);
    }
  };

  return (
    <div className={styles.header}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className={styles.header__logo}>Pan</span>
          <span className={styles.header__txt}>
            Focus on Frontend development
          </span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0" className={styles.header__nav}>
              <HomeOutlined />
              home
            </Menu.Item>
            <Menu.Item key="1" className={styles.header__nav}>
              <YoutubeOutlined />
              Video
            </Menu.Item>
            <Menu.Item key="2" className={styles.header__nav}>
              <SmileOutlined />
              Life
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
