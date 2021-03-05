import React from "react";
import { Avatar, Divider } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import style from "../public/static/style/components/author.module.css";
import Link from "next/link";
import headImg from "../public/static/img/head_img.jpg";
import Image from "next/image";
const Author = () => {
  return (
    <div className={`${style.author__div} comm-box`}>
      <Image
        className={style.author__avatar}
        src={headImg}
        alt="me"
        width="64"
        height="64"
        quality="100"
      />
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
