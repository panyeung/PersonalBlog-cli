import React from "react";
import Head from "next/head";
//Affix: allow stick to viewport
import { Row, Col, Breadcrumb, Affix } from "antd";
import {
  FolderOutlined,
  CalendarOutlined,
  FireOutlined,
} from "@ant-design/icons";
import style from "../public/static/style/page/detail.module.css";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import axios from "axios";

import marked from "marked"; //interpret markdown
import hljs from "highlight.js"; //highlight style
import "highlight.js/styles/monokai-sublime.css";

import Tocify from "../components/tocify.tsx";

import servicePath from "../config/apiUrl";
import dynamic from "next/dynamic";
const ReactLive2d = dynamic(import("react-live2d"), {
  ssr: false,
});

const Detail = (props) => {
  const tocify = new Tocify();
  const renderer = new marked.Renderer();

  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

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

  let html = marked(props.article_content);

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
        <title>{props.title}</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className={style.bread__div}>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">Home</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/">Video</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className={style.detailed__title}>{props.title}</div>
            <div className={`list__icon ${style.center}`}>
              <span>
                <CalendarOutlined />
                {props.addTime}
              </span>
              <span>
                <FolderOutlined />
                Tutorial
              </span>
              <span>
                <FireOutlined />
                {props.view_count}
              </span>
            </div>
            <div
              className={style.detailed__content}
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          {/* Affix: stick to viewport */}
          <Affix offsetTop={5}>
            <div className="detailed__nav comm-box">
              <div className={style.nav__title}>Table Of Content</div>
              {/* <MarkNav className="article-menu" source={html} ordered={false} /> */}
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

Detail.getInitialProps = async (context) => {
  console.log(context.query.id);
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticlesById + id).then((res) => {
      console.log(res);
      resolve(res.data.data);
    });
  });
  return await promise;
};
export default Detail;
