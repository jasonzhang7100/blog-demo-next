import Head from 'next/head';
import { Row, Col, Breadcrumb, Affix } from 'antd';
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import styles from '../styles/detail.module.css';

const markdown = `# Markdown-Navbar Demo

## Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.

### Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

#### Chicken Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken Chicken.

## Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.

### Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

#### Chicken Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken Chicken.

## Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.

### Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

#### Chicken Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken Chicken.

## Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.

### Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

#### Chicken Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken Chicken.

## Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.

### Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

#### Chicken Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken Chicken.`;

const Detail = () => {

  return (
    <>
      <Head>
        <title>Detail</title>
      </Head>

      <Header />

      <Row className="comm_wrapper" type="flex" justify="center">
        <Col className="comm_main" xs={24} sm={24} md={16} lg={18} xl={14}  >

          <Breadcrumb>
            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>Video</Breadcrumb.Item>
            <Breadcrumb.Item>Others</Breadcrumb.Item>
          </Breadcrumb>

          <div>
            <div className={styles.title}>
              React实战视频教程-技术胖Blog开发(更新08集)
              </div>

            <div className="comm_icon">
              <span><CalendarOutlined /> 2019-06-28</span>
              <span><FolderOutlined /> 视频教程</span>
              <span><FireOutlined /> 5498人</span>
            </div>

            <div className={styles.content}>
              <ReactMarkdown source={markdown} />
            </div>
          </div>
        </Col>

        <Col className="comm_box" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <MarkdownNavbar source={markdown} />
          </Affix>
        </Col>
      </Row>

      <Footer />
    </>
  );
};

export default Detail;
