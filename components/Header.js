import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Row, Col, Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

import styles from '../public/styles/Header.module.css';
import servicePath from '../config/apiUrl';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2509173_ilhw378q9br.js',
});

const Header = () => {

  const [navArray, setNavArray] = useState([]);

  const fetchData = async () => {
    const result = await axios(servicePath.getTypeInfo).then(
      res => res.data.data
    );
    setNavArray(result);
  };

  useEffect(() => fetchData(), []);

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
        <Link href={{ pathname: '/' }}>
          <img src="../static/JZblog_logo.png" alt="logo" className={styles.logo} />
        </Link>
      </Col>

      <Col xs={0} sm={0} md={14} lg={12} xl={9}>
        <Menu mode="horizontal" onClick={handleClick}>
          <Menu.Item key="0">
            <IconFont type="icon-home" />Home
          </Menu.Item>

          {
            navArray.map(item => (
              <Menu.Item key={item.id}>
                <IconFont type={item.icon} />
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
