import Head from 'next/head';
import { Row, Col } from 'antd';

import Header from '../components/Header';

const Detail = () => (
  <>
    <Head>
      <title>List</title>
    </Head>

    <Header />

    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
        left side
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        right side
      </Col>
    </Row>
  </>
);

export default Detail;
