import { Avatar, Divider } from 'antd';
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';

import styles from '../styles/Author.module.css';

const Author = () => {
  return (
    <div className={styles.layout}>
      <Avatar className={styles.img} size={100} src="https://www.shareicon.net/data/512x512/2016/08/18/814068_face_512x512.png" />
      <div className={styles.introduction}>
        Good things are free, such as water, sunlight and air. So all the videos on this site are free. Welcome to the blog.
        <Divider>Social Media</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className="account" />
        <Avatar size={28} icon={<QqOutlined />} className="account" />
        <Avatar size={28} icon={<WechatOutlined />} className="account" />
      </div>
    </div>
  )
};

export default Author;

