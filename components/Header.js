import { Row, Col, Menu } from 'antd';
import { HomeOutlined, YoutubeOutlined, SmileOutlined } from '@ant-design/icons';

import styles from '../styles/Header.module.css';

const Header = () => (
  <Row className={styles.header}>
    <Col xs={24} sm={24} md={10} lg={12} xl={15}>
      <span className={styles.logo}>JZblog</span>
      <span className={styles.logoText}>focusing on frontend stack</span>
    </Col>

    <Col xs={0} sm={0} md={14} lg={12} xl={9}>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <HomeOutlined />Home
        </Menu.Item>
        <Menu.Item key="video">
          <YoutubeOutlined />Video
        </Menu.Item>
        <Menu.Item key="life">
          <SmileOutlined />Article
        </Menu.Item>
      </Menu>
    </Col>
  </Row>
);

export default Header;
