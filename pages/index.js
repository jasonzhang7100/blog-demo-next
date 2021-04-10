import Head from 'next/head';
import { Row, Col } from 'antd';

import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import styles from '../styles/comm.module.css';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Header />

    <Row className={styles.comm_layout} type="flex" justify="center">
      <Col className={styles.comm_main} xs={24} sm={24} md={16} lg={18} xl={14}>
        left side
      </Col>

      <Col className={styles.comm_box} xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Advert />
      </Col>
    </Row>
  </>
);

export default Home;
