import Head from 'next/head';
import { Row, Col } from 'antd';

import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Header />

    <Row className="comm_wrapper" type="flex" justify="center">
      <Col className="comm_main" xs={24} sm={24} md={16} lg={18} xl={14}>
        left side
      </Col>

      <Col xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Advert />
      </Col>
    </Row>

    <Footer />
  </>
);

export default Home;
