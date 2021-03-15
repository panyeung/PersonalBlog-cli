import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { List, Row, Col } from "antd";
import axios from "axios";
import {
  FolderOutlined,
  CalendarOutlined,
  FireOutlined,
} from "@ant-design/icons";
import style from "../public/static/style/page/index.module.css";

import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";

import servicePath from "../config/apiUrl";

import marked from "marked"; //interpret markdown
import hljs from "highlight.js"; //highlight style
import "highlight.js/styles/monokai-sublime.css";

import dynamic from "next/dynamic";
const ReactLive2d = dynamic(import("react-live2d"), {
  ssr: false,
});

const Home = (list) => {
  const [myList, setMylist] = useState(list.data);

  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  return (
    <div>
      <ReactLive2d
        width={150}
        height={250}
        bottom={"1px"}
        left={"1px"}
        ModelList={["Hiyori"]}
        TouchBody={["Hi", "How You Doing?"]}
        TouchHead={["????"]}
        TouchDefault={[""]}
        PathFull="http://publicjs.supmiao.com/Resources/"
        menuLis={[]}
      />
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
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
                    {item.typeName[0].typeName}
                  </span>
                  <span>
                    <FireOutlined />
                    {item.view_count} views
                  </span>
                </div>
                <div
                  className={style.list__context}
                  dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
                ></div>
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

Home.getInitialProps = async () => {
  const promise = new Promise((resolve, reject) => {
    axios(servicePath.getArticlesList).then((res) => {
      console.log("------>", res.data);
      resolve(res.data);
    });
  });

  return await promise;
};
export default Home;
