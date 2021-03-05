import React from "react";
import { Avatar, Divider } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import style from "../public/static/style/components/author.module.css";
const Author = () => {
  return (
    <div className={`${style.author__div} comm-box`}>
      <div className="author-avatar" src="" size={100}></div>
      <div className={style.author__introduction}>
        Focus on becoming a frontend developer.
      </div>
      <Divider>Social Media</Divider>
      <div>
        <Avatar
          className={style.author__account}
          size={28}
          icon={<GithubOutlined />}
        />
        <Avatar
          className={style.author__account}
          size={28}
          icon={<LinkedinOutlined />}
        />
      </div>
    </div>
  );
};

export default Author;
