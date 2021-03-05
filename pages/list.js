import React, { useState, useEffect } from "react";

import Head from "next/head";
import { List, Row, Col, Breadcrumb } from "antd";
import {
  FolderOutlined,
  CalendarOutlined,
  FireOutlined,
} from "@ant-design/icons";

import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";

import axios from "axios";
import servicePath from "../config/apiUrl";
import Link from "next/link";
import style from "/static/style/page/index.module.css";

const MyList = (list) => {
  const [myList, setMylist] = useState(list.data);

  useEffect(() => {
    setMylist(list.data);
  });

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread__div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">Home</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{list.type[0].typeName}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <List
            header={<div>Update</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={(item) => (
              <List.Item>
                <div className={style.list__title}>
                  <Link href={{ pathname: "/detail", query: { id: item._id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className={style.list__icon}>
                  <span>
                    <CalendarOutlined />
                    {item.addTime}
                  </span>
                  <span>
                    <FolderOutlined />
                    Tutorial
                  </span>
                  <span>
                    <FireOutlined />
                    {item.view_count}
                  </span>
                </div>
                <div className={style.list__context}>{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

MyList.getInitialProps = async (context) => {
  let id = context.query.id;
  const promise = new Promise((resolve, reject) => {
    axios(servicePath.getArticlesByTypeId + id).then((res) => {
      console.log("------>", res.data);
      resolve(res.data);
    });
  });

  return await promise;
};

export default MyList;
