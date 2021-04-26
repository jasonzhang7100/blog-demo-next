import styles from '../public/styles/Footer.module.css';

const Footer = () => (
  <div className={styles.wrapper}>
    <div>
      Driven by {<a href="https://reactjs.org/">React</a>} + {<a href="https://nextjs.org/">Next</a>} + {<a href="https://ant.design/">Antd</a>}
    </div>
    <div>
      <a>JZblog.com</a>
    </div>
  </div>
);

export default Footer;
