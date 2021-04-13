import axios from 'axios';
import Head from 'next/head';
import { Row, Col, Breadcrumb, Affix } from 'antd';
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
const gfm = require('remark-gfm');
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import servicePath from '../config/apiUrl';
import styles from '../styles/detail.module.css';

const Detail = (data) => {

  const markdown = data.article_content;

  return (
    <>
      <Head>
        <title>Detail</title>
      </Head>

      <Header />

      <Row className="comm_wrapper" type="flex" justify="center">
        <Col className="comm_main" xs={24} sm={24} md={16} lg={18} xl={14}  >

          <Breadcrumb className="comm_breadcrumb">
            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>Video</Breadcrumb.Item>
            <Breadcrumb.Item>Others</Breadcrumb.Item>
          </Breadcrumb>

          <div>
            <div className={styles.title}>
              {data.title}
            </div>

            <div className="comm_icon comm_center">
              <span><CalendarOutlined /> {data.addTime}8</span>
              <span><FolderOutlined /> {data.typeName}</span>
              <span><FireOutlined /> {data.view_count}人</span>
            </div>

            <div className={styles.content}>
              <ReactMarkdown
                children={markdown}
                plugins={[gfm]}
              />
            </div>
          </div>
        </Col>

        <Col xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="comm_wrapper comm_box">
              <div className={styles.nav_title}>文章目录</div>
              <MarkdownNavbar
                className={styles.nav}
                source={markdown}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>

      <Footer />
    </>
  );
};

Detail.getInitialProps = async context => {
  // console.log(context.query);
  let id = context.query.id;
  const promise = new Promise(resolve => {
    axios(servicePath.getArticleById + id).then(
      res => {
        resolve(res.data.data[0]);
      }
    );
  });

  return await promise;
};

export default Detail;
