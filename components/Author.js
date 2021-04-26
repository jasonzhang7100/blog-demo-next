import { Avatar, Divider } from 'antd';
import { GithubFilled, LinkedinFilled, FacebookFilled } from '@ant-design/icons';

import styles from '../public/styles/Author.module.css';

const Author = () => {
  return (
    <div className={styles.layout}>
      <Avatar className={styles.img} size={100} src="https://www.shareicon.net/data/512x512/2016/08/18/814068_face_512x512.png" />
      <div className={styles.summary}>
        Good things are free, such as water, sunlight and air. So all tutorials on this site are free. Welcome to my blog.
        <Divider>Social Media</Divider>
        <a href="https://github.com/jasonzhang7100" rel="noopener noreferrer" target="_blank">
          <GithubFilled style={{ fontSize: "1.8rem" }} />
        </a>
        <a href="https://www.linkedin.com/in/jason-zhang-syd/" rel="noopener noreferrer" target="_blank">
          <LinkedinFilled style={{ fontSize: "1.8rem" }} />
        </a>
        <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
          <FacebookFilled style={{ fontSize: "1.8rem" }} />
        </a>
      </div>
    </div>
  )
};

export default Author;

