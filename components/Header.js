import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Row, Col, Menu } from 'antd';
import { Icon } from '@ant-design/compatible';

import styles from '../styles/Header.module.css';
import servicePath from '../config/apiUrl';

const Header = () => {
  const [navArray, setNavArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(
        res => res.data.data
      );
      setNavArray(result);
    };

    fetchData();
  }, []);

  const handleClick = e => {
    if (e.key == 0) {
      Router.push('/');
    } else {
      Router.push('/mylist?id=' + e.key);
    }
  };

  return (
    <Row className={styles.wrapper}>
      <Col xs={24} sm={24} md={10} lg={12} xl={15}>
        <span className={styles.logo}>
          <Link href={{ pathname: '/' }}>
            JZblog
          </Link>
        </span>
        <span className={styles.logo_text}>focusing on frontend stack</span>
      </Col>

      <Col xs={0} sm={0} md={14} lg={12} xl={9}>
        <Menu mode="horizontal" onClick={handleClick}>
          <Menu.Item key="0">
            <Icon type="home" />Home
          </Menu.Item>

          {
            navArray.map(item => (
              <Menu.Item key={item.id}>
                <Icon type={item.icon} />
                {item.typeName}
              </Menu.Item>
            ))
          }

        </Menu>
      </Col>
    </Row>
  );
};

export default Header;
