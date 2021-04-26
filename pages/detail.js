import Head from 'next/head';
import axios from 'axios';
import { Row, Col, Breadcrumb, Affix } from 'antd';
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

import Header from '../components/Header';
import Author from '../components/Author';
import Spread from '../components/Spread';
import Footer from '../components/Footer';
import servicePath from '../config/apiUrl';
import styles from '../public/styles/detail.module.css';

const Detail = data => {

  const renderer = new marked.Renderer();

  marked.setOptions(
    {
      renderer: renderer,
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    }
  );

  const html = marked(data.article_content);

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
            <Breadcrumb.Item><a href={`/mylist?id=${data.typeId}`}>{data.typeName}</a></Breadcrumb.Item>
            <Breadcrumb.Item>articles</Breadcrumb.Item>
          </Breadcrumb>

          <div>
            <div className={styles.title}>
              {data.title}
            </div>

            <div className="comm_icon comm_center">
              <span><CalendarOutlined /> {data.addTime}</span>
              <span><FolderOutlined /> {data.typeName}</span>
              <span><FireOutlined /> {data.view_count} views</span>
            </div>

            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: html }}
            >
            </div>
          </div>
        </Col>

        <Col xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Spread />
          <Affix offsetTop={5}>
            <div className={styles.nav_div}>
              <div className={styles.nav_title}>Article Contents</div>
              <MarkdownNavbar
                className={styles.nav}
                source={data.article_content}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>

      <Footer />
    </>
  );
}

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
