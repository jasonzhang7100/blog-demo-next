import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { Row, Col, List, Breadcrumb } from 'antd';
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';

import Header from '../components/Header';
import Author from '../components/Author';
import Spread from '../components/Spread';
import Footer from '../components/Footer';
import servicePath from '../config/apiUrl';

const Home = ({ data }) => {

  const [myList, setMyList] = useState(data);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />

      <Row className="comm_wrapper" type="flex" justify="center">
        <Col className="comm_main" xs={24} sm={24} md={16} lg={18} xl={14}>

          <Breadcrumb className="comm_breadcrumb">
            <Breadcrumb.Item>Latest Articles</Breadcrumb.Item>
          </Breadcrumb>

          <List
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item>
                <div className="comm_list_title">
                  <Link href={{ pathname: '/detail', query: { id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="comm_icon">
                  <span><CalendarOutlined /> {item.addTime}</span>
                  <span><FolderOutlined /> {item.typeName}</span>
                  <span><FireOutlined /> {item.view_count}</span>
                </div>
                <div className="comm_list_introduce">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>

        <Col xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Spread />
        </Col>
      </Row>

      <Footer />
    </>
  );
};

Home.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios(servicePath.getArticleList).then(
      res => resolve(res.data)
    );
  });
  return await promise;
};

export default Home;
