import React from "react";
import { Avatar, Divider } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import style from "../public/static/style/components/author.module.css";
import Link from "next/link";
const Author = () => {
  return (
    <div className={`${style.author__div} comm-box`}>
      <div
        className="author-avatar"
        src="../public/img/head_img.jpg"
        size={100}
      ></div>
      <div className={style.author__introduction}>
        Focus on becoming a frontend developer.
      </div>
      <Divider>Social Media</Divider>
      <div>
        <Link href="https://github.com/panyeung">
          <Avatar
            className={style.author__account}
            size={28}
            icon={<GithubOutlined />}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/panyeung/">
          <Avatar
            className={style.author__account}
            size={28}
            icon={<LinkedinOutlined />}
          />
        </Link>
      </div>
    </div>
  );
};

export default Author;
